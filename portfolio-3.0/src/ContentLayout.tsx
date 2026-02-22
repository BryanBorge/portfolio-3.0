import { Container, Space, Stack } from "@mantine/core";
import { Hero } from "./sections/Hero/Hero";
import { About } from "./sections/About/About";
import { Experience } from "./sections/Experience/Experience";
import { TechStack } from "./sections/TechStack/TechStack";

export const ContentLayout = () => {
  return (
    <Container size="md">
      <Stack gap="xl">
        <Hero />
        <About />
        <Space h="md" />
        <TechStack />
        <Space h="md" />
        <Experience />
        <Space h="lg" />
      </Stack>
    </Container>

  );
};
