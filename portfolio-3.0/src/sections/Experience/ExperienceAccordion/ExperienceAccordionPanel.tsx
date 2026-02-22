import { Accordion, List, Text } from "@mantine/core";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { WorkExperience } from "../../../types/sanity.types";

type ExperienceAccordionControlPanelProps = Pick<WorkExperience, "description">;

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <Text mb="sm">{children}</Text>,
  },
  list: {
    bullet: ({ children }) => <List spacing="md">{children}</List>,
    number: ({ children }) => (
      <List type="ordered" spacing="md">
        {children}
      </List>
    ),
  },
  listItem: {
    bullet: ({ children }) => <List.Item>{children}</List.Item>,
    number: ({ children }) => <List.Item>{children}</List.Item>,
  },
};

export const ExperienceAccordionControlPanel = ({
  description,
}: ExperienceAccordionControlPanelProps) => {
  return (
    <Accordion.Panel>
      <PortableText value={description} components={portableTextComponents} />
    </Accordion.Panel>
  );
};
