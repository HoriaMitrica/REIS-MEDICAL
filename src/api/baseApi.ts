import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store/store';

// Define the base URL for your API
const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

// Create base API slice with proper TypeScript types
export const baseApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const state = getState() as RootState;
            const token = state.auth?.token;

            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }

            return headers;
        },
    }),
    endpoints: () => ({}),
    tagTypes: ['Users', 'Appointments', 'Patients', 'Doctors'],
});