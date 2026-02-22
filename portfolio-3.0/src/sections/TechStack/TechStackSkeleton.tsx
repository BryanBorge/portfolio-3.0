import { SimpleGrid, Skeleton, Stack } from "@mantine/core";

export const TechStackSkeleton = () => {
  return (
    <Stack gap="md">
      <Skeleton height={25} radius="md" width={150} />
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
        <Skeleton height={150} radius="md" />
        <Skeleton height={150} radius="md" />
        <Skeleton height={150} radius="md" />
      </SimpleGrid>
    </Stack>
  );
};
