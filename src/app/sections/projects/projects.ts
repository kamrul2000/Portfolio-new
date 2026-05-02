import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { PROJECTS } from '../../core/constants/portfolio-data';
import { RevealOnScrollDirective } from '../../core/directives/reveal-on-scroll.directive';
import { ProjectCategory } from '../../core/models/portfolio.models';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { SectionTitle } from '../../shared/components/section-title/section-title';

type Filter = 'all' | ProjectCategory;

interface FilterOption {
  readonly id: Filter;
  readonly label: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionTitle, ProjectCard, RevealOnScrollDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly filters: readonly FilterOption[] = [
    { id: 'all',       label: 'All' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'web-app',   label: 'Web Apps' },
    { id: 'api',       label: 'APIs' },
    { id: 'realtime',  label: 'Real-Time' },
    { id: 'frontend',  label: 'Frontend' },
  ] as const;

  protected readonly active = signal<Filter>('all');

  protected readonly visible = computed(() => {
    const filter = this.active();
    return filter === 'all'
      ? PROJECTS
      : PROJECTS.filter(p => p.category === filter);
  });

  protected setFilter(filter: Filter): void {
    this.active.set(filter);
  }
}
