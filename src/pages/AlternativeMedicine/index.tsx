import style from "./style.module.scss";

const AlternativeMedicine = () => {
    return (
        <div className={`${style.alternativeMedicine} main-content`}>

            <h2>Medicină Alternativă</h2>

            <p>
                Medicina alternativă cuprinde o serie de tratamente și terapii neconvenționale; unele 
                sunt mai cunoscute, altele mai puțin cunoscute, dar toate au același scop: o stare de 
                sănătate cât mai bună.
            </p>

            <p>
                Medicina alternativă nu se substituie medicinei alopate, care tratează în principal efectele 
                bolii, tendința fiind să ne îndreptăm spre <strong>"medicina integrală"</strong> care să abordeze 
                individul și boala sub toate aspectele.
            </p>

            <p>
                Medicina alternativă este complexul de metode de păstrare a sănătății și de vindecare care 
                pornesc de la o perspectivă <strong>"holistică"</strong> asupra lumii și vieții, abordând corpul ca 
                pe un întreg: trup, suflet și minte integrat în Univers.
            </p>

            <p>
                Terapiile alternative provin majoritar din cultura orientală și folosesc remedii provenite 
                direct din natură, îndeosebi: structuri fizice, radiații, energia și psihicul uman.
            </p>

            <h3>Tipuri de terapii alternative</h3>
            <ul className={style.servicesList}>
                <li>Terapii naturiste</li>
                <li>Terapii prin atingere</li>
                <li>Terapii prin mișcare</li>
            </ul>

            <h3>Terapii Naturiste</h3>
            <ul className={style.servicesList}>
                <li>Fitoterapia (terapia cu ceaiuri, terapia cu plante aromate – aromoterapia, terapia cu uleiuri – oleoterapia, terapia cu muguri de plante etc.)</li>
                <li>Apiterapia</li>
                <li>Homeopatia</li>
                <li>Mineraloterapia (argiloterapia, terapia cu cenușă vegetală, terapia cu cărbune vegetal etc.)</li>
                <li>Terapia cu lipitori – Hirudoterapia</li>
                <li>Zooterapia</li>
                <li>Terapia cu factori naturali (balneoterapia, talasoterapia, helioterapia, hidroterapia etc.)</li>
                <li>Dietoterapia (oligoterapia, dieta cu suplimente nutritive, alimentația macrobiotică, alimentația vegetariană, posturile etc.)</li>
                <li>Terapia radiantă (radioterapia, magnetoterapia, cristaloterapia etc.)</li>
                <li>Terapia energetică (acupunctura, moxibustia, auriculoterapia, scalpoterapia, bioenergoterapia, terapia prin biorezonanță, cosmoenergoterapia etc.)</li>
                <li>Psihoterapia (hipnoterapia, sacroterapia, sofrologia, biofeedback-ul, vizualizarea, meditația etc.)</li>
            </ul>

            <h3>Terapii prin atingere</h3>
            <ul className={style.servicesList}>
                <li>Osteoterapia</li>
                <li>Chiropractica</li>
                <li>Masajul</li>
                <li>Reflexoterapia</li>
            </ul>

            <h3>Terapii prin mișcare</h3>
            <ul className={style.servicesList}>
                <li>Yoga</li>
                <li>Tai Qi Chuan</li>
                <li>Qi Gong</li>
            </ul>

            <h3>Mijloace de tratament complementare</h3>
            <ul className={style.servicesList}>
                <li>Remedii naturiste (ceaiuri, tincturi, lipitori, insecte, radiații, bioenergie etc.)</li>
                <li>Manipulări terapeutice</li>
                <li>Exerciții fizice</li>
            </ul>
        </div>
    );
};

export default AlternativeMedicine;
