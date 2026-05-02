import { ChangeDetectionStrategy, Component } from '@angular/core';

import { About } from '../sections/about/about';
import { Achievements } from '../sections/achievements/achievements';
import { Contact } from '../sections/contact/contact';
import { Education } from '../sections/education/education';
import { Experience } from '../sections/experience/experience';
import { Hero } from '../sections/hero/hero';
import { Projects } from '../sections/projects/projects';
import { Publications } from '../sections/publications/publications';
import { ResumeCta } from '../sections/resume-cta/resume-cta';
import { Skills } from '../sections/skills/skills';

/**
 * Home page — composes every section of the single-page portfolio in
 * the order they appear when scrolling.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    Hero,
    About,
    Skills,
    Experience,
    Education,
    Publications,
    Projects,
    Achievements,
    ResumeCta,
    Contact,
  ],
  template: `
    <main id="main-content">
      <app-hero />
      <app-about />
      <app-skills />
      <app-experience />
      <app-education />
      <app-publications />
      <app-projects />
      <app-achievements />
      <app-resume-cta />
      <app-contact />
    </main>
  `,
})
export class HomePage {}
