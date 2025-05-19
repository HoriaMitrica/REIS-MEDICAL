import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector } from '../../store/hooks';
import { getCurrentUserEmail } from '../../store/store';
import style from './style.module.scss';

export function AuthorizedLayout() {
    const navigate = useNavigate();
    const userEmail = useAppSelector(getCurrentUserEmail);

    useEffect(() => {
        if (!userEmail) {
            navigate('/login');
        }
    }, [userEmail, navigate]);

    return (
        <div className={style.authorizedLayout}>
            <div className={style.dashboard}>
                <Outlet />
            </div>
        </div>
    );
}