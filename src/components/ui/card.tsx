import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg text-black shadow-md ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`p-6 border-b border-gray-200 ${className}`}>
      {children}
    </div>
  );
};

export const CardTitle: React.FC<CardProps> = ({ children, className }) => {
  return <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>;
};

export const CardDescription: React.FC<CardProps> = ({
  children,
  className,
}) => {
  return <p className={`text-sm text-gray-500 ${className}`}>{children}</p>;
};

export const CardContent: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

export const CardFooter: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`p-6 border-t border-gray-200 ${className}`}>
      {children}
    </div>
  );
};
