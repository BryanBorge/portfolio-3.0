import { createClient } from "@sanity/client";
import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";
import type {
  AboutQueryResult,
  ExperienceQueryResponse,
  FooterQueryResponse,
  HeroQueryResult,
  TechStackQueryResult,
} from "../types/sanity.client.types";

export const client = createClient({
  projectId: "n7nfte7c",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const builder = createImageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};

export const getHero = async (): Promise<HeroQueryResult> => {
  return client.fetch(`*[_type == "hero"][0]{
    name, 
    title, 
    heroSubtext,
    profileImage
  }`);
};

export const getAboutMe = async (): Promise<AboutQueryResult> => {
  return client.fetch(`*[_type == "about"][0]{
    about
  }`);
};

export const getTechStack = async (): Promise<TechStackQueryResult> => {
  return client.fetch(`*[_type == "techStack"][0]{
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
};

export const getExperience = async (): Promise<ExperienceQueryResponse> => {
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
};

export const getFooterSettings = async () => {
  return client.fetch<FooterQueryResponse>(`
    {
      "settings": *[_type == "footerSettings"][0]{
        location,
        email,
        socialLinks {
          githubUrl,
          githubIcon,
          linkedinUrl,
          linkedinIcon
        }
      },
      "lastUpdated": *[
        _type in ["hero", "about", "workExperienceSection", "techStack", "footerSettings"]
      ]
      | order(_updatedAt desc)[0]._updatedAt
    }
  `);
};
