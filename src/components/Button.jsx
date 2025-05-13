export const Button = ({
  handleClick,
  children,
  color = "blue",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles =
    "text-white px-3 py-1.5 rounded-md text-md transition-all duration-500 cursor-pointer ";
  const baseColors = {
    blue: "bg-blue-600 hover:bg-blue-900",
    red: "bg-red-600 hover:bg-red-900",
    yellow: "bg-yellow-600 hover:bg-yellow-900",
    gray: "bg-gray-600 hover:bg-gray-900",
    green: "bg-green-600 hover:bg-green-900",
  };
  const sizeStyles = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1",
    lg: "text-md px-4 py-2",
  };
  return (
    <button
      className={`${baseStyles} ${baseColors[color]} ${sizeStyles[size]} ${className} `}
      {...props}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
