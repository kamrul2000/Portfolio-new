import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ACHIEVEMENTS } from '../../core/constants/portfolio-data';
import { RevealOnScrollDirective } from '../../core/directives/reveal-on-scroll.directive';
import { Icon } from '../../shared/components/icon/icon';
import { SectionTitle } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-achievements',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, SectionTitle, RevealOnScrollDirective],
  templateUrl: './achievements.html',
  styleUrl: './achievements.scss',
})
export class Achievements {
  protected readonly professional = ACHIEVEMENTS.filter((a) => a.group === 'professional');
  protected readonly beyond = ACHIEVEMENTS.filter((a) => a.group === 'beyond');
}
