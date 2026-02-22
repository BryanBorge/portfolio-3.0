import { Accordion, Box, Space, Text, Title } from "@mantine/core";
import { ExperienceAccordionControl } from "./ExperienceAccordion/ExperienceAccordionControl/ExperienceAccordionControl";
import { ExperienceAccordionControlPanel } from "./ExperienceAccordion/ExperienceAccordionPanel";
import { useExperience } from "./useExperience";

export const Experience = () => {
  const { data, isLoading, isError, error } = useExperience();

  if (isLoading) return <Text>Loading experience…</Text>;

  if (isError) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return <Text c="red">Failed to load experience: {message}</Text>;
  }

  return (
    <Box>
      <Title order={3}>Experience</Title>
      <Space h="md" />
      <Accordion variant="separated" defaultValue="Applied Visions">
        {data.map((experience) => (
          <Accordion.Item key={experience._id} value={experience.company.name}>
            <ExperienceAccordionControl
              {...experience}
              logo={experience.company.logo}
              companyName={experience.company.name}
            />
            <ExperienceAccordionControlPanel
              description={experience.description}
            />
          </Accordion.Item>
        ))}
      </Accordion>
    </Box>
  );
};
