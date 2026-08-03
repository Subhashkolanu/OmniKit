export default function PrimaryButton({
  children,
  onClick,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
}