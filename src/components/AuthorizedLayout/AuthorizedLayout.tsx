import { Outlet } from 'react-router-dom';
import style from './style.module.scss';

export function AuthorizedLayout() {
    return (
        <div className={style.authorizedLayout}>
            <div className={style.dashboard}>
                <Outlet />
            </div>
        </div>
    );
} 