import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector } from '../../store/hooks';
import { isAuthenticated } from '../../auth/AuthSlice';
import style from './style.module.scss';

export function AuthorizedLayout() {
    const navigate = useNavigate();
    const isUserAuthenticated = useAppSelector(isAuthenticated);

    useEffect(() => {
        if (!isUserAuthenticated) {
            navigate('/login');
        }
    }, [isUserAuthenticated, navigate]);

    return (
        <div className={style.authorizedLayout}>
            <div className={style.dashboard}>
                <Outlet />
            </div>
        </div>
    );
}