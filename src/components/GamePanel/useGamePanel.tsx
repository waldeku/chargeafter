import { useEffect, useState } from "react";
import _ from "lodash";

import { GameItem, CountryDTO } from "src/types";

const useGamePanel = (data: CountryDTO[]) => {
  const getInitialGameData = () => _.sampleSize(data, 5);

  const getGameData = (): GameItem[] =>
    getInitialGameData().flatMap(({ capital, name: { common, official } }) => {
      const countryName = common || official;
      return [
        {
          id: Number(_.uniqueId()),
          country: countryName,
          value: countryName,
          selected: false,
          error: false,
          disabled: false,
        },
        {
          id: Number(_.uniqueId()),
          country: countryName,
          value: capital[0],
          selected: false,
          error: false,
          disabled: false,
        },
      ];
    });

  const [gameItems, setGameItems] = useState<GameItem[]>(getGameData());

  const handleNewGameButtonClick = () => {
    setGameItems(getGameData());
  };

  const handleGameButtonClick = (itemId: number, country: string) => {
    const selectedItem = gameItems.find(({ selected }) => selected);

    if (selectedItem?.country === country) {
      const updatedItems = gameItems.filter((item) => item.country !== country);
      setGameItems(updatedItems);
      return;
    }

    const updatedItems = gameItems.map((item) => ({
      ...item,
      ...(item.id === itemId && { selected: true }),
    }));
    setGameItems(updatedItems);
  };

  useEffect(() => {
    const isTwoWrongItemsSelected =
      gameItems.filter(({ selected, error }) => selected && !error).length ===
      2;

    if (isTwoWrongItemsSelected) {
      const updatedItems = gameItems.map((item) => {
        if (item.selected && !item.error) {
          return {
            ...item,
            disabled: true,
            error: true,
          };
        }
        return { ...item, disabled: true };
      });

      setGameItems(updatedItems);
      setTimeout(() => {
        const updatedItems = gameItems.map((item) => ({
          ...item,
          disabled: false,
          selected: false,
          error: false,
        }));
        setGameItems(updatedItems);
      }, 3000);
    }
  }, [gameItems]);

  return {
    gameItems,
    handleNewGameButtonClick,
    handleGameButtonClick,
  };
};

export { useGamePanel };
