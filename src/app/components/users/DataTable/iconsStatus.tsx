import React from "react";

interface IconProps {
  color: "green" | "red" | "yellow" | "blue";
}

export const PointIcon: React.FC<IconProps> = ({ color }) => {
  const bgColor = {
    green: "bg-green-500",
    red: "bg-red-500",
    yellow: "bg-yellow-500",
    blue: "bg-blue-500",
  }[color];

  return <div className={`rounded-full w-3 h-3 ${bgColor}`}></div>;
};
