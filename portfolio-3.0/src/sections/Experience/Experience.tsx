import {
  Accordion,
  Container,
  Image,
  Space,
  Text,
  Title,
} from "@mantine/core";

export const Experience = () => {
  return (
    <Container size="md" w="100%">
      <Title order={3}>Experience</Title>
      <Space h="md" />
      <Accordion variant="separated" defaultValue="Applied Visions">
        <Accordion.Item key={"Applied Visions"} value={"Applied Visions"}>
          <Accordion.Control
            icon={
              <Image
                src="https://www.avi.com/wp-content/uploads/2023/01/cropped-avi-icon-32x32.png
              "
              />
            }
          >
            <Text size="lg">Applied Visions</Text>
            <Text c="dimmed" size="sm">
              June 2021 - Present
            </Text>
          </Accordion.Control>
          <Accordion.Panel>TEst test</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item key={"ManicKat"} value={"Manic Kat Records"}>
          <Accordion.Control
            icon={
              <Image
                height={32}
                width="auto"
                src="https://www.manickatrecords.com/wp-content/uploads/2020/09/webicon.png
              "
              />
            }
          >
            <Text size="lg">Manic Kat Records</Text>
            <Text c="dimmed" size="sm">
              Sept 2020 - March 2021
            </Text>
          </Accordion.Control>
          <Accordion.Panel>TEst test</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item key={"Precipart"} value={"Precipart"}>
          <Accordion.Control
            icon={
              <Image
                height={32}
                width="auto"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB9jAyh3Wb4b6hIRE1sjQnN4GV-DHrct5ZWg&s"
              />
            }
          >
            <Text size="lg">Precipart</Text>
            <Text c="dimmed" size="sm">
              Feb 2019 - April 2019
            </Text>
          </Accordion.Control>
          <Accordion.Panel>TEst test</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};
