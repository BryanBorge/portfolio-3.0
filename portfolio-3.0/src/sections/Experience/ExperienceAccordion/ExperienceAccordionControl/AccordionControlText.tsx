import { Box, Text, Title, useMatches } from "@mantine/core";
import { format, parseISO } from "date-fns";
import type { Company, WorkExperience } from "../../../../types/sanity.types";

type AccordionControlTextProps = Pick<
  WorkExperience,
  "role" | "startDate" | "endDate" | "isCurrent"
> & {
  companyName: Company["name"];
};

const formatMonthYear = (date: string, dateFormat: string) => {
  if (!date) return "";
  return format(parseISO(date), dateFormat);
};

const createDurationText = (
  startDate: string,
  endDate: string,
  isCurrent: boolean,
  dateFormat: string,
) => {
  const start = formatMonthYear(startDate, dateFormat);
  const end = isCurrent ? "Present" : formatMonthYear(endDate, dateFormat);
  return `${start} - ${end}`;
};

export const AccordionControlText = ({
  companyName,
  role,
  startDate,
  endDate,
  isCurrent,
}: AccordionControlTextProps) => {
  const dateFormat = useMatches({
    base: "MMM yyyy",
    xs: "MMM yyyy",
    sm: "MMMM yyyy",
  });
  
  return (
    <Box>
      <Title order={4}>{companyName}</Title>
      <Text size="md">{role}</Text>
      <Text c="dimmed" size="sm">
        {createDurationText(startDate, endDate, isCurrent, dateFormat)}
      </Text>
    </Box>
  );
};
