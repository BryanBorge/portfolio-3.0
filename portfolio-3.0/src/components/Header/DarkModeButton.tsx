import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

export const DarkModeButton = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computed = useComputedColorScheme("light");

  const isDark = computed === "dark";

  return (
    <ActionIcon
      variant="subtle"
      size="lg"
      onClick={() => setColorScheme(isDark ? "light" : "dark")}
    >
      {isDark ? <IconSun size={18} /> : <IconMoon size={18} />}
    </ActionIcon>
  );
};
