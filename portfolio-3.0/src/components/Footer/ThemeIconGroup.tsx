import { Group, ThemeIcon } from "@mantine/core";
import type { IconType } from "react-icons";

type ThemeIconGroupProps = {
  children: React.ReactNode;
  icon: IconType;
};

export const ThemeIconGroup = ({
  children,
  icon: Icon,
}: ThemeIconGroupProps) => {
  return (
    <Group gap="xs">
      <ThemeIcon variant="subtle" c="dimmed" size="sm">
        <Icon />
      </ThemeIcon>
      {children}
    </Group>
  );
};
