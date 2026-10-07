import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SKILL_CATEGORIES } from '../../core/constants/portfolio-data';
import { RevealOnScrollDirective } from '../../core/directives/reveal-on-scroll.directive';
import { Icon } from '../../shared/components/icon/icon';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { TechBadge } from '../../shared/components/tech-badge/tech-badge';

@Component({
  selector: 'app-skills',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, SectionTitle, TechBadge, RevealOnScrollDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly categories = SKILL_CATEGORIES;
}
