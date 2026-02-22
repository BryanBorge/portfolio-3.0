import { Group, Paper, Skeleton, Stack } from "@mantine/core";

export const HeroSkeleton = () => {
  return (
    <Group wrap="wrap">
      <Paper shadow="lg">
        <Skeleton h={175} w={175} radius="md" />
      </Paper>
      <Stack
        style={{ flex: 1, minWidth: 225, width: 225}}
      >
        <Group wrap="wrap">
          <Skeleton height={25} radius="md" />
          <Skeleton height={25} radius="md" />
        </Group>
        <Skeleton height={25} radius="md" />
      </Stack>
    </Group>
  );
};
