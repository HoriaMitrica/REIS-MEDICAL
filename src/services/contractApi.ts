import { createApi } from '@reduxjs/toolkit/query/react';
import {
    CreateWorkContractDto,
    WorkContract,
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
        addContract: builder.mutation<WorkContract, CreateWorkContractDto>({
            query: (contractToAdd) => ({
                url: '/contracts/upload',
                method: 'POST',
                body: contractToAdd,
            }),
            invalidatesTags: ['Contract'],
        }),
    }),
});

export const {
    useSearchContractsQuery,
    useAddContractMutation,
} = contractApi; 