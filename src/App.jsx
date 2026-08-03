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
import ImageToPDF from "./tools/ImageToPDF";
import PDFSplitter from "./tools/PDFSplitter";
import PDFCompressor from "./tools/PDFCompressor";
import UUIDGenerator from "./tools/UUIDGenerator";
import HashGenerator from "./tools/HashGenerator";
import Base64Converter from "./tools/Base64Converter";
import URLEncoderDecoder from "./tools/URLEncoderDecoder";
import MarkdownPreview from "./tools/MarkdownPreview";
import LoremIpsumGenerator from "./tools/LoremIpsumGenerator";
import JWTDecoder from "./tools/JWTDecoder";
import RegexTester from "./tools/RegexTester";
import QRCodeScanner from "./tools/QRCodeScanner";
import TextDiffChecker from "./tools/TextDiffChecker";
import ThemeToggle from "./components/ThemeToggle";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Tools */}
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
        <Route
  path="/tools/image-to-pdf"
  element={<ImageToPDF />}
/>
<Route
  path="/tools/pdf-splitter"
  element={<PDFSplitter />}
/>
<Route
  path="/tools/pdf-compressor"
  element={<PDFCompressor />}
/><Route
  path="/tools/uuid-generator"
  element={<UUIDGenerator />}
/>
<Route
  path="/tools/hash-generator"
  element={<HashGenerator />}
/>
<Route
  path="/tools/base64-converter"
  element={<Base64Converter />}
/><Route
  path="/tools/url-encoder-decoder"
  element={<URLEncoderDecoder />}
/>
<Route
  path="/tools/markdown-preview"
  element={<MarkdownPreview />}
/>
<Route
  path="/tools/lorem-ipsum-generator"
  element={<LoremIpsumGenerator />}
/><Route
  path="/tools/jwt-decoder"
  element={<JWTDecoder />}
/>
<Route
  path="/tools/regex-tester"
  element={<RegexTester />}
/><Route
  path="/tools/qr-code-scanner"
  element={<QRCodeScanner />}
/><Route
  path="/tools/text-diff-checker"
  element={<TextDiffChecker />}
/>
<div className="p-10">
  <ThemeToggle />
</div>
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;