import style from "./style.module.scss";

const AboutUs = () => {
    return (
        <div className={style.aboutUs}>
            <img src="/photos/reis_medical.jpg" alt="Despre noi" className={style.image} />
            <div className={style.text}>
                <h2>Despre Noi</h2>
                <p>
                    Înființată în anul 2004, Reis Medical a pornit la drum cu experiența echipei medicale deja
                    acumulată în 4 ani de practică și competențe obținute în medicina de întreprindere. Acum, după
                    mulți ani de muncă susținută, am crescut constant portofoliul și baza de servicii, rămânând
                    aproape de toți clienții.
                </p>
                <h3>Conceptul nostru principal este flexibilitatea:</h3>
                <ul>
                    <li><strong>Flexibilitate în relațiile contractuale</strong> - ne adaptăm după programul clienților noștri;</li>
                    <li><strong>Flexibilitate față de pacienții noștri</strong> care au în noi un sprijin și în afara vizitei obligatorii de medicina muncii;</li>
                    <li><strong>Flexibilitate în serviciile oferite</strong> pe care le îmbunătățim în permanență sau la cererea clienților noștri.</li>
                </ul>
                <p>
                    Deși examenul de medicina muncii este reglementat prin lege ca fiind obligatoriu și necesar
                    tuturor firmelor din România, noi depășim bariera de necesar și transformăm obligațiile în
                    beneficii, îmbunătățind starea de sănătate a angajaților, crescând performanța și eliminând
                    timpii morți generați de situații medicale.
                </p>
                <p>
                    De asemenea, ajutăm angajații nu doar să fie capabili de a-și desfășura activitățile zilnice
                    într-o stare de sănătate normală, dar și să se poată bucura de beneficiile de după încheierea
                    activității din câmpul muncii.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
