import { useNavigate } from "react-router-dom";
import style from "./style.module.scss";

const WeightControl = () => {
    const navigate = useNavigate();

    return (
        <div className={`${style.weightControl} main-content`}>

            <img src="/photos/control_al_greutatii_large.jpg" alt="Controlul greutății" className={style.image} />
            <h2>Program de control al greutății</h2>
            <p>
                Setarea unor principii de viață sănătoase, care au ca rezultat atingerea și menținerea greutății ideale.
            </p>
            <p>
                Majoritatea am învățat din familie să mâncăm mult și la ore cât mai nepotrivite, ne-am văzut părinții venind seara târziu acasă, 
                așezându-se la singura masă principală a zilei și așa am făcut și noi.
            </p>
            <p>
                În viața de zi cu zi ne confruntăm cu lipsa timpului și cu obiceiul mâncatului pe fugă, al lipsei de mișcare și odihnă. 
                Alimentele sunt tot mai sărace în principii nutritive și tot mai bogate în aditivi și conservanți.
            </p>
            <p>
                Carnea nu mai e carne, legumele nu mai sunt legume, fructele nu mai sunt fructe, zaharurile și uleiurile sunt tot mai rafinate, 
                brânzeturile și lactatele tot mai chimice.
            </p>
            <p>
                Trebuie să reînvățăm să mâncăm, să ne mișcăm, să trăim frumos!
            </p>

            <button className="backButton" onClick={() => navigate(-1)}>
                ← Înapoi la Programele de Prevenție
            </button>
        </div>
    );
};

export default WeightControl;
