import { RoutePathKeys } from './RoutePathKeys.enum';

export interface RouteConfig {
    path: string;
    isProtected?: boolean;
    roles?: string[];
}

export const publicRoutes: RouteConfig[] = [
    { path: RoutePathKeys.homepage },
    { path: RoutePathKeys.aboutUs },
    { path: RoutePathKeys.medicalServices },
    { path: RoutePathKeys.occupationalMedicine },
    { path: RoutePathKeys.generalMedicine },
    { path: RoutePathKeys.alternativeMedicine },
    { path: RoutePathKeys.labTests },
    { path: RoutePathKeys.preventionPrograms },
    { path: RoutePathKeys.diets },
    { path: RoutePathKeys.weightControl },
    { path: RoutePathKeys.breastCancer },
    { path: RoutePathKeys.firstAid },
    { path: RoutePathKeys.diabetes },
    { path: RoutePathKeys.promotions },
    { path: RoutePathKeys.contact },
    { path: RoutePathKeys.appointment },
    { path: RoutePathKeys.login },
];

export const protectedRoutes: RouteConfig[] = [
    { 
        path: RoutePathKeys.dashboard,
        isProtected: true,
    },
    { 
        path: RoutePathKeys.upload,
        isProtected: true,
        roles: ['ADMIN', 'ACCOUNTANT'],
    },
];
