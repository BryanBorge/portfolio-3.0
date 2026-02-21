import {
  AppShell,
  Group,
} from "@mantine/core";
import { DarkModeButton } from "./DarkModeButton";

export const Header = () => {
  return (
    <AppShell.Header withBorder={false}>
      <Group p="sm" justify="flex-end">
       <DarkModeButton />
      </Group>
    </AppShell.Header>
  );
};
