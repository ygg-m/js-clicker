import { DraggableWindow } from "./DraggableWindow";
import { GrayButton } from "./GrayButton";
import { MenuHeader } from "./MenuHeader";

interface ParameterProps {
  name: string;
  value: number;
  totalValue: number;
}

const Parameter = ({ name, value, totalValue }: ParameterProps) => {
  const percentage = Math.floor((value / totalValue) * 100);

  return (
    <div className="grid grid-cols-[18px_1fr] gap-2">
      <span>{name}</span>
      <div className="w-full">
        <div className="relative z-0 h-3 w-full">
          <div
            style={{ width: `${percentage}%` }}
            className="bg-progress-bar h-full rounded-full border border-gray-600"
          />
          <div className="absolute top-[20%] -z-10 h-[80%] w-full rounded-full bg-gray-300" />
        </div>

        <div className="flex justify-between text-sm">
          <span>
            {value} / {totalValue}
          </span>
          <span>{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

interface LevelProps {
  name: string;
  value: number;
  exp: number;
  expToLevel: number;
}

const Level = ({ name, value, exp, expToLevel }: LevelProps) => {
  const percentage = Math.floor((exp / expToLevel) * 100);

  return (
    <div className="grid grid-cols-[.4fr_1fr] items-center gap-2">
      <div>
        {name} Lv. {value}
      </div>
      <div className="h-2 w-full border border-gray-400 bg-white">
        <div
          className="h-full bg-blue-600"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

interface WeightProps {
  value: number;
  totalValue: number;
}

const Weight = ({ value, totalValue }: WeightProps) => {
  const percentage = Math.floor((value / totalValue) * 100);

  return (
    <div>
      Weight: {value} / {totalValue} ({percentage}%)
    </div>
  );
};

const Zeny = ({ value }: { value: number }) => {
  return <div>Zeny: {value}</div>;
};

export const BasicInfo = () => {
  return (
    <section className="grid w-full max-w-md overflow-hidden rounded-lg bg-gray-50 text-gray-800 outline outline-1 outline-gray-800">
      <DraggableWindow title="Basic Info"> 
      <article className="grid grid-cols-[1fr_0.5fr]">
        <div className="flex flex-col">
          <div className="grid grid-cols-[0.5fr_1fr] gap-2 p-1 px-3">
            <div className="flex flex-col text-sm">
              <span>Ygg M'oraes</span>
              <span>Knight</span>
            </div>

            <div className="grid gap-1 text-sm">
              <Parameter name="HP" value={3742} totalValue={3742} />
              <Parameter name="SP" value={68} totalValue={181} />
            </div>
          </div>

          <div className="p-1 px-2 text-sm">
            <div className="rounded-lg bg-gray-200 p-1 px-2">
              <Level name="Base" value={60} exp={3500} expToLevel={15000} />
              <Level name="Job" value={30} exp={640} expToLevel={30000} />
            </div>
          </div>

          <div className="bg-lines border-t border-gray-400 p-1 px-3 text-sm">
            <Weight value={1110} totalValue={3580} />
            <Zeny value={20101} />
          </div>
        </div>
        <div className="bg-lines grid grid-cols-2 gap-2 border-l border-gray-400 p-2 text-sm">
          <GrayButton name="status" />
          <GrayButton name="option" />
          <GrayButton name="items" />
          <GrayButton name="equip" />
          <GrayButton name="skill" />
          <GrayButton name="map" />
          <GrayButton name="comm" />
          <GrayButton name="friend" />
        </div>
      </article>
      </DraggableWindow>
    </section>
  );
};
