import { useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import { ro } from "date-fns/locale/ro";
import Modal from "react-modal";
import emailjs from "@emailjs/browser"; 
import "react-datepicker/dist/react-datepicker.css";
import style from "./style.module.scss";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "../../cosntants/constants";

Modal.setAppElement("#root");
registerLocale("ro", ro);

const Appointments = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedHour, setSelectedHour] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        phone: "",
        name: "",
        email: "",
        comments: "",
    });

    const availableHours = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];

    const handleDateChange = (date: Date | null) => {
        if (date) {
            setSelectedDate(date);
            setSelectedHour(null);
            setIsModalOpen(true);
        }
    };

    const handleHourSelect = (hour: string) => {
        setSelectedHour(hour);
        setIsModalOpen(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!selectedDate || !selectedHour || !formData.phone || !formData.name || !formData.email) {
            alert("Nu ați completat toate informațiile neceasre");
            return;
        }

        setLoading(true);

        const templateParams = {
            phone: formData.phone,
            name: formData.name,
            email: formData.email,
            comments: formData.comments || "N/A",
            date: selectedDate.toLocaleDateString("ro-RO"),
            hour: selectedHour,
        };

        try {
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
            alert("Programarea a fost făcută cu succes");

            setFormData({ phone: "", name: "", email: "", comments: "" });
            setSelectedDate(null);
            setSelectedHour(null);
        } catch (error) {
            console.error("Email error:", error);
            alert("Ceva nu a mers bine, mai încercați odată");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={style.appointments}>
            <h2>Faceți o programare</h2>

            <form onSubmit={handleSubmit}>
                <label>Număr de telefon*</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

                <label>Nume*</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                <label>Email*</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                <label>Comentarii (Opțional)</label>
                <textarea name="comments" value={formData.comments} onChange={handleChange} />

                <label>Selectați data și ora*</label>
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="dd MMMM yyyy"
                    locale="ro"
                    inline
                    minDate={new Date()}
                    filterDate={(date) => date.getDay() !== 0 && date.getDay() !== 6}
                    className={style.datePicker}
                    calendarClassName={style.datePickerContainer}
                    renderCustomHeader={({
                        date,
                        decreaseMonth,
                        increaseMonth,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled,
                    }) => (
                        <div className={style.datePickerHeader}>
                            <button
                                className={style.datePickerNav}
                                onClick={decreaseMonth}
                                disabled={prevMonthButtonDisabled || (date.getMonth() <= new Date().getMonth() && date.getFullYear() === new Date().getFullYear())}
                            >
                                {"<"}
                            </button>
                            <span className={style.datePickerMonth}>
                                {date.toLocaleString("ro-RO", { month: "long", year: "numeric" })}
                            </span>
                            <button className={style.datePickerNav} onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                {">"}
                            </button>
                        </div>
                    )}
                />

                {selectedDate && selectedHour && (
                    <p>
                        Data selectată: <strong>{selectedDate.toLocaleDateString("ro-RO")}</strong> la{" "}
                        <strong>{selectedHour}</strong>
                    </p>
                )}

                <button type="submit" disabled={loading}>
                    {loading ? "Se procesează..." : "Rezervați programarea"}
                </button>
            </form>

            {loading && <div className={style.loadingOverlay}>Se procesează...</div>}

            <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className={style.modal}>
                <h3>{selectedDate ? selectedDate.toLocaleDateString("ro-RO") : "Selectați o oră"}</h3>
                <p>Selectați o oră disponibilă:</p>
                <div className={style.timeSlots}>
                    {availableHours.map((hour) => (
                        <button key={hour} onClick={() => handleHourSelect(hour)}>
                            {hour}
                        </button>
                    ))}
                </div>
                <button onClick={() => setIsModalOpen(false)} className={style.closeModal}>
                    Închideți
                </button>
            </Modal>
        </div>
    );
};

export default Appointments;
