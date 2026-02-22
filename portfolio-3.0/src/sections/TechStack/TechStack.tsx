import {
  Badge,
  Card,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useTechStack } from "./useTechStack";
import { TechStackSkeleton } from "./TechStackSkeleton";

export const TechStack = () => {
  const { data, isLoading, isError, error } = useTechStack();

  if (isLoading) return <TechStackSkeleton />;

  if (isError) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return <Text c="red">Failed to load experience: {message}</Text>;
  }

  return (
    <Stack gap="md">
      <Title order={3}>{data.heading}</Title>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
        {data.categories?.map((category) => (
          <Card withBorder p="lg" radius="md" shadow="sm" key={category._key}>
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
