import { createApi } from '@reduxjs/toolkit/query/react';
import {
    WorkContractDto,
    WorkContractWithDriveInfoDto,
} from '../shared/generated-sources/index';
import httpRequestHandler from '../shared/baseQueryHandler.function';

export const contractApi = createApi({
    reducerPath: 'contractApi',
    baseQuery: httpRequestHandler,
    tagTypes: ['Contract'],
    endpoints: (builder) => ({
        searchContracts: builder.query<WorkContractWithDriveInfoDto[], {cnp:string}>({
            query: (params: {cnp:string}) => ({
                url: `/contracts/by-cnp/${params.cnp}`,
                method: 'GET',
            }),
            providesTags: ['Contract'],
        }),
        addContract: builder.mutation<WorkContractDto, FormData>({
            query: (formData) => ({
                url: '/contracts/upload',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['Contract'],
        }),
    }),
});

export const {
    useSearchContractsQuery,
    useAddContractMutation,
} = contractApi;