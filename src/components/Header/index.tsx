import style from "./style.module.scss";
import { FaFacebookF } from "react-icons/fa";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.imageWrapper}>
                    <img style={{ width: "300px" }} src="/photos/logo.png" alt="Profile" />
                </div>

                <div className={style.info}>
                    <div className={style.phone}>
                        <p>Pentru detalii si programari ne puteti contacta la:</p>
                        <span className={style.phoneNumber}>021 345 51 55</span>
                    </div>

                    <div className={style.socialMedia}>
                        <a href="https://www.facebook.com/people/Reis-Medical-Medicina-Muncii/100067763648887/#" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className={style.icon} />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
