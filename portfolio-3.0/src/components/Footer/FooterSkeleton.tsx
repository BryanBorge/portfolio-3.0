import { Box, Group, Skeleton, Stack } from "@mantine/core";

export const FooterSkeleton = () => {
  return (
    <Group justify="space-between">
      <Box>
        <Stack>
          <Skeleton height={20} width={200} radius="md" />
          <Skeleton height={20} width={200} radius="md" />
        </Stack>
      </Box>
      <Box>
        <Stack>
          <Group wrap="wrap">
            <Skeleton height={30} width={30} radius="md" />
            <Skeleton height={30} width={30} radius="md" />
          </Group>
          <Skeleton height={20} width={200} radius="md" />
        </Stack>
      </Box>
    </Group>
  );
};
