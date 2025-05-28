import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, QueryActionCreatorResult, QueryDefinition } from '@reduxjs/toolkit/query/react';

export const handleQueryStartedFunction = async <T, BaseQuery extends BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>>(
    {
        dispatch,
        successActions,
        queryFulfilled
    }: {
        dispatch: any;
        successActions: any[];
        queryFulfilled: Promise<QueryActionCreatorResult<QueryDefinition<T, BaseQuery, string, unknown, string>>>
    }
) => {
    try {
        const result = await queryFulfilled;
        successActions.forEach(action => dispatch(action(result.data)));
    } catch (error) {
        console.error('Query failed:', error);
    }
};