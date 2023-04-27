interface Props {
  name: string;
}

export const GrayButton = ({ name }: Props) => {
  return (
    <button className="bg-gray-button max-h-12 rounded-lg border border-gray-400 capitalize hover:border-gray-700">
      {name}
    </button>
  );
};
