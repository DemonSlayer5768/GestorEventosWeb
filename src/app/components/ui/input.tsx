export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  placeholder,
  ...props
}) => {
  return (
    <input
      placeholder={placeholder} // Usa un placeholder real en lugar de la clase CSS
      className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
};
