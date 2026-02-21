import { Space, Stack } from "@mantine/core";
import { HeroContainer } from "./sections/Hero/Hero";
import { AboutContainer } from "./sections/About/About";
import { Experience } from "./sections/Experience/Experience";
import { TechStackContainer } from "./sections/TechStack/TechStack";

export const ContentLayout = () => {
  return (
    <Stack gap="xl">
      <HeroContainer />
      <AboutContainer />
      <Space h="md" />
      <TechStackContainer />
      <Space h="md" />
      <Experience />
      <Space h="lg" />
    </Stack>
  );
};
