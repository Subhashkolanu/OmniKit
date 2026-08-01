export default function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
  disabled = false,
}) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed";

  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-xl",

    secondary:
      "border border-gray-300 bg-white text-gray-800 hover:bg-gray-100",

    success:
      "bg-green-600 text-white hover:bg-green-700 shadow-md",

    danger:
      "bg-red-600 text-white hover:bg-red-700 shadow-md",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}