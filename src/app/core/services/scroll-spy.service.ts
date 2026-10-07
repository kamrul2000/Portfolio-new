import { DOCUMENT, Inject, Injectable, NgZone, OnDestroy, signal } from '@angular/core';

/**
 * Tracks which section is currently in view so the navbar can highlight
 * the active link.
 *
 * Sections are resolved on every update (not once up front) because the page
 * content is lazy-loaded and may not exist yet when the navbar starts observing.
 * Listeners run outside Angular's zone and only re-enter on an actual change.
 */
@Injectable({ providedIn: 'root' })
export class ScrollSpyService implements OnDestroy {
  private ids: string[] = [];
  private frame = 0;
  private timers: number[] = [];
  private readonly onScroll = () => this.schedule();

  readonly activeSection = signal<string>('home');

  constructor(
    @Inject(DOCUMENT) private readonly doc: Document,
    private readonly zone: NgZone,
  ) {}

  observe(sectionIds: readonly string[]): void {
    if (typeof window === 'undefined') return;

    this.disconnect();
    this.ids = [...sectionIds];

    this.zone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.onScroll, { passive: true });
      window.addEventListener('resize', this.onScroll, { passive: true });
      // The lazy page renders after the navbar, so re-check a few times on load.
      for (const delay of [0, 300, 1000]) {
        this.timers.push(window.setTimeout(() => this.update(), delay));
      }
    });
  }

  scrollTo(id: string): void {
    const el = this.doc.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  disconnect(): void {
    if (typeof window === 'undefined') return;
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onScroll);
    cancelAnimationFrame(this.frame);
    this.timers.forEach(t => clearTimeout(t));
    this.timers = [];
  }

  ngOnDestroy(): void {
    this.disconnect();
  }

  private schedule(): void {
    cancelAnimationFrame(this.frame);
    this.frame = requestAnimationFrame(() => this.update());
  }

  private update(): void {
    const line = window.innerHeight * 0.35;
    const atBottom =
      window.innerHeight + window.scrollY >= this.doc.documentElement.scrollHeight - 4;

    let current = this.ids[0];
    for (const id of this.ids) {
      const el = this.doc.getElementById(id);
      if (el && el.getBoundingClientRect().top <= line) current = id;
    }
    if (atBottom) current = this.ids[this.ids.length - 1];

    if (current && current !== this.activeSection()) {
      this.zone.run(() => this.activeSection.set(current));
    }
  }
}
