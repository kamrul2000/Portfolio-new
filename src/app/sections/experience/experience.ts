import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EXPERIENCES } from '../../core/constants/portfolio-data';
import { RevealOnScrollDirective } from '../../core/directives/reveal-on-scroll.directive';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { TimelineItem } from '../../shared/components/timeline-item/timeline-item';

@Component({
  selector: 'app-experience',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionTitle, TimelineItem, RevealOnScrollDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected readonly experiences = EXPERIENCES;
}
