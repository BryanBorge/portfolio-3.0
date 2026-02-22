import { Anchor, Box, Group, Stack, Text } from "@mantine/core";
import { useFooter } from "./useFooter";
import { format, parseISO } from "date-fns";
import { SocialActionIcon } from "./SocialActionIcon";
import { FooterBreakoutBox } from "./FooterBreakoutBox";
import { FooterSkeleton } from "./FooterSkeleton";

export const Footer = () => {
  const { data, isLoading, isError, error } = useFooter();

  if (isLoading)
    return (
      <FooterBreakoutBox>
        <FooterSkeleton />
      </FooterBreakoutBox>
    );

  if (isError) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return <Text c="red">Failed to load footer: {message}</Text>;
  }

  return (
    <FooterBreakoutBox>
      <Group justify="space-between">
        <Box>
          <Stack>
            <Text size="sm" c="dimmed">
              {data.settings.location}
            </Text>
            <Anchor
              size="sm"
              c="dimmed"
              href={`mailto:${data.settings.email}`}
              underline="always"
            >
              {data.settings.email}
            </Anchor>
          </Stack>
        </Box>
        <Box>
          <Stack>
            <Group>
              <SocialActionIcon
                url={data.settings.socialLinks.githubUrl}
                iconName={data.settings.socialLinks.githubIcon}
              />

              <SocialActionIcon
                url={data.settings.socialLinks.linkedinUrl}
                iconName={data.settings.socialLinks.linkedinIcon}
              />
            </Group>
            <Text size="sm" c="dimmed">
              {`Updated · ${format(parseISO(data.lastUpdated), "MMMM yyyy")}`}
            </Text>
          </Stack>
        </Box>
      </Group>
    </FooterBreakoutBox>
  );
};
