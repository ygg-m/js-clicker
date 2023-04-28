import { ClickDefault, CountDefault, CurrentDefault } from "@/Data/DefaultValues";
import {
  ClickTypes,
  CountTypes,
  CurrentTypes,
} from "@/Types/GameTypes";
import { createContext, useContext, useState } from "react";

type GameContextType = {
  click: ClickTypes;
  count: CountTypes;
  current: CurrentTypes;
  handleClickerButton: Function;
  powerUpClick: Function;
};

const GameContext = createContext<GameContextType>({
  click: ClickDefault,
  count: CountDefault,
  current: CurrentDefault,
  handleClickerButton: () => {},
  powerUpClick: () => {},
});

export const useGame = () => useContext(GameContext);

type CharacterContextProps = { children: React.ReactNode };

export const GameProvider: React.FC<CharacterContextProps> = ({ children }) => {
  const [click, setClick] = useState<ClickTypes>(ClickDefault);
  const [count, setCount] = useState<CountTypes>(CountDefault);
  const [current, setCurrent] = useState<CurrentTypes>(CurrentDefault);

  function basicAttack() {
    
  }

  function getSubStat_Attack() {
    
  }

  function addClickPowerToCountPoints() {
    setCount({
      ...count,
      points: (count.points += click.power),
    });
  }

  function handleClickerButton() {
    addClickPowerToCountPoints();
  }

  function powerUpClick(num: number) {
    setClick({
      ...click,
      power: click.power + num,
    });
  }

  const value: GameContextType = {
    click,
    count,
    current,
    handleClickerButton,
    powerUpClick,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
