import { ChangeDetectionStrategy, Component } from '@angular/core';
import { INFO_CARDS, PROFILE } from '../../core/constants/portfolio-data';
import { RevealOnScrollDirective } from '../../core/directives/reveal-on-scroll.directive';
import { SectionTitle } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionTitle, RevealOnScrollDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly profile = PROFILE;
  protected readonly infoCards = INFO_CARDS;

  protected readonly highlights = [
    'Enterprise web application architecture',
    'RESTful API design & integration',
    'Angular frontend development',
    'ASP.NET Core backend development',
    'Microsoft Azure deployment',
    'Docker & containerized environments',
    'Clean architecture & SOLID principles',
    'Database design & query optimization',
  ] as const;
}
