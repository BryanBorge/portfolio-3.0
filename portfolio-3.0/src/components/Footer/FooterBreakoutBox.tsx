import { Box, Container } from "@mantine/core";

export const FooterBreakoutBox = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Box
      data-breakout
      component="footer"
      py="md"
      style={{ borderTop: "1px solid var(--mantine-color-gray-5)" }}
    >
      <Container size="md">{children}</Container>
    </Box>
  );
};
