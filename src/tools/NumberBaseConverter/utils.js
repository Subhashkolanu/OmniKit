export function convert(value, from, to) {
  if (value === "") return "";

  const bases = {
    Binary: 2,
    Octal: 8,
    Decimal: 10,
    Hexadecimal: 16,
  };

  try {
    const decimal = parseInt(value, bases[from]);

    if (isNaN(decimal)) return "Invalid Input";

    return decimal
      .toString(bases[to])
      .toUpperCase();
  } catch {
    return "Invalid Input";
  }
}