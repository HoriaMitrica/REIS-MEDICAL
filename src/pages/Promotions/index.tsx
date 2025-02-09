import style from "./style.module.scss";

const Promotions = () => {
    return (
        <div className={style.promotions}>
            <h2>Diagnostic noninvaziv prin biorezonanţă</h2>
            <p>
                Semnalele undelor electromagnetice emise de corpul uman reprezintă starea specifică a organismului din acel moment şi
                acestea sunt diferite în funcţie de starea corpului, sănătate, boală etc. Prin determinarea acestor semnale electromagnetice,
                putem determina starea corpului.
            </p>

            <div className={style.content}>
                <div className={style.text}>
                    <p>
                        Metoda analizei prin rezonanţă cuantică magnetică este o tehnică rapidă şi non invazivă pentru verificarea stării de
                        sănătate şi a diverselor modalităţi curative specifice.
                    </p>
                    <p>
                        Sunt analizaţi peste 20 de parametri cum ar fi: condiţiile cardiovasculare şi cerebrovasculare, densitatea minerală
                        a oaselor, microelementele, prezenţa plumbului în sânge, reumatismul, căile respiratorii şi plămânii, glucoza din sânge,
                        stomacul şi intestinele, ficatul şi bila, nervii cranieni, organele genitale, prostata, urmele de seleniu, fier, zinc
                        şi calciu, vitamine etc.
                    </p>
                    <p>
                        Rezultatele pot fi analizate şi interpretate rapid şi cu precizie fără să fie nevoie de analiza sângelui sau radiografii.
                        Durata investigației nu depășește 5 minute, raportul obținut va fi livrat în format electronic (CD), împreună cu
                        recomandările personalizate.
                    </p>
                    <p>
                        Verificarea stării de sănătate se poate face oriunde și oricând economisind astfel timpul și resursele pacientului.
                    </p>
                    <h3>Promoția lunii</h3>
                    <ul>
                        <li><strong>Reducere 20%</strong> din tariful de bază!</li>
                        <li>
                            Vino cu un/o prieten/ă și veți beneficia amândoi de reducere de 25% la următoarea evaluare!
                        </li>
                        <li>
                            Căutați mai multe promoții pe <a target="_blank" href="https://www.facebook.com/people/Reis-Medical-Medicina-Muncii/100067763648887/#"> pagina noastră de Facebook</a>.
                        </li>
                    </ul>
                </div>

                <img src="/photos/reis_promotions.png" alt="Diagnostic Biorezonanță" className={style.image} />
            </div>
        </div>
    );
};

export default Promotions;
