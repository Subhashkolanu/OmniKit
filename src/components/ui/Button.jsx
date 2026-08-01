export default function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
}) {
  const base =
    "px-6 py-3 rounded-xl font-medium transition-all duration-300";

  const styles = {
    primary:
      "bg-black text-white hover:bg-gray-800 shadow-sm hover:shadow-lg",
    secondary:
      "border border-gray-300 bg-white hover:bg-gray-100",
    success:
      "bg-green-600 text-white hover:bg-green-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}