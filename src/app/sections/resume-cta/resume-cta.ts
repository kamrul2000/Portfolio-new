import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../../core/constants/portfolio-data';
import { RevealOnScrollDirective } from '../../core/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-resume-cta',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealOnScrollDirective],
  templateUrl: './resume-cta.html',
  styleUrl: './resume-cta.scss',
})
export class ResumeCta {
  protected readonly profile = PROFILE;
}
