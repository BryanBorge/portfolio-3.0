import { Anchor } from "@mantine/core";
import { MdEmail } from "react-icons/md";
import { ThemeIconGroup } from "./ThemeIconGroup";

export const Email = ({ email }: { email: string }) => {
  return (
    <ThemeIconGroup icon={MdEmail}>
      <Anchor size="sm" c="dimmed" href={`mailto:${email}`} underline="always">
        {email}
      </Anchor>
    </ThemeIconGroup>
   );
};
