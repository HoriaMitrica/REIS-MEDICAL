import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { getCurrentUserRole } from '../../store/store';

interface RequireRoleProps {
    children: React.ReactNode;
    roles: string[];
}

export const RequireRole: React.FC<RequireRoleProps> = ({ children, roles }) => {
    const userRole = useAppSelector(getCurrentUserRole);

    if (!userRole) {
        return <Navigate to="/login" replace />;
    }

    if (!roles.includes(userRole)) {
        return <Navigate to="/dashboard" replace />;
    }

    return <>{children}</>;
}; 