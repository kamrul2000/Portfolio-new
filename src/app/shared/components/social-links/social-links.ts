import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SOCIAL_LINKS } from '../../../core/constants/portfolio-data';
import { SocialLink } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-social-links',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './social-links.html',
  styleUrl: './social-links.scss',
})
export class SocialLinks {
  @Input() variant: 'solid' | 'ghost' = 'ghost';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() links: readonly SocialLink[] = SOCIAL_LINKS;

  trackById(_: number, item: SocialLink): string {
    return item.id;
  }
}
