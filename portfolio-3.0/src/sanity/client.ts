import { createClient } from "@sanity/client";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import type {
  AboutQueryResult,
  ExperienceQueryResponse,
  HeroQueryResult,
  SkillsQueryResult,
} from "../types/sanity.client.types";

export const client = createClient({
  projectId: "n7nfte7c",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export async function getHeroData(): Promise<HeroQueryResult> {
  return client.fetch(`*[_type == "hero"][0]{
    name, 
    title, 
    heroSubtext,
    profileImage
  }`);
}

export async function getAboutMeData(): Promise<AboutQueryResult> {
  return client.fetch(`*[_type == "about"][0]{
    about
  }`);
}

export async function getSkillsData(): Promise<SkillsQueryResult> {
  return client.fetch(`*[_type == "skills"][0]{
    heading,
    categories[]{
      _key,
      title,
      technologies[]{
        _key,
        name,
        variant
      }
    }
  }`);
}

export async function getExperienceData(): Promise<ExperienceQueryResponse> {
  return client.fetch(`*[_type == "workExperienceSection"][0]{
  _id,
  heading,
  "items": items[]->|order(order asc){
    _id,
    role,
    startDate,
    endDate,
    isCurrent,
    description,
    order,
    "company": company->{
      _id,
      name,
      website,
      logo
    }
  }
}`);
}
