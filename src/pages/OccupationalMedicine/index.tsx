import style from "./style.module.scss";

const OccupationalMedicine = () => {
    return (
        <div className={`${style.occupationalMedicine} main-content`}>

            <h2>Medicina Muncii</h2>

            <p>
                Activitatea cu cea mai mare pondere în firma noastră, medicina muncii, reprezintă în
                același timp și cea mai mare responsabilitate pe care o avem atât față de angajați,
                pentru a-și putea desfășura activitatea în cele mai bune condiții de sănătate, cât și
                față de angajator, pentru care lipsa de incidente medicale nu poate duce decât la o
                mai bună și eficientă gestionare a actului productiv.
            </p>

            <h3>Serviciile de Medicina Muncii includ:</h3>
            <ul className={style.servicesList}>
                <li>Examenul medical la angajare</li>
                <li>Examenele medicale periodice</li>
                <li>Examen medical de reluare a activității</li>
                <li>Examen medical la adaptarea în muncă</li>
                <li>Eliberarea avizului de aptitudine în muncă</li>
                <li>Raportări periodice ale stării de sănătate a angajaților</li>
                <li>Supravegherea și evaluarea stării de sănătate</li>
                <li>Organizarea punctelor de prim ajutor</li>
                <li>Evaluarea condițiilor de muncă și stabilirea riscurilor</li>
                <li>Consilierea angajatorului privind normele igienico-sanitare</li>
            </ul>

            <h3>Obiectivele Medicinii Muncii</h3>
            <p>
                "Medicina muncii este o disciplină a medicinii profilactice care se ocupă cu studiul individului
                și al colectivității în relația sa cu factorii din mediul de muncă ce pot influența starea de sănătate."
            </p>
            <ul className={style.objectivesList}>
                <li>Promovarea și menținerea sănătății fizice și psihice a muncitorilor</li>
                <li>Prevenirea prejudiciilor aduse sănătății de factorii nocivi</li>
                <li>Adaptarea mediului de muncă la nevoile angajaților</li>
            </ul>

            <h3>Definiții</h3>
            <div className={style.definitionBlock}>
                <h4>Boala profesională</h4>
                <p>
                    Este o afecțiune determinată de un agent nociv (noxa profesională) din mediul de muncă.
                    Poate fi cauzată de substanțe chimice, factori fizici sau biologici.
                </p>
            </div>
            <div className={style.definitionBlock}>
                <h4>Accidentul de muncă</h4>
                <p>
                    Reprezintă vătămarea violentă a organismului sau intoxicația acută profesională,
                    având loc în timpul procesului de muncă și generând incapacitate temporară sau permanentă.
                </p>
            </div>

            <h3>Legislație</h3>
            <ul className={style.legislationList}>
                <li><a href="https://www.codulmuncii.ro/titlul_2/capitolul_1/art_27_1.html" target="_blank"><strong>Art. 27:</strong> Obligativitatea avizului medical la angajare</a></li>
                <li><a href="https://www.codulmuncii.ro/titlul_2/capitolul_1/art_28_1.html" target="_blank"><strong>Art. 28:</strong> Obligativitatea avizului medical în situații speciale</a></li>
            </ul>

            <h3>Linkuri utile</h3>
            <ul className={style.linksList}>
                <li><a href="https://www.cnas.ro" target="_blank">Casa Națională de Asigurări de Sănătate</a></li>
                <li><a href="https://dspb.ro/" target="_blank">Direcția de Sănătate Publică București</a></li>
                <li><a href="https://www.protectiapacientilor.ro/" target="_blank">Asociația Națională pentru Protecția Pacienților</a></li>
                <li><a href="http://www.xn--aliantapentrusntate-jfcb.ro/" target="_blank">Alianța pentru Sănătate din România</a></li>
                <li><a href="http://www.ms.gov.ro/" target="_blank">Ministerul Sănătății</a></li>
            </ul>
        </div>
    );
};

export default OccupationalMedicine;
