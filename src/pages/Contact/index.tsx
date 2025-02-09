import style from "./style.module.scss";

const Contact = () => {
    return (
        <div className={`${style.contactPage} main-content`}>

            <h2>Contactați-ne</h2>
            <p>Pentru informații, vă rugăm să ne contactați telefonic sau pe email:</p>

            <div className={style.contactInfo}>
                <div className={style.contactDetails}>
                    <p><strong>Telefon:</strong> 0371.086.321</p>
                    <p><strong>Fax:</strong> 031.815.32.28 / 031.817.44.34</p>
                    <p><strong>Telefon fix:</strong> 021.345.51.55</p>
                    <p><strong>Adresa:</strong> Str. Mizil Nr. 2C Bl SOCUM, Sect 3, București</p>
                    <p>În spatele Liceului de Chimie "Costin Nenițescu" de pe B-dul Theodor Pallady nr. 26</p>
                    <p><strong>Email:</strong> <a href="mailto:contact@reismedical.ro">contact@reismedical.ro</a> / <a href="mailto:reismedical@yahoo.com">reismedical@yahoo.com</a></p>
                </div>

                <div className={style.mapContainer}>
                    <iframe
                        title="Google Maps Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.7187111647445!2d26.176845725311757!3d44.40880385315072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1fc219b0d48af%3A0x9a89db724f46ad9d!2sReis%20Medical%20SRL!5e0!3m2!1sen!2sro!4v1739075742269!5m2!1sen!2sro"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
