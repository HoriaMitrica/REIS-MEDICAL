import { useState, useEffect } from "react";
import style from "./style.module.scss";

interface LabTestCategory {
    title: string;
    details:string;
    tests: string[];
}

const LabTests = () => {
    const [categories, setCategories] = useState<LabTestCategory[]>([]);
    const [openCategory, setOpenCategory] = useState<string | null>(null);

    useEffect(() => {
        fetch("/text/labTests.json")
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(() => console.error("Failed to load lab tests"));
    }, []);

    const toggleCategory = (title: string) => {
        setOpenCategory(prev => (prev === title ? null : title));
    };

    return (
        <div className={`${style.labTests} main-content`}>

            <h2>Analize de Laborator</h2>
            <p>
                Nu poți avea grijă de oameni dacă nu poți afla cu ce probleme se confruntă. De aceea, cu ajutorul
                aparaturii din dotare și a colaboratorilor noștri, încercăm să determinăm cu exactitate ce suferințe
                au pacienții noștri, astfel încât să le redăm starea de sănătate normală.
            </p>
            <p>
                Programarea se face prin secretariatul Reis Medical, tarifele fiind comunicate în funcție de investigația
                solicitată, numărul de incidente și furnizorul ales de către pacient.
            </p>

            <div className={style.categories}>
                {categories.map(category => (
                    <div key={category.title} className={style.category}>
                        <div className={style.categoryHeader} onClick={() => toggleCategory(category.title)}>
                            {category.title}
                            <span className={style.arrow}>{openCategory === category.title ? "▲" : "▼"}</span>
                        </div>
                        {openCategory === category.title && (
                            <>
                                <p>{category.details}</p>
                                <ul className={style.testList}>
                                    {category.tests.map((test, index) => (
                                        <li key={index}>{test}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LabTests;
