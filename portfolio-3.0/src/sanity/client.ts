import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { About, Hero, Skills, WorkExperience } from "../types/sanity.types";

export const client = createClient({
  projectId: "n7nfte7c",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export async function getHeroData(): Promise<Hero> {
  return client.fetch(`*[_type == "hero"][0]`);
}

export async function getAboutMeData(): Promise<About> {
  return client.fetch(`*[_type == "about"][0]`);
}

export async function getSkillsData(): Promise<Skills> {
  return client.fetch(`*[_type == "skills"][0]`);
}

export async function getExperienceData(): Promise<WorkExperience[]> {
  return client.fetch(`*[_type == "workExperience"]  | order(order asc) {
      _id,
      role,
      startDate,
      endDate,
      isCurrent,
      order,
      description,
      company->{
        _id,
        name,
        logo,
        website
      }
    }`);
}
