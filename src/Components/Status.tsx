import { ArrowIcon } from "@/Assets/UI";
import { getBaseStatCost } from "@/Helpers/getBaseStatCost";
import { DraggableWindow } from "./DraggableWindow";

interface BaseStatProps {
  name: string;
  value: number;
  bonusValue: number;
  levelUpAvailable?: boolean;
}

const BaseStat = ({
  name,
  value,
  bonusValue,
  levelUpAvailable,
}: BaseStatProps) => {
  const levelUpCost = getBaseStatCost(value);

  return (
    <div className="grid grid-cols-[1.5rem_1fr] gap-2">
      <div className="font-bold text-blue-700">{name}</div>
      <div className="grid grid-cols-[1fr_1.5rem_1.5rem] items-center border border-gray-400 bg-gray-200 px-1 text-sm">
        <div className="flex gap-1">
          <span>{value}</span>
          <span>+{bonusValue}</span>
        </div>
        {levelUpAvailable ? (
          <div className="grid h-full cursor-pointer place-items-center border-r border-l border-gray-400">
            <ArrowIcon className="h-4" />
          </div>
        ) : (
          <div className="grid h-full place-items-center border-r border-l border-gray-400"></div>
        )}
        <div className="text-right">{levelUpCost}</div>
      </div>
    </div>
  );
};

interface SubStatProps {
  name: string;
  value: number;
  bonusValue: number;
}

const SubStat = ({name, value, bonusValue}:SubStatProps) => {

  return (
    <div className="flex justify-between border-b border-gray-400">
      <div className="font-bold text-blue-700">{name}</div>

      <div className="flex">
        <span>{value}</span>
        <span>+{bonusValue}</span>
      </div>
    </div>
  );
}

export const Status = () => {
  return (
    <section className="grid w-full max-w-md overflow-hidden rounded-lg bg-gray-50 text-gray-800 outline outline-1 outline-gray-800">
      <DraggableWindow title="Status" originX={0} originY={215}>
        <article className="grid grid-cols-[1fr_.8fr_.8fr] grid-rows-6 gap-2 p-2">
            <BaseStat name="Str" value={99} bonusValue={50} levelUpAvailable />
            <SubStat name="Atk" value={1} bonusValue={0} />
            <SubStat name="Def" value={1} bonusValue={0} />

            <BaseStat name="Agi" value={1} bonusValue={0} />
            <SubStat name="Matk" value={1} bonusValue={0} />
            <SubStat name="Mdef" value={1} bonusValue={0} />

            <BaseStat name="Vit" value={1} bonusValue={0} />
            <SubStat name="Hit" value={1} bonusValue={0} />
            <SubStat name="Flee" value={1} bonusValue={0} />

            <BaseStat name="Int" value={1} bonusValue={0} />
            <SubStat name="Critical" value={1} bonusValue={0} />
            <SubStat name="Aspd" value={1} bonusValue={0} />

            <BaseStat name="Dex" value={1} bonusValue={0} />
            <div className="col-span-2" />

            <BaseStat name="Luk" value={1} bonusValue={0} />
            <div className="col-span-2">
            <div className="flex justify-between border-b border-gray-400">
      <div className="font-bold text-blue-700">Status Point</div>
        <span>48</span>
    </div>
              </div>

          <div></div>
        </article>
      </DraggableWindow>
    </section>
  );
};
