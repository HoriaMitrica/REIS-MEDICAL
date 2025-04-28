import { Outlet } from 'react-router-dom';
import style from './style.module.scss';

export function LoginLayout() {
    return (
        <div className={style.loginLayout}>
            <div className={style.loginContainer}>
                <Outlet />
            </div>
        </div>
    );
} 