import {
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Suspense, use } from "react";
import { getSkillsData } from "../../sanity/client";

const dataPromise = getSkillsData();

export const TechStack = () => {
  const data = use(dataPromise);

  return (
    <Stack gap="md">
      <Title order={3}>Core Stack</Title>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
        {data.categories?.map((category) => (
          <Card withBorder p="lg" radius="md" shadow="sm">
            <Stack gap="sm">
              <Title order={5}>{category.title}</Title>
              <Group gap="sm">
                {category.technologies?.map((tech) => (
                  <Badge key={tech._key} variant={tech.variant}>
                    {tech.name}
                  </Badge>
                ))}
              </Group>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export const TechStackContainer = () => {
  return (
    <Container size="md" w="100%">
      <Suspense fallback={<Text>Loading SKILLS...</Text>}>
        <TechStack />
      </Suspense>
    </Container>
  );
};
