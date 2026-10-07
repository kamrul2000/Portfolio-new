import { ChangeDetectionStrategy, Component } from '@angular/core';
import { INFO_CARDS, PROFILE } from '../../core/constants/portfolio-data';
import { RevealOnScrollDirective } from '../../core/directives/reveal-on-scroll.directive';
import { Icon } from '../../shared/components/icon/icon';
import { SectionTitle } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, SectionTitle, RevealOnScrollDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly profile = PROFILE;
  protected readonly infoCards = INFO_CARDS;

}
