import { Text } from "@mantine/core";
import { FaLocationDot } from "react-icons/fa6";
import { ThemeIconGroup } from "./ThemeIconGroup";

export const Location = ({ location }: { location: string }) => {
  return (
    <ThemeIconGroup icon={FaLocationDot}>
      <Text size="sm" c="dimmed">
        {location}
      </Text>
    </ThemeIconGroup>
  );
};
