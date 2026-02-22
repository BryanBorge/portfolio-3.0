import { ActionIcon } from "@mantine/core";
import * as FaIcons from "react-icons/fa";

type SocialIconProps = {
  url: string;
  iconName: string;
};

export const SocialActionIcon = ({ url, iconName }: SocialIconProps) => {
  const Icon = FaIcons[iconName as keyof typeof FaIcons];
  
  if (!Icon) return null;

  return (
    <ActionIcon
      component="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      variant="subtle"
      color="gray"
      size="sm"
    >
      <Icon size={18} />
    </ActionIcon>
  );
};
