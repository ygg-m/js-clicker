export const Player = () => {
  return (
    <div className="w-32 h-32 grid place-items-center bg-gray-50 rounded-lg p-2">
      <img
        src={require("@/Assets/Player/Novice/idle-action.gif")}
        alt="Player Name"
        className="scale-x-[-1]"
      />
    </div>
  );
};
