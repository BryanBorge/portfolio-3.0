import { Box, Group, Image, Title, Text, Paper, Stack } from "@mantine/core";
import { urlFor } from "../../sanity/client";
import { useHero } from "./useHero";
import { HeroSkeleton } from "./HeroSkeleton";

export const Hero = () => {
  const { data, isLoading, isError, error } = useHero();

  if (isLoading) return <HeroSkeleton />;

  if (isError) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return <Text c="red">Failed to load hero: {message}</Text>;
  }

  return (
    <Group>
      <Paper shadow="lg">
        <Image
          h={175}
          w={175}
          radius="md"
          src={urlFor(data.profileImage).url()}
        />
      </Paper>
      <Stack gap="md" style={{ flex: 1, minWidth: 225, width: 225 }}>
        <Box>
          <Title order={2}>{data.name}</Title>
          <Title order={5} c="dimmed">
            {data.title}
          </Title>
        </Box>
        <Text size="md">{data.heroSubtext}</Text>
      </Stack>
    </Group>
  );
};
