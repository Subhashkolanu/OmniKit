import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Tools from "./pages/Tools";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import PasswordGenerator from "./tools/PasswordGenerator";
import WordCounter from "./tools/WordCounter";
import QRCodeGenerator from "./tools/QRCodeGenerator";
import JSONFormatter from "./tools/JSONFormatter";
import TextCaseConverter from "./tools/TextCaseConverter";
import UnitConverter from "./tools/UnitConverter";
import ColorConverter from "./tools/ColorConverter";
import NumberBaseConverter from "./tools/NumberBaseConverter";
import ImageCompressor from "./tools/ImageCompressor";
import PDFMerger from "./tools/PDFMerger";
import ImageResizer from "./tools/ImageResizer";
import ImageConverter from "./tools/ImageConverter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tools" element={<Tools />} />

      <Route
        path="/tools/password-generator"
        element={<PasswordGenerator />}
      />

      <Route
        path="/tools/word-counter"
        element={<WordCounter />}
      />

      <Route
        path="/tools/qr-generator"
        element={<QRCodeGenerator />}
      />

      <Route
        path="/tools/json-formatter"
        element={<JSONFormatter />}
      />
      <Route
  path="/tools/text-case-converter"
  element={<TextCaseConverter />}
/>
<Route
  path="/tools/unit-converter"
  element={<UnitConverter />}
/>
<Route
  path="/tools/color-converter"
  element={<ColorConverter />}
/>
<Route
  path="/tools/number-base-converter"
  element={<NumberBaseConverter />}
/>
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route
  path="/tools/image-compressor"
  element={<ImageCompressor />}
/>
<Route
  path="/tools/pdf-merger"
  element={<PDFMerger />}
/>
<Route
  path="/tools/image-resizer"
  element={<ImageResizer />}
/>
<Route
  path="/tools/image-converter"
  element={<ImageConverter />}
/>
    </Routes>
    
  );
}

export default App;