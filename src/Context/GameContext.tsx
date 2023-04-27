import { ClickDefault, ClickTypes, CountDefault, CountTypes } from "@/Types/GameTypes";
import { createContext, useContext, useState } from "react";

type GameContextType = {
    click: ClickTypes,
    count: CountTypes
    handleClickerButton: Function
    powerUpClick: Function,
};

const GameContext = createContext<GameContextType>({
    click: ClickDefault,
    count: CountDefault,
    handleClickerButton: () => {},
    powerUpClick: () => {}
});

export const useGame = () => useContext(GameContext);

type CharacterContextProps = { children: React.ReactNode };

export const GameProvider: React.FC<CharacterContextProps> = ({ children }) => {
    const [click, setClick] = useState<ClickTypes>(ClickDefault);
    const [count, setCount] = useState<CountTypes>(CountDefault);

    function addClickPowerToCountPoints() {
      setCount({
        ...count,
        points: count.points += click.power
      })
    }

    function handleClickerButton() {
      addClickPowerToCountPoints()
    }

    function powerUpClick(num: number) {
      setClick({
        ...click,
        power: click.power + num
      })
    }

  const value: GameContextType = {
    click,
    count,
    handleClickerButton,
    powerUpClick
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};