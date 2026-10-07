import { Icon, type IconName } from '../../shared/components/icon/icon';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  computed,
  inject,
  signal,
} from '@angular/core';
import { NAV_ITEMS, PROFILE } from '../../core/constants/portfolio-data';
import { ScrollSpyService } from '../../core/services/scroll-spy.service';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit, OnDestroy {
  protected readonly profile = PROFILE;
  protected readonly navItems = NAV_ITEMS;

  private readonly theme = inject(ThemeService);
  private readonly scrollSpy = inject(ScrollSpyService);

  protected readonly isDark = this.theme.isDark;
  protected readonly activeId = this.scrollSpy.activeSection;

  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  protected readonly themeIcon = computed<IconName>(() => (this.isDark() ? 'sun' : 'moon'));
  protected readonly themeLabel = computed(() =>
    this.isDark() ? 'Switch to light theme' : 'Switch to dark theme',
  );

  ngOnInit(): void {
    this.scrollSpy.observe(this.navItems.map(n => n.target));
    this.onScroll();
  }

  ngOnDestroy(): void {
    this.scrollSpy.disconnect();
    document.body.style.overflow = '';
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (typeof window === 'undefined') return;
    this.scrolled.set(window.scrollY > 12);
  }

  toggleMenu(): void {
    const next = !this.menuOpen();
    this.menuOpen.set(next);
    document.body.style.overflow = next ? 'hidden' : '';
  }

  closeMenu(): void {
    if (!this.menuOpen()) return;
    this.menuOpen.set(false);
    document.body.style.overflow = '';
  }

  goTo(targetId: string, event: Event): void {
    event.preventDefault();
    this.closeMenu();
    this.scrollSpy.scrollTo(targetId);
    history.replaceState(null, '', `#${targetId}`);
  }

  toggleTheme(): void {
    this.theme.toggle();
  }
}
