import { useState } from "react";
import ToolLayout from "../../layouts/ToolLayout";
import { hexToRgb, rgbToHex, randomColor } from "./utils";

export default function ColorConverter() {
  const initial = randomColor();

  const [hex, setHex] = useState(initial.hex);

  const [rgb, setRgb] = useState({
    r: initial.r,
    g: initial.g,
    b: initial.b,
  });

  const [copied, setCopied] = useState("");

  function updateHex(value) {
    setHex(value);

    const result = hexToRgb(value);

    if (result) {
      setRgb(result);
    }
  }

  function updateRGB(key, value) {
    const newRgb = {
      ...rgb,
      [key]: Number(value),
    };

    setRgb(newRgb);
    setHex(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
  }

  function copy(text, type) {
    navigator.clipboard.writeText(text);

    setCopied(type);

    setTimeout(() => {
      setCopied("");
    }, 2000);
  }

  function generateRandom() {
    const color = randomColor();

    setHex(color.hex);

    setRgb({
      r: color.r,
      g: color.g,
      b: color.b,
    });
  }

  return (
    <ToolLayout
      title="Color Converter"
      description="Convert HEX and RGB colors instantly."
    >
      <div className="space-y-8">

        <div
          className="rounded-2xl h-48 shadow-xl border flex items-center justify-center text-white text-4xl font-bold"
          style={{ backgroundColor: hex }}
        >
          {hex}
        </div>

        <div className="text-center">
          <p className="text-xl font-semibold">
            {hex}
          </p>

          <p className="text-gray-500 mt-1">
            rgb({rgb.r}, {rgb.g}, {rgb.b})
          </p>
        </div>

        <div>

          <label className="font-semibold">
            HEX Color
          </label>

          <input
            value={hex}
            onChange={(e) => updateHex(e.target.value)}
            className="w-full border rounded-xl p-3 mt-2"
          />

          <input
            type="color"
            value={hex}
            onChange={(e) => updateHex(e.target.value)}
            className="w-full h-16 mt-4 cursor-pointer rounded-xl"
          />

        </div>

        <div className="grid md:grid-cols-3 gap-4">

          <div>
            <label>Red</label>

            <input
              type="number"
              min="0"
              max="255"
              value={rgb.r}
              onChange={(e) =>
                updateRGB("r", e.target.value)
              }
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label>Green</label>

            <input
              type="number"
              min="0"
              max="255"
              value={rgb.g}
              onChange={(e) =>
                updateRGB("g", e.target.value)
              }
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label>Blue</label>

            <input
              type="number"
              min="0"
              max="255"
              value={rgb.b}
              onChange={(e) =>
                updateRGB("b", e.target.value)
              }
              className="w-full border rounded-xl p-3"
            />
          </div>

        </div>
                <div className="grid md:grid-cols-2 gap-6">

          <div className="border rounded-2xl p-5 shadow-sm">
            <h3 className="font-semibold text-lg mb-3">
              HEX Value
            </h3>

            <p className="text-2xl font-bold">
              {hex}
            </p>
          </div>

          <div className="border rounded-2xl p-5 shadow-sm">
            <h3 className="font-semibold text-lg mb-3">
              RGB Value
            </h3>

            <p className="text-2xl font-bold">
              {rgb.r}, {rgb.g}, {rgb.b}
            </p>
          </div>

        </div>

        <div className="flex flex-wrap gap-4">

          <button
            onClick={() => copy(hex, "hex")}
            className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
          >
            {copied === "hex"
              ? "✅ Copied!"
              : "📋 Copy HEX"}
          </button>

          <button
            onClick={() =>
              copy(
                `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
                "rgb"
              )
            }
            className="border px-6 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            {copied === "rgb"
              ? "✅ Copied!"
              : "📋 Copy RGB"}
          </button>

          <button
            onClick={generateRandom}
            className="border px-6 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            🎲 Generate Random
          </button>

        </div>

      </div>
    </ToolLayout>
  );
}