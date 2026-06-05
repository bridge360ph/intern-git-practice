import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/ysa-about-page";
{/* import Contact from "./pages/contact-page";  */}
import Pricing from "./pages/nick-price-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} />  */}
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;