import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Experience } from '../../../core/models/portfolio.models';
import { TechBadge } from '../tech-badge/tech-badge';

@Component({
  selector: 'app-timeline-item',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TechBadge],
  templateUrl: './timeline-item.html',
  styleUrl: './timeline-item.scss',
})
export class TimelineItem {
  @Input({ required: true }) experience!: Experience;
}
