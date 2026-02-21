import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { About, Hero } from "../types/sanity.types";

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
  return client.fetch(`*[_type == "hero"][0]{
    name,
    title,
    heroSubtext,
    profileImage
  }`);
}

export async function getAboutMeData(): Promise<About>{
  return client.fetch(`*[_type == "about"][0]`);
}

