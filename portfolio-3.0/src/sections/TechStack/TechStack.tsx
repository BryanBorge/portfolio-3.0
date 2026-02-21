import {
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Title,
} from "@mantine/core";

export const TechStack = () => {
  return (
    <Stack gap="md">
      <Title order={3}>Core Stack</Title>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
        <Card withBorder p="lg" radius="md" shadow="sm">
          <Stack gap="sm">
            <Title order={5}>Web</Title>
            <Group gap="sm">
              <Badge variant="filled">React</Badge>
              <Badge variant="filled">Typescript</Badge>
              <Badge variant="light">Material UI</Badge>
              <Badge variant="light">graphQL</Badge>
              <Badge variant="light">ASP.NET</Badge>
            </Group>
          </Stack>
        </Card>
        <Card withBorder p="lg" radius="md" shadow="sm">
          <Stack gap="sm">
            <Title order={5}>Mobile</Title>
            <Group gap="sm">
              <Badge variant="filled">React Native</Badge>
              <Badge variant="filled">Expo</Badge>
              <Badge variant="light">NFC</Badge>
              <Badge variant="light">BLE</Badge>
            </Group>
          </Stack>
        </Card>
        <Card withBorder p="lg" radius="md" shadow="sm">
          <Stack gap="sm">
            <Title order={5}>Backend & Systems</Title>
            <Group gap="sm">
              <Badge variant="light">.NET Core</Badge>
              <Badge variant="light">Docker</Badge>
              <Badge variant="light">Azure DevOps</Badge>
            </Group>
          </Stack>
        </Card>
      </SimpleGrid>
    </Stack>
  );
};

export 
const TechStackContainer = () => {
  return (
    <Container size="md" w="100%">
      <TechStack />
    </Container>
  );
};
