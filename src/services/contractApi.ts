import { createApi } from '@reduxjs/toolkit/query/react';
import {
    WorkContract,
} from '../shared/generated-sources/index';
import httpRequestHandler from '../shared/baseQueryHandler.function';

// TODO: Define proper DTOs when available
interface ContractSearchParams {
    cnp?: string;
    status?: 'ACTIVE' | 'EXPIRED' | 'PENDING';
    page?: number;
    size?: number;
    sort?: string;
}

interface ContractSearchResponse {
    content: WorkContract[];
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
}

export const contractApi = createApi({
    reducerPath: 'contractApi',
    baseQuery: httpRequestHandler,
    tagTypes: ['Contract'],
    endpoints: (builder) => ({
        // TODO: Implement search functionality
        searchContracts: builder.query<ContractSearchResponse, ContractSearchParams >({
            query: (params: ContractSearchParams) => ({
                url: '/contracts/search',
                method: 'GET',
                params,
            }),
            providesTags: ['Contract'],
        }),
        getContract: builder.query<WorkContract, string>({
            query: (id: string) => `/contracts/${id}`,
            providesTags: ['Contract'],
        }),
    }),
});

export const {
    useSearchContractsQuery,
    useGetContractQuery,
} = contractApi; 