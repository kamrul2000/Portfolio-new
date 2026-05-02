import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EDUCATION_LIST } from '../../core/constants/portfolio-data';
import { RevealOnScrollDirective } from '../../core/directives/reveal-on-scroll.directive';
import { SectionTitle } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-education',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionTitle, RevealOnScrollDirective],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  protected readonly items = EDUCATION_LIST;
}
