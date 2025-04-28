import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, QueryActionCreatorResult, QueryDefinition } from '@reduxjs/toolkit/query/react';

export const handleQueryStartedFunction = async <T>(
    {
        dispatch,
        successActions,
        queryFulfilled
    }: {
        dispatch: any;
        successActions: any[];
        queryFulfilled: Promise<QueryActionCreatorResult<QueryDefinition<T, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>>>>
    }
) => {
    try {
        const result = await queryFulfilled;
        successActions.forEach(action => dispatch(action(result.data)));
    } catch (error) {
        console.error('Query failed:', error);
    }
};