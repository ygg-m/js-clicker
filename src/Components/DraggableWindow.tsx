import React, { useState, useRef } from "react";
import { MenuHeader } from "./MenuHeader";

interface Props extends React.PropsWithChildren<{}> {
  title: string;
}

export const DraggableWindow = ({ title, children }: Props) => {
  const [isDragging, setIsDragging] = useState(false);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
    setOrigin({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) {
      return;
    }

    const dx = event.clientX - origin.x;
    const dy = event.clientY - origin.y;

    const maxX = window.innerWidth - ref.current!.offsetWidth;
    const maxY = window.innerHeight - ref.current!.offsetHeight;

    const newX = Math.min(Math.max(position.x + dx, 0), maxX);
    const newY = Math.min(Math.max(position.y + dy, 0), maxY);

    setPosition({ x: newX, y: newY });
    setOrigin({ x: event.clientX, y: event.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="absolute grid w-full max-w-md overflow-hidden rounded-lg bg-gray-50 text-gray-800 shadow-2xl outline outline-1 outline-gray-800"
      style={{ top: position.y, left: position.x }}
      ref={ref}
    >
      <MenuHeader name={title} 
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      />
      <div className="">{children}</div>
    </div>
  );
};
