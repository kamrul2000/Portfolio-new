import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PUBLICATIONS } from '../../core/constants/portfolio-data';
import { RevealOnScrollDirective } from '../../core/directives/reveal-on-scroll.directive';
import { SectionTitle } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-publications',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionTitle, RevealOnScrollDirective],
  templateUrl: './publications.html',
  styleUrl: './publications.scss',
})
export class Publications {
  protected readonly items = PUBLICATIONS;
}
