
import Appointments from "../Appointments";
import Schedule from "../Schedule";
import style from "./style.module.scss";

const RightSidePage = () => {
    return (
        <aside className={style.rightSidebar}>
            <Schedule />
            <Appointments />
        </aside>
    );
};

export default RightSidePage;
