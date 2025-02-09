import { Link } from "react-router-dom";
import style from "./style.module.scss";
import { CardProps } from "../../cosntants/types";

const Card = ({ title, description, image, to }: CardProps) => {
    return (
        <div className={style.card}>
            <h3>{title}</h3>
            <img src={image} alt={title} className={style.image} />
            <div className={style.cardContent}>
                <p>{description}</p>
                <Link to={to} className="button">
                    Mai mult
                </Link>
            </div>
        </div>
    );
};

export default Card;
