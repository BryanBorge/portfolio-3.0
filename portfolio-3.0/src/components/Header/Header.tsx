import { AppShell, Group, useMantineTheme } from "@mantine/core";
import { DarkModeButton } from "./DarkModeButton";

export const Header = () => {
      const theme = useMantineTheme();
  
  return (
    <AppShell.Header
      withBorder={false}
      style={{
        boxShadow: theme.shadows["xs"],
      }}
    >
      <Group p="sm" justify="flex-end">
        <DarkModeButton />
      </Group>
    </AppShell.Header>
  );
};
