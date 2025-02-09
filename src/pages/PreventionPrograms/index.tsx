import { useEffect, useState } from "react";
import Card from "../../components/Card";
import style from "./style.module.scss";
import { CardProps } from "../../cosntants/types";

const PreventionPrograms = () => {
    const [programs, setPrograms] = useState<CardProps[]>([]);

    useEffect(() => {
        fetch(`/text/preventionPrograms.json`)
            .then(response => response.json())
            .then(json => setPrograms(json))
            .catch(() => console.log("Error loading prevention programs"));
    }, []);

    return (
        <div className={style.preventionPrograms}>
            <h2>Programe de Prevenție</h2>
            <p className={style.description}>
                Preocuparea pentru prevenirea îmbolnăvirilor a dus la crearea programelor de prevenție care se desfășoară în cadrul Reis Medical.
                În prezent avem în derulare 5 programe:
            </p>
            <div className={style.cardContainer}>
                {programs.map((program, index) => (
                    <Card key={index} {...program} />
                ))}
            </div>
        </div>
    );
};

export default PreventionPrograms;
