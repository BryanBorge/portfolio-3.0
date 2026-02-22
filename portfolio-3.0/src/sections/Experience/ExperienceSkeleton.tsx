import { Skeleton, Stack } from "@mantine/core";

export const ExperienceSkeleton = () => {
  return (
    <Stack gap="md">
      <Skeleton height={25} radius="md" width={150} />
      <Stack gap="lg">
        <Skeleton height={250} radius="md" />
        <Skeleton height={100} radius="md" />
      </Stack>
    </Stack>
  );
};
