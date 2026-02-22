import { Box, Group, Stack, Text } from "@mantine/core";
import { useFooter } from "./useFooter";
import { format, parseISO } from "date-fns";
import { SocialActionIcon } from "./SocialActionIcon";
import { FooterBreakoutBox } from "./FooterBreakoutBox";
import { FooterSkeleton } from "./FooterSkeleton";
import { Location } from "./Location";
import { Email } from "./Email";

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
            <Location location={data.settings.location} />
            <Email email={data.settings.email} />
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
            <Box>
              <Text size="xs" c="dimmed">
                {`© Bryan Borgesano`}
              </Text>
              <Text size="xs" c="dimmed">
                {`Updated · ${format(parseISO(data.lastUpdated), "MMMM yyyy")}`}
              </Text>
            </Box>
          </Stack>
        </Box>
      </Group>
    </FooterBreakoutBox>
  );
};
