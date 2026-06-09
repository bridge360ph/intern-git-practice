import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/kennery-homepage';
import About from './pages/jasemiguel-about-us';
import Contact from './pages/andrei-contact-us-page';
import AskUs from './pages/alfred-ask-us';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ask-us" element={<AskUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;