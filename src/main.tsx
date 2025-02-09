import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Header from './components/Header';
import RightSidePage from './components/RightSidePage/RightSide';
import "./index.scss";
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Promotions from './pages/Promotions';
import MedicalServices from './pages/MedicalServices';
import PreventionPrograms from './pages/PreventionPrograms';
import OccupationalMedicine from './pages/OccupationalMedicine';
import GeneralMedicine from './pages/GeneralMedicine';
import AlternativeMedicine from './pages/AlternativeMedicine';
import LabTests from './pages/LabTests';

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />

      <div className="main-container">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/despre-noi" element={<AboutUs />} />
            <Route path="/servicii-medicale" element={<MedicalServices />} />

            <Route path="/servicii-medicale/medicina-muncii" element={<OccupationalMedicine />} />
            <Route path="/servicii-medicale/medicina-generala" element={<GeneralMedicine />} />
            <Route path="/servicii-medicale/medicina-alternativa" element={<AlternativeMedicine />} />
            <Route path="/servicii-medicale/analize-de-laborator" element={<LabTests />} />

            <Route path="/programe-de-preventie" element={<PreventionPrograms />} />
            <Route path="/promotii" element={<Promotions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <RightSidePage />
      </div>

      <Footer />
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<Router />);
} else {
  console.error('Root element not found');
}
