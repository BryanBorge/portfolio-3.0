import {
  Box,
  Group,
  Image,
  Space,
  Title,
  Text,
  Paper,
} from "@mantine/core";
import { urlFor } from "../../sanity/client";
import { useHero } from "./useHero";


export const Hero = () => {
  const { data, isLoading, isError, error } = useHero();
 
  if (isLoading) return <Text>Loading hero...</Text>;

  if (isError) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return <Text c="red">Failed to load hero: {message}</Text>;
  }

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
