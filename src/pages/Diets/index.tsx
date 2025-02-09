import { useNavigate } from "react-router";
import style from "./style.module.scss";

const Diets = () => {

    const navigate = useNavigate();

    return (
        <div className={`${style.diets} main-content`}>

            <img src="/photos/regim_alimentar_large.jpg" alt="Dieta personalizată" className={style.image} />
            <h2>Regimuri alimentare recomandate</h2>
            <p>
                În funcție de afecțiunile prezentate de pacient, putem crea o recomandare personalizată,
                constând în regim alimentar, suplimente nutritive adecvate și activitate fizică.
            </p>
            <p>
                Așa cum există o dietă recomandată pacienților care suferă de ulcer gastric și, anume, dieta din afecțiunile biliare, există și o dietă în osteoporoză, în colonopatii, alimente recomandate sau nu în endocrinopatii, neoplasme diverse etc.
            </p>
            <p>
                În funcție de carențele existente (ex: deficit de calciu sau fier) și afecțiunile prezente, se pot recomanda suplimente nutritive care să acopere necesarul zilnic, ce nu poate fi obținut doar prin dietă (ex. suplimente cu fier, calciu, complex de vitamine B, fibre alimentare etc.), în funcție de nevoia fiecăruia.
            </p>
            <p>
                Oferim diete personalizate în funcție de istoricul medical al pacientului și afecțiunile coexistente.
            </p>

            <h3>Principalele afecțiuni care necesită o dietă deosebită:</h3>
            <ul>
                <li>Dislipidemiile</li>
                <li>Diabetul zaharat</li>
                <li>Hiperuricemia (guta)</li>
                <li>Hepatitele</li>
                <li>Bolile enterale (colitele)</li>
                <li>Obezitatea</li>
                <li>Subponderalitate</li>
            </ul>

            <h3>Servicii oferite:</h3>

            <h4>Consultația de evaluare inițială</h4>
            <p>
                Are rolul de a face evaluarea completă a stării de sănătate, a statusului nutrițional, metabolic și mental al pacientului,
                analiza obiceiurilor alimentare, a stilului de viață, efectuarea de măsurători antropometrice necesare pentru completarea dosarului pacientului.
            </p>
            <p>
                În urma acestei consultații și în funcție de valorile analizelor de sânge se poate obține, la cerere, o dietă personalizată, contra cost.
            </p>
            <p><strong>Durata:</strong> 30 min</p>

            <h4>Analize de sânge</h4>
            <p>
                Este necesar pentru evaluarea generală a stării de sănătate și include:
            </p>
            <ul>
                <li>Hemoleucogramă</li>
                <li>Creatinină</li>
                <li>Uree</li>
                <li>ALT/TGO, AST/TGP</li>
                <li>Profil lipidic (colesterol total, trigliceride, HDL-colesterol, LDL-colesterol)</li>
                <li>Calciu total, calciu ionic</li>
                <li>Sideremie</li>
                <li>Glicemie</li>
                <li>Hemoglobina glicozilată</li>
                <li>T3, TSH</li>
            </ul>

            <h4>Dieta personalizată</h4>
            <p><strong>Nu se poate elibera pe loc.</strong></p>
            <p>
                Se va elibera doar la cerere, în termen de 7 zile de la evaluarea inițială.
                Conține indicații personalizate în funcție de istoricul medical, afecțiunile coexistente, parametrii biologici, obiceiurile alimentare,
                programul de lucru și stilul de viață personal, precum și de gradul de motivație al pacientului.
            </p>
            <p>
                Include atât indicații asupra alimentației, cât și a exercițiilor fizice recomandate în funcție de particularitățile individuale
                și condiția fizică a pacientului.
            </p>
            <p><strong>Durata:</strong> 30 min</p>

            <h4>Consultații de monitorizare</h4>
            <p>
                În cadrul acestor consultații se vor evalua parametrii antropometrici, se va adapta programul personalizat în funcție de preferințe,
                urmărind menținerea gradului de motivație și confort al pacientului.
            </p>
            <p>
                Numărul acestora este stabilit în funcție de severitatea afecțiunii și obiectivele stabilite.
            </p>
            <p><strong>Durata:</strong> 30 min</p>
            <button onClick={() => navigate(-1)}>
                ← Înapoi la Programele de Prevenție
            </button>
        </div>
    );
};

export default Diets;
