import { DOCUMENT, Inject, Injectable, computed, effect, signal } from '@angular/core';

export type Theme = 'light' | 'dark';
const STORAGE_KEY = 'portfolio:theme';

/**
 * Persists the user's preferred theme and reflects it onto
 * <html data-theme="..."> so global tokens swap instantly.
 *
 * Falls back to OS preference on first visit.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly _theme = signal<Theme>(this.resolveInitialTheme());

  readonly theme = this._theme.asReadonly();
  readonly isDark = computed(() => this._theme() === 'dark');

  constructor(@Inject(DOCUMENT) private readonly doc: Document) {
    this.applyTheme(this._theme());

    // Re-apply whenever the signal changes (also persists to localStorage).
    effect(() => {
      const next = this._theme();
      this.applyTheme(next);
      this.persist(next);
    });
  }

  toggle(): void {
    this._theme.update(t => (t === 'dark' ? 'light' : 'dark'));
  }

  set(theme: Theme): void {
    this._theme.set(theme);
  }

  // ---------------------------------------------------------------------------
  private resolveInitialTheme(): Theme {
    if (typeof window === 'undefined') return 'dark';

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
      if (stored === 'dark' || stored === 'light') return stored;
    } catch {
      /* localStorage may be blocked; fall through to OS preference */
    }

    const prefersLight = window.matchMedia?.('(prefers-color-scheme: light)').matches ?? false;
    return prefersLight ? 'light' : 'dark';
  }

  private applyTheme(theme: Theme): void {
    this.doc.documentElement.setAttribute('data-theme', theme);
  }

  private persist(theme: Theme): void {
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore */
    }
  }
}
