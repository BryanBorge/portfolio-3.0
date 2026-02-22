import { Accordion, Container, Space, Text, Title } from "@mantine/core";
import { Suspense, use } from "react";
import { getExperienceData } from "../../sanity/client";
import { ExperienceAccordionControl } from "./ExperienceAccordion/ExperienceAccordionControl/ExperienceAccordionControl";
import { ExperienceAccordionControlPanel } from "./ExperienceAccordion/ExperienceAccordionPanel";

const dataPromise = getExperienceData();

export const Experience = () => {
  const data = use(dataPromise);

  return (
    <Container size="md" w="100%">
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
    </Container>
  );
};

export const ExperienceContainer = () => {
  return (
    <Container size="md">
      <Suspense fallback={<Text>Loading EXPERIENCE...</Text>}>
        <Experience />
      </Suspense>
    </Container>
  );
};
