import { useEffect, useState } from "react";
import ToolLayout from "../../layouts/ToolLayout";
import { categories, convert } from "./conversions";

export default function UnitConverter() {
  const categoryNames = Object.keys(categories);

  const [category, setCategory] = useState(categoryNames[0]);
  const [fromUnit, setFromUnit] = useState(Object.keys(categories[categoryNames[0]])[0]);
  const [toUnit, setToUnit] = useState(Object.keys(categories[categoryNames[0]])[1]);
  const [value, setValue] = useState(1);
  const [result, setResult] = useState("");

  useEffect(() => {
    setResult(convert(category, fromUnit, toUnit, value));
  }, [category, fromUnit, toUnit, value]);

  useEffect(() => {
    const units = Object.keys(categories[category]);
    setFromUnit(units[0]);
    setToUnit(units[1]);
  }, [category]);

  function swapUnits() {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  }

  const units = Object.keys(categories[category]);

  return (
    <ToolLayout
      title="Unit Converter"
      description="Convert between common units instantly."
    >
      <div className="space-y-6">

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border rounded-xl p-3"
        >
          {categoryNames.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full border rounded-xl p-3"
        />

        <div className="grid md:grid-cols-2 gap-4">

          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="border rounded-xl p-3"
          >
            {units.map((unit) => (
              <option key={unit}>{unit}</option>
            ))}
          </select>

          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="border rounded-xl p-3"
          >
            {units.map((unit) => (
              <option key={unit}>{unit}</option>
            ))}
          </select>

        </div>

        <button
          onClick={swapUnits}
          className="border px-6 py-3 rounded-xl hover:bg-gray-100 transition"
        >
          🔄 Swap Units
        </button>

        <div className="border rounded-2xl p-6 bg-gray-50 text-center">
          <h3 className="text-lg font-semibold">
            Result
          </h3>

          <p className="text-4xl font-bold mt-3">
            {result}
          </p>
        </div>

      </div>
    </ToolLayout>
  );
}