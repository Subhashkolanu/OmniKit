import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Tools from "./pages/Tools";

import PasswordGenerator from "./tools/PasswordGenerator";
import WordCounter from "./tools/WordCounter";
import QRCodeGenerator from "./tools/QRCodeGenerator";
import JSONFormatter from "./tools/JSONFormatter";
import TextCaseConverter from "./tools/TextCaseConverter";
import UnitConverter from "./tools/UnitConverter";

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
    </Routes>
    
  );
}

export default App;