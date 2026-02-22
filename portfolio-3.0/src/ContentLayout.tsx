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
        <Space h="xl" />
        <About />
        <Space h="lg" />
        <TechStack />
        <Space h="lg" />
        <Experience />
        <Space h="lg" />
      </Stack>
    </Container>

  );
};
