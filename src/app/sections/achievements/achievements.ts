import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ACHIEVEMENTS } from '../../core/constants/portfolio-data';
import { RevealOnScrollDirective } from '../../core/directives/reveal-on-scroll.directive';
import { SectionTitle } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-achievements',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionTitle, RevealOnScrollDirective],
  templateUrl: './achievements.html',
  styleUrl: './achievements.scss',
})
export class Achievements {
  protected readonly items = ACHIEVEMENTS;
}
