import { FaClock } from "react-icons/fa";
import style from "./style.module.scss";

const Schedule = () => {
    return (
        <div className={style.schedule}>
            <h2><FaClock className={style.icon} /> Program</h2>
            <p><strong>Luni – Vineri:</strong> 9:00 – 17:00</p>
            <p><strong>Sambata – Duminica:</strong> Inchis</p>
        </div>
    );
};

export default Schedule;
