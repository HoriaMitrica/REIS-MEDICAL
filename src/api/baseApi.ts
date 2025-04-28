import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AppState } from '../store/store';
import { Configuration } from '../shared/generated-sources/src';
import { store } from '../store/store';

// Define the base URL for your API
const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

// Create base API slice with proper TypeScript types
export const baseApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const state = getState() as AppState;
            const token = state.authentication?.token;
            
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            
            return headers;
        },
    }),
    endpoints: () => ({}),
    tagTypes: ['Users', 'Appointments', 'Patients', 'Doctors'],
});

// Export the configuration for use with the generated API clients
export const apiConfig = new Configuration({
    basePath: baseUrl,
    accessToken: (name?: string, scopes?: string[]) => {
        const state = store.getState() as AppState;
        return state.authentication?.token || '';
    },
}); 