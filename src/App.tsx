import { Container, Section, Heading, Text, Flex } from "@radix-ui/themes";

import { GamePanel } from "src/components/GamePanel";
import { useGetData } from "src/hooks/useGetData";
import { StatusMessage } from "src/components/StatusMessage";

function App() {
  const { isPending, error, data, isFetching } = useGetData();

  const getContent = () => {
    if (error)
      return (
        <StatusMessage message="Something went wrong when fetching data." />
      );

    if (isPending || isFetching)
      return (
        <StatusMessage
          message="Please wait. Loading list of countries and cities."
          type="loading"
        />
      );

    if (data) {
      return <GamePanel data={data} />;
    }

    return (
      <StatusMessage message="Can't render a game. Refresh the page and try again" />
    );
  };
  return (
    <Container>
      <Section>
        <Flex direction="column" align="center" gap="4">
          <Heading mb="2" size="4">
            Country quiz
          </Heading>
          <Text mb="4">Select the capital of the country</Text>
          {getContent()}
        </Flex>
      </Section>
    </Container>
  );
}

export default App;
