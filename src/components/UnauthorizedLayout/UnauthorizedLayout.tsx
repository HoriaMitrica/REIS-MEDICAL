import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Header from '../Header';
import RightSidePage from '../RightSidePage/RightSide';
import style from './style.module.scss';

export function UnauthorizedLayout() {
    const location = useLocation();
    const excludedRoutes = ['/login', '/reset-password', '/request-reset-password'];
    const shouldShowRightSidePage = !excludedRoutes.includes(location.pathname);

    return (
        <div className={style.unauthorizedLayout}>
            <Header />
            <Navbar />

            <div className="main-container">
                <div className="content">
                    <Outlet />
                </div>

                {shouldShowRightSidePage && <RightSidePage />}
            </div>

            <Footer />
        </div>
    );
}