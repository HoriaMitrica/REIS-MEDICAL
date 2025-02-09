import { Link } from "react-router-dom";
import style from "./style.module.scss";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footerContent}>
                <div className={style.footerSection}>
                    <h3>Servicii Medicale</h3>
                    <ul>
                        <li><Link to="/despre-noi" onClick={() => window.scrollTo(0, 0)}>Despre noi</Link></li>
                        <li><Link to="/servicii-medicale/medicina-muncii" onClick={() => window.scrollTo(0, 0)}>Medicina Muncii</Link></li>
                        <li><Link to="/servicii-medicale/medicina-generala" onClick={() => window.scrollTo(0, 0)}>Medicina Generală</Link></li>
                        <li><Link to="/servicii-medicale/medicina-alternativa" onClick={() => window.scrollTo(0, 0)}>Medicina Alternativă</Link></li>
                        <li><Link to="/servicii-medicale/analize-de-laborator" onClick={() => window.scrollTo(0, 0)}>Analize de Laborator</Link></li>
                    </ul>
                </div>

                <div className={style.footerSection}>
                    <h3>Programe Prevenție</h3>
                    <ul>
                        <li><Link to="/programe-preventie/regimuri-alimentare" onClick={() => window.scrollTo(0, 0)}>Regimuri alimentare</Link></li>
                        <li><Link to="/programe-preventie/control-al-greutatii" onClick={() => window.scrollTo(0, 0)}>Control al greutății</Link></li>
                        <li><Link to="/programe-preventie/preventie-cancer-san" onClick={() => window.scrollTo(0, 0)}>Prevenția cancerului de sân</Link></li>
                        <li><Link to="/programe-preventie/primul-ajutor" onClick={() => window.scrollTo(0, 0)}>Primul Ajutor</Link></li>
                        <li><Link to="/programe-preventie/diabet-zaharat" onClick={() => window.scrollTo(0, 0)}>Diabet zaharat</Link></li>
                    </ul>
                </div>

                <div className={style.footerSection}>
                    <h3>Contact</h3>
                    <ul>
                        <li>Reis Medical - Medicina Muncii</li>
                        <li>Str. Mizil Nr. 2C Bl SOCUM Sect 3 București</li>
                        <li><strong>Tel:</strong> <a href="tel:0213455155">021.345.51.55</a> / <a href="tel:0371086321">0371.086.321</a></li>
                        <li><strong>Fax:</strong> 0372.899.234</li>
                        <li><strong>Email:</strong> <a href="mailto:birou@reismedical.ro">birou@reismedical.ro</a></li>
                    </ul>
                </div>
            </div>

            <div className={style.footerBottom}>
                <p>
                    &copy; {new Date().getFullYear()} Reis Medical. All rights reserved by 
                    <a target="_blank" rel="noopener noreferrer" href="https://cleancode.ro"> Clean Code Solutions</a>.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
