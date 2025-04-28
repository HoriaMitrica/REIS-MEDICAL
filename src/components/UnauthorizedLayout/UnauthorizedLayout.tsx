import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Header from '../Header';
import RightSidePage from '../RightSidePage/RightSide';
import style from './style.module.scss';

export function UnauthorizedLayout() {
    return (
        <div className={style.unauthorizedLayout}>
            <Header />
            <Navbar />

            <div className="main-container">
                <div className="content">
                    <Outlet />
                </div>

                <RightSidePage />
            </div>

            <Footer />
        </div>
    );
} 