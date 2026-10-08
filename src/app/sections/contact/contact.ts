import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CONTACT_ENDPOINT, PROFILE } from '../../core/constants/portfolio-data';
import { RevealOnScrollDirective } from '../../core/directives/reveal-on-scroll.directive';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { SocialLinks } from '../../shared/components/social-links/social-links';

interface ContactItem {
  readonly icon: 'email' | 'phone' | 'location';
  readonly label: string;
  readonly value: string;
  readonly href?: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionTitle, SocialLinks, ReactiveFormsModule, RevealOnScrollDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly fb = inject(FormBuilder);

  protected readonly profile = PROFILE;

  protected readonly toast = signal<'idle' | 'success' | 'error'>('idle');
  protected readonly submitting = signal(false);

  protected readonly form = this.fb.group({
    name:    ['', [Validators.required, Validators.minLength(2)]],
    email:   ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected readonly contactItems: readonly ContactItem[] = [
    {
      icon: 'email',
      label: 'Email',
      value: this.profile.email,
      href: `mailto:${this.profile.email}`,
    },
    {
      icon: 'phone',
      label: 'Phone',
      value: this.profile.phone,
      href: `tel:${this.profile.phone.replace(/\s+/g, '')}`,
    },
    {
      icon: 'location',
      label: 'Location',
      value: this.profile.location,
    },
  ];

  hasError(field: 'name' | 'email' | 'subject' | 'message'): boolean {
    const control = this.form.get(field);
    return !!control && control.invalid && (control.dirty || control.touched);
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (this.submitting()) return;

    this.submitting.set(true);

    try {
      if (!CONTACT_ENDPOINT) throw new Error('Contact endpoint is not configured');

      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...this.form.getRawValue(),
          _gotcha: this.honeypot, // spam trap: real users leave it empty
        }),
      });

      if (!response.ok) throw new Error(`Request failed (${response.status})`);

      this.form.reset();
      this.showToast('success');
    } catch {
      this.showToast('error');
    } finally {
      this.submitting.set(false);
    }
  }

  /** Hidden field bound in the template; bots tend to fill it in. */
  protected honeypot = '';

  private showToast(kind: 'success' | 'error'): void {
    this.toast.set(kind);
    setTimeout(() => this.toast.set('idle'), 5000);
  }
}
