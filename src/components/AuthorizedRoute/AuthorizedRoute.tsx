import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { isAuthenticated } from '../../auth/AuthSlice';

interface AuthorizedRouteProps {
    children: React.ReactNode;
}

export const AuthorizedRoute = ({ children }: AuthorizedRouteProps) => {
    const location = useLocation();
    const isAuth = useAppSelector(isAuthenticated);

    if (!isAuth) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <>{children}</>;
}; 