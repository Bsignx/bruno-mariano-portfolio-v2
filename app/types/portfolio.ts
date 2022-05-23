export interface Portfolio {
  id: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroButtonName: string;
  heroImage: HeroImage;
  aboutDescription: string;
  aboutTechName: string[];
  aboutTitle: string;
  contactButton: string;
  contactDescription: string;
  contactEmail: string;
  contactTitle: string;
  projectsTitle: string;
  projectsButtonName: string;
  footerTitle: string;
  experienceTitle: string;
  project: Project[];
  heroResumeAttachment: HeroResumeAttachment;
}

export interface HeroImage {
  url: string;
  tags: any[];
  type: string;
  bytes: number;
  width: number;
  format: string;
  height: number;
  derived: Derived[];
  version: number;
  duration: null;
  metadata: Metadata;
  public_id: string;
  created_at: Date;
  created_by: EdBy;
  secure_url: string;
  access_mode: string;
  uploaded_by: EdBy;
  resource_type: string;
}

export interface EdBy {
  id: string;
  type: string;
}

export interface Derived {
  url: string;
  secure_url: string;
  raw_transformation: string;
}

export interface Metadata {}

export interface HeroResumeAttachment {
  url: string;
  fileName: string;
  id: string;
}

export interface Project {
  title: string;
  techUsedName: string[];
  stage: string;
  repositoryUrl: string;
  id: string;
  description: string;
}
