import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import { UnauthorizedLayout } from './components/UnauthorizedLayout/UnauthorizedLayout';
import { AuthorizedLayout } from './components/AuthorizedLayout/AuthorizedLayout';
import { RequireRole } from './components/RequireRole/RequireRole';
import AboutUs from './pages/AboutUs';
import MedicalServices from './pages/MedicalServices';
import OccupationalMedicine from './pages/OccupationalMedicine';
import GeneralMedicine from './pages/GeneralMedicine';
import AlternativeMedicine from './pages/AlternativeMedicine';
import LabTests from './pages/LabTests';
import PreventionPrograms from './pages/PreventionPrograms';
import Diets from './pages/Diets';
import WeightControl from './pages/WeightControl';
import BreastCancer from './pages/BreastCancer';
import FirstAid from './pages/FirstAid';
import Diabetes from './pages/Diabetes';
import Promotions from './pages/Promotions';
import Contact from './pages/Contact';
import  Login  from './pages/Login';
import Dashboard from './pages/Dashboard';
import  Upload  from './pages/Upload';
import "./index.scss";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<UnauthorizedLayout />}>
                    <Route path="/" element={<AboutUs />} />
                    <Route path="/despre-noi" element={<AboutUs />} />
                    <Route path="/servicii-medicale" element={<MedicalServices />} />
                    <Route path="/servicii-medicale/medicina-muncii" element={<OccupationalMedicine />} />
                    <Route path="/servicii-medicale/medicina-generala" element={<GeneralMedicine />} />
                    <Route path="/servicii-medicale/medicina-alternativa" element={<AlternativeMedicine />} />
                    <Route path="/servicii-medicale/analize-de-laborator" element={<LabTests />} />
                    <Route path="/programe-preventie" element={<PreventionPrograms />} />
                    <Route path="/programe-preventie/regimuri-alimentare" element={<Diets />} />
                    <Route path="/programe-preventie/control-al-greutatii" element={<WeightControl />} />
                    <Route path="/programe-preventie/preventie-cancer-san" element={<BreastCancer />} />
                    <Route path="/programe-preventie/primul-ajutor" element={<FirstAid />} />
                    <Route path="/programe-preventie/diabet-zaharat" element={<Diabetes />} />
                    <Route path="/promotii" element={<Promotions />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                </Route>

                <Route path="/dashboard" element={<AuthorizedLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route
                        path="upload"
                        element={
                            <RequireRole roles={['ADMIN', 'ACCOUNTANT']}>
                                <Upload />
                            </RequireRole>
                        }
                    />
                </Route>

                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

const rootElement = document.getElementById("root");

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    );
} else {
    console.error('Root element not found');
}
