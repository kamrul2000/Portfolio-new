import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-tech-badge',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="tech-badge" [class.tech-badge--solid]="variant === 'solid'">
      @if (icon) { <span class="tech-badge__icon" aria-hidden="true">{{ icon }}</span> }
      <span class="tech-badge__label">{{ label }}</span>
    </span>
  `,
  styleUrl: './tech-badge.scss',
})
export class TechBadge {
  @Input({ required: true }) label!: string;
  @Input() icon?: string;
  @Input() variant: 'ghost' | 'solid' = 'ghost';
}
