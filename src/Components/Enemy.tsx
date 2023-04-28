import { useGame } from "@/Context/GameContext";
import { enemyList } from "@/Data/EnemyList";
import { EnemyTypes } from "@/Types/GameTypes";
import {useState} from "react"

export const Enemy = () => {
  const {current} = useGame()
  const data = enemyList.find(e => e.id === current.enemy.id) as EnemyTypes

  const currentHP = current.enemy.healthPoints
  const totalHP = data.stats.baseStats.healthPoints
  
  return (
    <div>
    <div className="grid gap-2 items-end justify-center">
      HP: {currentHP} / {totalHP}
      <img src={data.sprites.idle} alt="" className="p-4 rounded-lg bg-gray-50 hover:bg-red-100 duration-100 cursor-pointer" />
    </div>
    </div>
  );
};
