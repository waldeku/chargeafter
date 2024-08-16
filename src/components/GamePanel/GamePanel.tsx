import { Flex, SectionProps, Box } from "@radix-ui/themes";

import { CountryDTO } from "src/types";
import { ActionButton } from "src/components/ActionButton";
import { Modal } from "src/components/Modal";

import { useGamePanel } from "./useGamePanel";

type GamePanelProps = SectionProps & {
  data: CountryDTO[];
};

const GamePanel = ({ data }: GamePanelProps) => {
  const { handleNewGameButtonClick, handleGameButtonClick, gameItems } =
    useGamePanel(data);

  const buttons = gameItems.map(({ value, id, error, selected, country }) => (
    <ActionButton
      key={id}
      text={value}
      onClick={() => handleGameButtonClick(id, country)}
      isSelected={selected}
      isError={error}
    />
  ));

  return (
    <Box width={{ sm: "100%", md: "80%", lg: "60%", xl: "40%" }}>
      <Flex gap="2" justify="center" wrap="wrap">
        {buttons}
      </Flex>
      <Modal open={!gameItems.length} onCloseClick={handleNewGameButtonClick} />
    </Box>
  );
};

export { GamePanel };
