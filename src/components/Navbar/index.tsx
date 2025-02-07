import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className={style.navbar}>
            <ul className={style.navList}>
                <li className={style.navItem}><Link to="/despre-noi">Despre noi</Link></li>

                <li
                    className={style.navItem}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                >
                    <Link to="/servicii-medicale">Servicii Medicale</Link>
                    {dropdownOpen && (
                        <ul className={style.dropdown}>
                            <li><Link to="/servicii-medicale/medicina-muncii">Medicina Muncii</Link></li>
                            <li><Link to="/servicii-medicale/medicina-generala">Medicina Generală</Link></li>
                            <li><Link to="/servicii-medicale/medicina-alternativa">Medicina Alternativă</Link></li>
                            <li><Link to="/servicii-medicale/analize-de-laborator">Analize de Laborator</Link></li>
                        </ul>
                    )}
                </li>

                <li className={style.navItem}><Link to="/programe-de-preventie">Programe de Prevenție</Link></li>
                <li className={style.navItem}><Link to="/promotii">Promoții</Link></li>
                <li className={style.navItem}><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
