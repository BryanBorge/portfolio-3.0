import type {
  About,
  Company,
  Hero,
  Skills,
  WorkExperience,
  WorkExperienceSection,
} from "./sanity.types";

// WorkExperience but company is expanded to a full Company doc
export type WorkExperienceWithCompany = Omit<WorkExperience, "company"> & {
  company: Company;
};

// WorkExperienceSection but items are expanded to full WorkExperience docs (with expanded company)
export type ExperienceQueryResponse = Omit<WorkExperienceSection, "items"> & {
  items: WorkExperienceWithCompany[];
};

export type HeroQueryResult = Pick<
  Hero,
  "name" | "title" | "heroSubtext" | "profileImage"
>;

export type AboutQueryResult = Pick<About, "about">;

export type SkillsQueryResult = Pick<Skills, "heading" | "categories">;