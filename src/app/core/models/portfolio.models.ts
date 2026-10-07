import type { IconName } from '../../shared/components/icon/icon';

/**
 * Strongly-typed contracts for every section of the portfolio.
 * Update `portfolio-data.ts` to change content; the compiler will surface
 * any mismatch with these shapes immediately.
 */

export interface Profile {
  readonly fullName: string;
  readonly firstName: string;
  readonly title: string;
  readonly company: string;
  readonly location: string;
  readonly email: string;
  readonly phone: string;
  readonly tagline: string;
  readonly summary: string;
  readonly profileImage: string;
  readonly profileFallback: string;
  readonly resumePath: string;
  readonly availability: 'open' | 'busy' | 'away';
}

export interface SocialLink {
  readonly id: string;
  readonly label: string;
  readonly url: string;
  readonly icon: SocialIconKey;
  readonly ariaLabel: string;
}

export type SocialIconKey = 'github' | 'linkedin' | 'email' | 'phone' | 'twitter' | 'website';

export interface Stat {
  readonly value: string;
  readonly label: string;
}

export interface InfoCard {
  readonly icon: IconName;
  readonly label: string;
  readonly value: string;
  readonly href?: string;
}

export interface SkillCategory {
  readonly id: string;
  readonly title: string;
  readonly icon: IconName;
  readonly skills: readonly Skill[];
}

export interface Skill {
  readonly name: string;
  readonly icon?: string;
}

export interface Experience {
  readonly id: string;
  readonly company: string;
  readonly role: string;
  readonly duration: string;
  readonly location?: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly highlights?: readonly ExperienceHighlight[];
  readonly current?: boolean;
}

export interface ExperienceHighlight {
  readonly title: string;
  readonly bullets: readonly string[];
}

export interface Publication {
  readonly id: string;
  readonly title: string;
  readonly authors: readonly string[];
  readonly venue: string;
  readonly year: string;
  readonly doi?: string;
  readonly link?: string;
  readonly highlight?: string;
}

export interface Education {
  readonly id: string;
  readonly institution: string;
  readonly degree: string;
  readonly duration: string;
  readonly grade?: string;
  readonly description?: string;
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly tech: readonly string[];
  readonly category: ProjectCategory;
  readonly featured?: boolean;
  readonly links?: ProjectLinks;
}

export type ProjectCategory =
  | 'fullstack'
  | 'web-app'
  | 'api'
  | 'frontend'
  | 'realtime';

export interface ProjectLinks {
  readonly demo?: string;
  readonly repo?: string;
  readonly docs?: string;
}

export interface Achievement {
  readonly id: string;
  readonly group: 'professional' | 'beyond';
  readonly icon: IconName;
  readonly title: string;
  readonly description: string;
}

export interface NavItem {
  readonly id: string;
  readonly label: string;
  readonly target: string; // anchor id (without #)
}
