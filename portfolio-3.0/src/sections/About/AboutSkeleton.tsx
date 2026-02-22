import { Skeleton, Stack, useMatches } from "@mantine/core";

export const AboutSkeleton = () => {
  const height = useMatches({
    base: 100,
    xs: 100,
    sm: 50,
  });

  return (
    <Stack gap="md">
      <Skeleton height={height} radius="md" />
      <Skeleton height={height} radius="md" />
      <Skeleton height={height} radius="md" />
    </Stack>
  );
};
