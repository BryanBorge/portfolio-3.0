import { Accordion, Image } from "@mantine/core";
import type { Company, WorkExperience } from "../../../../types/sanity.types";
import { urlFor } from "../../../../sanity/client";
import { AccordionControlText } from "./AccordionControlText";

type ExperienceAccordionControlProps = Pick<
  WorkExperience,
  "role" | "startDate" | "endDate" | "isCurrent"
> & {
  companyName: Company["name"];
  logo: Company["logo"];
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
