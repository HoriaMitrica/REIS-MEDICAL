import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store/store';

const httpRequestHandler = fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_VERSION}`,
    prepareHeaders: (headers, { getState }) => {
        const state = getState() as RootState;
        const token = state.auth.token;

        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }

        return headers;
    }
});

export default httpRequestHandler;
