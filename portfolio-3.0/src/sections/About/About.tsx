import { Stack, Text, Title } from "@mantine/core";
import { PortableText } from "@portabletext/react";
import { useAbout } from "./useAbout";
import { AboutSkeleton } from "./AboutSkeleton";

export const About = () => {
  const { data, isLoading, isError, error } = useAbout();

  if (isLoading) return <AboutSkeleton />;

  if (isError) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return <Text c="red">Failed to load about: {message}</Text>;
  }

  const components = {
    block: {
      h1: ({ children }: { children?: React.ReactNode }) => (
        <Title order={1}>{children}</Title>
      ),
      h2: ({ children }: { children?: React.ReactNode }) => (
        <Title order={2}>{children}</Title>
      ),
      normal: ({ children }: { children?: React.ReactNode }) => (
        <Text size="md">{children}</Text>
      ),
    },
  };

  return (
    <Stack gap="md">
      {data.about ? (
        <PortableText value={data.about} components={components} />
      ) : null}
    </Stack>
  );
};
