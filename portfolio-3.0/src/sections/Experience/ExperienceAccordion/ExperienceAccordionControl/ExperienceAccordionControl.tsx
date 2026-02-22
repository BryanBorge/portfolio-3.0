import { Accordion, Image } from "@mantine/core";
import type { WorkExperience } from "../../../../types/sanity.types";
import { urlFor } from "../../../../sanity/client";
import { AccordionControlText } from "./AccordionControlText";

type ExperienceAccordionControlProps = Pick<
  WorkExperience,
  "role" | "startDate" | "endDate" | "isCurrent"
> & {
  companyName: WorkExperience["company"]["name"];
  logo: WorkExperience["company"]["logo"];
};

export const ExperienceAccordionControl = ({
  logo,
  ...rest
}: ExperienceAccordionControlProps) => {
  return (
    <Accordion.Control
      icon={<Image height={32} width="auto" src={urlFor(logo).url()} />}
    >
      <AccordionControlText {...rest} />
    </Accordion.Control>
  );
};
