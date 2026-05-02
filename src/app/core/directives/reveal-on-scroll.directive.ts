import { AfterViewInit, Directive, ElementRef, Input, NgZone, OnDestroy, inject } from '@angular/core';

/**
 * Adds the `is-visible` class once the host enters the viewport.
 * Pair with the `.reveal` SCSS utility for a subtle fade-up entrance.
 *
 * Usage: <div appReveal>...</div>
 *        <div appReveal [revealDelay]="120">...</div>
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
  host: { class: 'reveal' },
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  @Input() revealDelay = 0;
  @Input() revealThreshold = 0.15;

  private observer?: IntersectionObserver;
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly zone = inject(NgZone);

  ngAfterViewInit(): void {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      this.host.nativeElement.classList.add('is-visible');
      return;
    }

    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        entries => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;

            const el = entry.target as HTMLElement;
            window.setTimeout(
              () => el.classList.add('is-visible'),
              this.revealDelay,
            );
            this.observer?.unobserve(el);
          }
        },
        { threshold: this.revealThreshold, rootMargin: '0px 0px -10% 0px' },
      );

      this.observer.observe(this.host.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
