import { useEffect, useState } from "react";
import Card from "../../components/Card";
import style from "./style.module.scss";
import { CardProps } from "../../cosntants/types";


const MedicalServices = () => {
    const [services, setServices] = useState<CardProps[]>([]);
    useEffect(() => {
        fetch('/text/medicalServices.json')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => setServices(data))
          .catch(error => console.error('There has been a problem with your fetch operation:', error));
      }, []);

    return (
        <div className={style.medicalServices}>
            <h2>Servicii Medicale</h2>
            <div className={style.cardContainer}>
                {services.map((service, index) => (
                    <Card key={index} {...service} />
                ))}
            </div>
        </div>
    );
};

export default MedicalServices;
