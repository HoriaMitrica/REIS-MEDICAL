import { useNavigate } from "react-router-dom";
import style from "./style.module.scss";

const BreastCancer = () => {
    const navigate = useNavigate();

    return (
        <div className={`${style.BreastCancer} main-content`}>

            <img src="/photos/cancer_san_large.jpg" alt="Prevenirea cancerului de sân" className={style.image} />
            <h2>Prevenirea Cancerului de Sân</h2>

            <p>În cadrul programului de prevenție a cancerului de sân vă oferim:</p>
            <ul>
                <li>Instruire privind autoexaminarea</li>
                <li>Investigație non-invazivă a circulației de la nivelul sânilor</li>
                <li>Recomandări personalizate</li>
            </ul>

            <p>
                1 din 8 femei riscă să dezvolte cancer la sân. La orice anomalie depistată vă recomandăm să vă prezentați la medic.
                Cunoașterea propriului corp și a modificărilor fiziologice este foarte importantă în prevenirea afecțiunilor grave. Importanța este evaluarea periodică!
            </p>

            <p>
                Auto-examinarea sânilor este primul pas, dar singură nu reduce numărul deceselor cauzate de cancerul de sân! Majoritatea anomaliilor descoperite la auto-examinare nu sunt cancere,
                dar o mică proporție sunt. Descoperirea bolii în stadiu precoce poate salva viața femeii.
            </p>

            <p>
                Cu ajutorul unui dispozitiv medical complet non-invaziv, care funcționează cu lumină din domeniul vizibil, putem evidenția potențialele anomalii vasculare asociate cancerelor de sân,
                începând de la dimensiunea de 7 mm. Neoplasmele sub 1,8 cm sunt considerate ca nepalpabile.
            </p>

            <p>
                Nu există pericolul radiațiilor sau alte riscuri pe care le au alte metode de investigare, putând fi folosit la orice vârstă, inclusiv la adolescente sau persoane tinere.
                Rezultatele nu sunt influențate de prezența implanturilor mamare, care creează probleme altor mijloace de diagnosticare.
            </p>

            <p>
                Nu poate detecta toate mărimile, pozițiile și tipurile de anormalități ale sânilor, evidențiind doar anomaliile vasculare prezente în afecțiunile maligne,
                astfel putând face diferența între o formațiune benignă și una cu potențial malign.
            </p>

            <p>
                Orice umflătură la nivelul sânului, secreție mamelonară sau modificare la nivelul sânului ar trebui investigată. În funcție de vârsta pacientei și modificările descoperite,
                se fac recomandări personalizate în scopul prevenirii apariției unor afecțiuni grave.
            </p>

            <p>
                <strong>Atenție:</strong> Cancerul mamar la bărbați este o boală rară, dar afectează aproximativ 1000 de bărbați pe an în SUA. Vârsta medie de apariție este de 60 de ani,
                dar această boală se poate instala și la vârste mai mari sau mai mici. De multe ori există prezentare la medic și un diagnostic tardiv.
            </p>

            <button onClick={() => navigate(-1)}>
                ← Înapoi la Programele de Prevenție
            </button>
        </div>
    );
};

export default BreastCancer;
