import style from "./style.module.scss";
import { useNavigate } from "react-router";

const Diabetes = () => {

     const navigate = useNavigate();
     
    return (
        <div className={`${style.diabetes} main-content`}>
            <img src="/photos/diabet_zaharat_large.jpg" alt="Dieta personalizată" />
            <h2>Consiliere Regim de Viață în Diabetul Zaharat</h2>

            <p>
                Diabetul zaharat este o afecțiune cronică care poate să apară la vârste înaintate, dar care își face loc tot mai devreme la adultul tânăr.
            </p>

            <p>
                Această afecțiune cronică impune un regim de viață diferit de ceea ce știam că este permis sau posibil înainte. Trebuie să învățăm să ne ferim de anumite alimente, să ne calculăm și echilibrăm dieta, regimul alimentar fiind foarte important în evoluția bolii și rapiditatea apariției complicațiilor.
            </p>

            <p>
                De asemenea, trebuie să acordăm o atenție mai mare anumitor detalii legate de igiena personală zilnică, apariția unor accidente minore, intervenții chirurgicale și tratamentul bolilor asociate.
            </p>

            <p>
                Vom învăța împreună cum să trăim normal în continuare și să ne evaluăm periodic corect, cum să ne păstrăm viața și obiceiurile dincolo de boală.
            </p>
            <button onClick={() => navigate(-1)}>
                ← Înapoi la Programele de Prevenție
            </button>
        </div>
    );
};

export default Diabetes;
