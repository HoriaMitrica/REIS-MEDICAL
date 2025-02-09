import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Header from './components/Header';
import RightSidePage from './components/RightSidePage/RightSide';
import "./index.scss";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />

      <div className="main-container">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
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
