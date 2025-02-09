import { useNavigate } from "react-router";
import style from "./style.module.scss";

const FirstAid = () => {

    const navigate = useNavigate();

    return (
        <div className={`${style.firstAid} main-content`}>
            <img src="/photos/primul_ajutor_large.jpg" alt="Dieta personalizată" className={style.image} />
            <h2>Primul Ajutor</h2>

            <p>
                Primul ajutor este reprezentat de totalitatea acțiunilor efectuate de către persoane fără pregătire medicală și fără echipamente specifice acestui scop, menite să stabilizeze victima până la preluarea ei de către un serviciu specializat.
            </p>

            <p>
                Cursurile sunt susținute de medici specialiști cu competență în urgențele prespitalicesti. Certificatul de absolvire obținut la finalul cursului se acordă în urma unei evaluări finale din cunoștințele dobândite.
            </p>

            <h3>Cadru Legislativ</h3>
            <ul>
                <li><strong>Directiva Consiliului 89/391/CEE</strong> – privind măsuri pentru securitatea și sănătatea lucrătorilor la locul de muncă.</li>
                <li><strong>Legea 319/2006</strong> – Legea sănătății și securității în muncă.</li>
                <li><strong>HG 1425/2006</strong> – Norme metodologice pentru aplicarea Legii 319.</li>
                <li><strong>HG nr. 1091/2006</strong> – Cerințele minime de securitate și sănătate pentru locul de muncă.</li>
                <li><strong>Legea 95/2006</strong> – Reforma în domeniul sănătății.</li>
            </ul>

            <h3>Durata Cursurilor</h3>
            <p>Cursurile de Prim Ajutor pot avea durate de:</p>
            <ul>
                <li>1 oră și jumătate</li>
                <li>6 ore</li>
                <li>12 ore (impartite pe 2 zile)</li>
            </ul>

            <h3>Obiectivele Cursului</h3>
            <ul>
                <li>Înțelegerea riscurilor la care se expune salvatorul.</li>
                <li>Evaluarea unei persoane căzute.</li>
                <li>Așezarea unei persoane inconștiente care respiră în poziție laterală de siguranță.</li>
                <li>Manevrele de resuscitare de bază (masaj cardiac extern și ventilații artificiale).</li>
                <li>Executarea manevrei Heimlich.</li>
                <li>Acordarea primului ajutor în diferite situații:</li>
                <ul>
                    <li>Traumatisme: contuzii, luxații, entorse, hemoragii etc.</li>
                    <li>Pansamente, imobilizare, transport.</li>
                    <li>Accidente rutiere, electrocutare, înec.</li>
                    <li>Politraumatism, traumatism cranio-cerebral.</li>
                    <li>Arsuri, degerături, insolație.</li>
                    <li>Șoc anafilactic, mușcături de animale, înțepături de insecte.</li>
                    <li>Intoxicații.</li>
                    <li>Agravarea unor boli cronice (infarct, accident vascular, diabet, epilepsie, astm).</li>
                    <li>Adaptare la specificul locului de muncă.</li>
                </ul>
            </ul>

            <button onClick={() => navigate(-1)}>
                ← Înapoi la Programele de Prevenție
            </button>
        </div>
    );
};

export default FirstAid;
