import { ClickDefault, CountDefault, CurrentDefault } from "@/Data/DefaultValues";
import { getCritRate, getHitRate, getSoftDefense, getSoftMagicDefense, getStatusATK, getStatusMATK } from "@/Helpers/getStats";
import { EquipmentSlotTypes } from "@/Types/Character/Equipment";
import {
  ClickTypes,
  CountTypes,
  CurrentTypes,
  DetailWindowData,
} from "@/Types/GameTypes";
import { ItemTypes } from "@/Types/Item";
import { createContext, useContext, useEffect, useState } from "react";

type GameContextType = {
  click: ClickTypes;
  count: CountTypes;
  current: CurrentTypes;
  handleClickerButton: Function;
  powerUpClick: Function;
  detailWindows: DetailWindowData[]
  handleDetailWindow: Function
handleCloseDetailWindow: Function
};

const GameContext = createContext<GameContextType>({
  click: ClickDefault,
  count: CountDefault,
  current: CurrentDefault,
  handleClickerButton: () => {},
  powerUpClick: () => {},
  detailWindows: [],
  handleDetailWindow: () => {},
  handleCloseDetailWindow: () => {}
});

export const useGame = () => useContext(GameContext);

type GameContextProps = { children: React.ReactNode };

export const GameProvider: React.FC<GameContextProps> = ({ children }) => {
  const [click, setClick] = useState<ClickTypes>(ClickDefault);
  const [count, setCount] = useState<CountTypes>(CountDefault);
  const [current, setCurrent] = useState<CurrentTypes>(CurrentDefault);
  const [detailWindows, setDetailWindows] = useState<DetailWindowData[]>([]);

  function handleDetailWindow (e: React.MouseEvent, equipData?: EquipmentSlotTypes, itemData?: ItemTypes) {
    e.preventDefault();
    const x = e.clientX;
    const y = e.clientY;
    equipData ? setDetailWindows(prev => [...prev, { x, y, equipData }]) : setDetailWindows(prev => [...prev, { x, y, itemData }])
    
  };

  function handleCloseDetailWindow (index: number) {
    setDetailWindows(prev => prev.filter((_, i) => i !== index));
  };

  function basicAttack() {
    
  }

  function updateStats() {
    updateSubStat_Attack()
    updateSubStat_MagicAttack()
    updateSubStat_SoftDefense()
    updateSubStat_SoftMagicDefense()
    updateSubStat_HitRate()
    updateSubStat_CritRate()
  }

  function updateSubStat_Attack() {
    const result = getStatusATK({
      weaponClass: current.character.equipment.handR?.itemData.subtype || "",
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

  // TODO: add hard def
  // https://irowiki.org/wiki/DEF#Hard_DEF

  function updateSubStat_SoftDefense() {
    const result = getSoftDefense({
      baseLevel: current.character.baseLevel,
      vit: current.character.stats.mainStats.vitality,
      agi: current.character.stats.mainStats.agility,
    })

    setCurrent({
      ...current,
      character: {
        ...current.character,
      stats: {
        ...current.character.stats,
        sideStats: {
          ...current.character.stats.sideStats,
          defense: result
        }
        
      }
      }
    })
  }

  // TODO: add hard m def
  // 

  function updateSubStat_SoftMagicDefense() {
    const result = getSoftMagicDefense({
      baseLevel: current.character.baseLevel,
      int: current.character.stats.mainStats.intelligence,
      vit: current.character.stats.mainStats.vitality,
      dex: current.character.stats.mainStats.dexterity,
    })

    setCurrent({
      ...current,
      character: {
        ...current.character,
      stats: {
        ...current.character.stats,
        sideStats: {
          ...current.character.stats.sideStats,
          magicDefense: result
        }
        
      }
      }
    })
  }

  function updateSubStat_HitRate() {
    const result = getHitRate({
      baseLevel: current.character.baseLevel,
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
          hitRate: result
        }
        
      }
      }
    })
  }

  function updateSubStat_CritRate() {
    const result = getCritRate(current.character.stats.mainStats.luck)

    setCurrent({
      ...current,
      character: {
        ...current.character,
      stats: {
        ...current.character.stats,
        sideStats: {
          ...current.character.stats.sideStats,
          critRate: result
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
    detailWindows,
    handleDetailWindow,
handleCloseDetailWindow,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
