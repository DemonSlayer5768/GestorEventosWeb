import React, { useState } from "react";

interface PopoverProps {
  children: React.ReactNode;
  content?: React.ReactNode; // Hacerlo opcional
}

export const Popover: React.FC<PopoverProps> = ({ children, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div onClick={() => setIsOpen(!isOpen)}>{children}</div>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          {content}
        </div>
      )}
    </div>
  );
};

export const PopoverTrigger: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <>{children}</>;
};

export const PopoverContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <>{children}</>;
};
