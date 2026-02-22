import { Accordion, Box, Space, Text, Title } from "@mantine/core";
import { ExperienceAccordionControl } from "./ExperienceAccordion/ExperienceAccordionControl/ExperienceAccordionControl";
import { ExperienceAccordionControlPanel } from "./ExperienceAccordion/ExperienceAccordionPanel";
import { useExperience } from "./useExperience";
import { ExperienceSkeleton } from "./ExperienceSkeleton";

export const Experience = () => {
  const { data, isLoading, isError, error } = useExperience();

  if (isLoading) return <ExperienceSkeleton />;

  if (isError) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return <Text c="red">Failed to load experience: {message}</Text>;
  }

  return (
    <Box>
      <Title order={3}>{data.heading}</Title>
      <Space h="md" />
      <Accordion variant="separated" defaultValue="Applied Visions">
        {data.items.map((item) => (
          <Accordion.Item key={item._id} value={item.company.name}>
            <ExperienceAccordionControl
              {...item}
              logo={item.company.logo}
              companyName={item.company.name}
            />
            <ExperienceAccordionControlPanel
              description={item.description}
            />
          </Accordion.Item>
        ))}
      </Accordion>
    </Box>
  );
};
