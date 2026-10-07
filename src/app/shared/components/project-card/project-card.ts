import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { Project, ProjectCategory } from '../../../core/models/portfolio.models';
import { TechBadge } from '../tech-badge/tech-badge';

const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  'fullstack': 'Full-Stack',
  'web-app': 'Web App',
  'api': 'API',
  'realtime': 'Real-Time',
  'frontend': 'Frontend',
};

@Component({
  selector: 'app-project-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TechBadge],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  @Input({ required: true }) project!: Project;

  /** When the preview image is missing the card renders as a clean text card. */
  protected readonly imageFailed = signal(false);

  protected get categoryLabel(): string {
    return CATEGORY_LABELS[this.project.category] ?? this.project.category;
  }
}
