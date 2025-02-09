import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
        if (window.innerWidth > 768) setMenuOpen(false); // Auto-close on resize to larger screens
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className={style.navbar}>
            <div className={style.navContainer}>
                <button className={style.burgerMenu} onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                <ul className={`${style.navList} ${menuOpen ? style.showMenu : ""}`}>
                    <li className={style.navItem}><Link to="/despre-noi" onClick={toggleMenu}>Despre noi</Link></li>
                    <li className={style.navItem}><Link to="/servicii-medicale" onClick={toggleMenu}>Servicii Medicale</Link></li>
                    <li className={style.navItem}><Link to="/programe-preventie" onClick={toggleMenu}>Programe de Prevenție</Link></li>
                    <li className={style.navItem}><Link to="/promotii" onClick={toggleMenu}>Promoții</Link></li>
                    <li className={style.navItem}><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                </ul>

                {menuOpen && isMobile && <div className={style.overlay} onClick={toggleMenu}></div>}
            </div>
        </nav>
    );
};

export default Navbar;
