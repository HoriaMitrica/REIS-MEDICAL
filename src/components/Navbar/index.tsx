import { Link } from "react-router-dom";
import style from "./style.module.scss";

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <div className={style.navContainer}>
                <ul className={style.navList}>
                    <li className={style.navItem}><Link to="/despre-noi">Despre noi</Link></li>
                    <li className={style.navItem}><Link to="/servicii-medicale">Servicii Medicale</Link></li>
                    <li className={style.navItem}><Link to="/programe-preventie">Programe de Prevenție</Link></li>
                    <li className={style.navItem}><Link to="/promotii">Promoții</Link></li>
                    <li className={style.navItem}><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
