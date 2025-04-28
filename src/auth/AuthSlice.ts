import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { jwtDecode } from 'jwt-decode';
import { LoginResponseDto } from '../shared/generated-sources/index';
import { RootState } from '../store/store';
import { AuthenticationStateInterface } from './IAuthenticationState';

const decodeJwtToken = (token?: string) => {
    const decodedToken = token
        ? jwtDecode<any>(token)
        : null;
    const role = decodedToken
        ? decodedToken.roles
        : [];
    const expirationDate = decodedToken
        ? dayjs(decodedToken.exp * 1000)
            .toDate()
        : null;
    const sub = decodedToken
        ? decodedToken.sub
        : null;

    return {
        token,
        expirationDate,
        role,
        sub
    };
};

const initialState: AuthenticationStateInterface = {
    token: null,
    expirationDate: null,
    role: "",
    userEmail: "",
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userLoggedIn: (state, action: PayloadAction<LoginResponseDto>) => {
            if (action.payload.token) {
                const tokenData = decodeJwtToken(action.payload.token);
                state.token = tokenData.token!;
                state.expirationDate = tokenData.expirationDate!;
                state.role = tokenData.role;
                state.userEmail = tokenData.sub;
            }
        },
        logout(state) {
            state.token = initialState.token;
            state.expirationDate = initialState.expirationDate;
            state.role = initialState.role;
        }
    }
});

export function isAuthenticationValid(expirationDate: Date | string | null): Boolean {
    if (!expirationDate) return false;
    return dayjs(expirationDate).isValid() && dayjs().isBefore(expirationDate);
}

export const isAuthenticated = (state: RootState) => isAuthenticationValid(state.auth.expirationDate);

export const { userLoggedIn, logout } = authSlice.actions;

export default authSlice.reducer;