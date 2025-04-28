export interface AuthenticationStateInterface {
    token: string | null;
    expirationDate: Date | null;
    role: string;
    userEmail: string;
} 