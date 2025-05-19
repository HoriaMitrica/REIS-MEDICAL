import { Outlet, Link, useNavigate } from 'react-router-dom';
import style from './style.module.scss';

export function LoginLayout() {
    const navigate = useNavigate();

    return (
        <div className={style.loginLayout}>
            <div className={style.loginContainer}>
                <Outlet />
                <div className={style.forgotPasswordContainer}>
                    <Link to="/reset-password" className={style.forgotPassword} onClick={() => navigate('/reset-password')}>
                        Forgot Password?
                    </Link>
                </div>
            </div>
        </div>
    );
}