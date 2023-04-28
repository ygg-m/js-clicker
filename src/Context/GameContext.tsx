import { ClickDefault, CountDefault, CurrentDefault } from "@/Data/DefaultValues";
import { getStatusATK, getStatusMATK } from "@/Helpers/getStats";
import {
  ClickTypes,
  CountTypes,
  CurrentTypes,
} from "@/Types/GameTypes";
import { createContext, useContext, useEffect, useState } from "react";

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

type GameContextProps = { children: React.ReactNode };

export const GameProvider: React.FC<GameContextProps> = ({ children }) => {
  const [click, setClick] = useState<ClickTypes>(ClickDefault);
  const [count, setCount] = useState<CountTypes>(CountDefault);
  const [current, setCurrent] = useState<CurrentTypes>(CurrentDefault);

  function basicAttack() {
    
  }

  function updateStats() {
    updateSubStat_Attack()
    updateSubStat_MagicAttack()
  }

  function updateSubStat_Attack() {
    const result = getStatusATK({
      weaponClass: current.character.equipment.handR?.subtype || "",
      baseLevel: current.character.baseLevel,
      str: current.character.stats.mainStats.strength,
      dex: current.character.stats.mainStats.dexterity,
      luk: current.character.stats.mainStats.luck,
    })
    
    setCurrent({
      ...current,
      character: {
        ...current.character,
      stats: {
        ...current.character.stats,
        sideStats: {
          ...current.character.stats.sideStats,
          attack: result
        }
        
      }
      }
    })
  }

  function updateSubStat_MagicAttack() {
    const result = getStatusMATK({
      baseLevel: current.character.baseLevel,
      int: current.character.stats.mainStats.intelligence,
      dex: current.character.stats.mainStats.dexterity,
      luk: current.character.stats.mainStats.luck,
    })

    setCurrent({
      ...current,
      character: {
        ...current.character,
      stats: {
        ...current.character.stats,
        sideStats: {
          ...current.character.stats.sideStats,
          magicAttack: result
        }
        
      }
      }
    })
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

  useEffect(() => {
    updateStats()
  }, [])

  const value: GameContextType = {
    click,
    count,
    current,
    handleClickerButton,
    powerUpClick,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
