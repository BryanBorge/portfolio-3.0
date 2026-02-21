import { Container, Stack, Text, Title, Typography } from "@mantine/core";
import { Suspense, use, type JSX } from "react";
import { getAboutMeData } from "../../sanity/client";
import { PortableText } from "@portabletext/react";

const dataPromise = getAboutMeData();

export const About = () => {
  const data = use(dataPromise);

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
      blockquote: ({ children }: { children?: React.ReactNode }) => (
        <Text fs="italic" c="dimmed">
          {children}
        </Text>
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

export const AboutContainer = () => {
  return (
    <Container
      size="md"
      w="
    100%"
    >
      <Suspense fallback={<Text>Loading ABOUT...</Text>}>
        <About />
      </Suspense>
    </Container>
  );
};
