import { useState } from "react";
import {
  Container,
  Title,
  Text,
  Button,
  Group,
  AppShell,
  Burger,
  UnstyledButton,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <Title order={4} m={0}>
              Bryan Borgesano
            </Title>
            <Group gap="xs" visibleFrom="sm">
              <Button variant="subtle">About</Button>
              <Button variant="subtle">Experience</Button>
              <Button
                variant="outline"
                component="a"
                href="https://docs.google.com/document/d/1ZaOCL9HNV2RNFFeiTGApiCXvs2RKhgyno198-pxQPgQ/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Button>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px="xl">
        <Stack gap="md" justify="center">
          <Button variant="subtle">About</Button>
          <Button variant="subtle">Experience</Button>
          <Button
            variant="outline"
            component="a"
            href="https://docs.google.com/document/d/1ZaOCL9HNV2RNFFeiTGApiCXvs2RKhgyno198-pxQPgQ/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Button>
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>
        Navbar is only visible on mobile, links that are rendered in the header
        on desktop are hidden on mobile in header and rendered in navbar
        instead.
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
