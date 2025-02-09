import style from "./style.module.scss";

const GeneralMedicine = () => {
    return (
        <div className={style.generalMedicine}>
            <h2>Medicină Generală</h2>

            <p>
                Medicina generală este specialitatea care se ocupă cu diagnosticarea și tratamentul 
                afecțiunilor acute sau cronice și furnizarea de îngrijiri preventive.
            </p>

            <h3>Servicii Medicina Generală</h3>
            <ul className={style.servicesList}>
                <li>Consultație inițială</li>
                <li>Control</li>
                <li>Consultație preventivă sân</li>
                <li>Consultanță regim de viață în diabetul zaharat</li>
                <li>Eliberare adeverință medicală</li>
                <li>Eliberare certificat prenuptial</li>
            </ul>

            <h3>Eliberare certificat prenuptial</h3>
            <ul className={style.servicesList}>
                <li>Consultul clinic și eliberarea certificatului (cu analize personale)</li>
                <li>Consult clinic, analize și eliberare certificat</li>
            </ul>

            <h3>Analize necesare pentru certificatul prenuptial</h3>
            <ul className={style.servicesList}>
                <li>Radiografie pulmonară</li>
                <li>VDRL</li>
                <li>HIV 1/2</li>
            </ul>

            <p>Consultațiile se desfășoară cu programare în intervalul de lucru al cabinetului medical.</p>

            <h3>Consultația de Medicină Generală Include:</h3>

            <h4>Explorări Funcționale</h4>
            <ul className={style.servicesList}>
                <li>Anamneză și alcătuirea dosarului medical al pacientului</li>
                <li>Examen clinic general</li>
                <li>Măsurarea tensiunii arteriale, a pulsului</li>
                <li>Măsurarea greutății, taliei</li>
                <li>Evaluarea acuității vizuale</li>
            </ul>

            <h4>Indicații</h4>
            <ul className={style.servicesList}>
                <li>Analize</li>
                <li>Tratament</li>
                <li>Îndrumarea către consult de specialitate</li>
                <li>Elaborarea și urmărirea planului terapeutic</li>
            </ul>

            <h3>Proceduri Diverse</h3>

            <h4>Explorări Funcționale</h4>
            <ul className={style.servicesList}>
                <li>Electrocardiogramă de repaus</li>
                <li>Interpretare ECG</li>
                <li>Audiogramă</li>
                <li>Spirometrie</li>
                <li>Ecografie generală</li>
            </ul>

            <h4>Proceduri Diverse</h4>
            <ul className={style.servicesList}>
                <li>Aerosoli (cu substanța pacientului)</li>
                <li>Extracție fire sutură</li>
                <li>Injecție intradermică</li>
                <li>Injecție intramusculară</li>
                <li>Injecție intravenoasă</li>
                <li>Injecție subcutanată</li>
                <li>Pansament exudativ</li>
                <li>Pansament simplu (neexudativ)</li>
                <li>Pansament ocular</li>
                <li>Recoltare probe biologice</li>
                <li>Spălătură oftalmică</li>
                <li>Test rapid glicemie</li>
                <li>Tratament local (cu substanța pacientului)</li>
                <li>Sedință de terapie cu lumină polarizată (10 min)</li>
                <li>Sedință de echilibrare prin color-terapie (30 min)</li>
            </ul>
        </div>
    );
};

export default GeneralMedicine;
