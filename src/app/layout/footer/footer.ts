import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NAV_ITEMS, PROFILE } from '../../core/constants/portfolio-data';
import { SocialLinks } from '../../shared/components/social-links/social-links';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SocialLinks],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly profile = PROFILE;
  protected readonly navItems = NAV_ITEMS;
  protected readonly currentYear = new Date().getFullYear();
}
