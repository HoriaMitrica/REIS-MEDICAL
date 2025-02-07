import { Link } from "react-router-dom";
import style from "./style.module.scss";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footerContent}>
                <ul className={style.footerNav}>
                    <li className={style.navItem}><Link to="/despre-noi">Despre noi</Link></li>
                    <li><Link to="/servicii-medicale/medicina-muncii">Medicina Muncii</Link></li>
                    <li><Link to="/servicii-medicale/medicina-generala">Medicina Generală</Link></li>
                    <li><Link to="/servicii-medicale/medicina-alternativa">Medicina Alternativă</Link></li>
                    <li><Link to="/servicii-medicale/analize-de-laborator">Analize de Laborator</Link></li>
                </ul>

                <ul className={style.footerContact}>
                    <li>Reis Medical - Medicina Muncii</li>
                    <li>Str. Mizil Nr. 2C Bl SOCUM Sect 3 Bucuresti</li>
                    <li>Tel: 021.345.51.55 / 0371.086.321</li>
                    <li>Fax: 0372.899.234</li>
                    <li>Email: birou@reismedical.ro</li>
                </ul>
            </div>

            <div className={style.copyright}>
                &copy; {new Date().getFullYear()} Reis Medical. All rights reserved by <a target="_blank" href="https://cleancode.ro">Clean Code Solutions</a>.
            </div>
        </footer>
    );
};

export default Footer;
