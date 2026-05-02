import { DOCUMENT, Inject, Injectable, NgZone, OnDestroy, signal } from '@angular/core';

/**
 * Tracks which section is currently in view so the navbar can highlight
 * the active link. Uses IntersectionObserver and runs callbacks outside
 * Angular's zone for performance, only re-entering on actual changes.
 */
@Injectable({ providedIn: 'root' })
export class ScrollSpyService implements OnDestroy {
  private observer?: IntersectionObserver;
  private observedIds: string[] = [];

  readonly activeSection = signal<string>('home');

  constructor(
    @Inject(DOCUMENT) private readonly doc: Document,
    private readonly zone: NgZone,
  ) {}

  observe(sectionIds: readonly string[]): void {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    this.disconnect();
    this.observedIds = [...sectionIds];

    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        entries => {
          // Pick the entry with the largest intersection ratio currently visible.
          const visible = entries
            .filter(e => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

          if (!visible) return;

          const id = (visible.target as HTMLElement).id;
          if (id && id !== this.activeSection()) {
            this.zone.run(() => this.activeSection.set(id));
          }
        },
        {
          rootMargin: '-35% 0px -55% 0px',
          threshold: [0, 0.25, 0.5, 0.75, 1],
        },
      );

      for (const id of this.observedIds) {
        const el = this.doc.getElementById(id);
        if (el) this.observer!.observe(el);
      }
    });
  }

  scrollTo(id: string): void {
    const el = this.doc.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  disconnect(): void {
    this.observer?.disconnect();
    this.observer = undefined;
  }

  ngOnDestroy(): void {
    this.disconnect();
  }
}
