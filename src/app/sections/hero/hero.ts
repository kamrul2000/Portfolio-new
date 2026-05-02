import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PROFILE, STATS } from '../../core/constants/portfolio-data';
import { ScrollSpyService } from '../../core/services/scroll-spy.service';
import { SocialLinks } from '../../shared/components/social-links/social-links';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SocialLinks],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly profile = PROFILE;
  protected readonly stats = STATS;

  private readonly scrollSpy = inject(ScrollSpyService);

  scrollTo(targetId: string, event: Event): void {
    event.preventDefault();
    this.scrollSpy.scrollTo(targetId);
  }

  onAvatarError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img.src.endsWith(this.profile.profileFallback)) return;
    img.src = this.profile.profileFallback;
    img.classList.add('is-fallback');
  }
}
