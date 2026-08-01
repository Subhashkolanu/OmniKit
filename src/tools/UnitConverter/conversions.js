export const categories = {
  Length: {
    Meter: 1,
    Kilometer: 1000,
    Centimeter: 0.01,
    Millimeter: 0.001,
  },

  Weight: {
    Kilogram: 1,
    Gram: 0.001,
    Pound: 0.453592,
  },

  Volume: {
    Liter: 1,
    Milliliter: 0.001,
  },
};

export function convert(category, from, to, value) {
  const units = categories[category];

  if (!units) return "";

  const meters = Number(value) * units[from];

  return (meters / units[to]).toFixed(4);
}