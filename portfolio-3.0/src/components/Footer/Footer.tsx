import { Box, Container, Group, Stack, Text } from "@mantine/core";

export const Footer = () => {
  return (
    <Box
      data-breakout
      component="footer"
      p="md"
      style={{ borderTop: "1px solid var(--mantine-color-gray-5)" }}
    >
      <Container size="md">
        <Group justify="space-between">
          <Box>
            <Stack>
              <Text size="sm" c="dimmed">
                Long Island, New York
              </Text>
              <Text size="sm" c="dimmed">
                BryanBorgesano97@gmail.com
              </Text>
            </Stack>
          </Box>
          <Box>
            <Stack>
              <Text size="sm" c="dimmed">
                Connect with me: 
              </Text>
              <Text size="sm" c="dimmed">
                Last updated: February 2026
              </Text>
            </Stack>
          </Box>
        </Group>
      </Container>
    </Box>
  );
};
