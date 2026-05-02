import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Project } from '../../../core/models/portfolio.models';
import { TechBadge } from '../tech-badge/tech-badge';

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

  readonly fallbackImage = 'assets/images/placeholders/project-fallback.svg';

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img.src.endsWith(this.fallbackImage)) return; // prevent loop
    img.src = this.fallbackImage;
    img.classList.add('is-fallback');
  }
}
