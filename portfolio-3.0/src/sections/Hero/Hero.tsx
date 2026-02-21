import {
  Box,
  Container,
  Group,
  Image,
  Space,
  Title,
  Text,
  Paper,
} from "@mantine/core";
import { getHeroData, urlFor } from "../../sanity/client";
import { Suspense, use } from "react";

const dataPromise = getHeroData();

export const Hero = () => {
  const data = use(dataPromise);

  return (
    <Group>
      <Paper shadow="lg">
        <Image
          h={175}
          radius="md"
          w="auto"
          src={urlFor(data.profileImage).url()}
        />
      </Paper>
      <Box>
        <Title order={2}>{data.name}</Title>
        <Title order={5} c="dimmed">{data.title}</Title>
        <Space h="sm" />
        <Text size="md">{data.heroSubtext}</Text>
      </Box>
    </Group>
  );
};

export const HeroContainer = () => {
  return (
    <Container size="md">
      <Suspense fallback={<Text>Loading HERO...</Text>}>
        <Hero />
      </Suspense>
    </Container>
  );
};
