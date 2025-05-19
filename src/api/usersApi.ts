import { baseApi } from './baseApi';

export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}

export const usersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => 'users',
            providesTags: [{ type: 'Users' }],
        }),
        getUserById: builder.query<User, string>({
            query: (id) => `users/${id}`,
            providesTags: [{ type: 'Users' }],
        }),
        createUser: builder.mutation<User, Partial<User>>({
            query: (body) => ({
                url: 'users',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Users' }],
        }),
        updateUser: builder.mutation<User, Partial<User>>({
            query: ({ id, ...body }) => ({
                url: `users/${id}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: [{ type: 'Users' }],
        }),
        deleteUser: builder.mutation<void, string>({
            query: (id) => ({
                url: `users/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Users' }],
        }),
    }),
});

export const {
    useGetUsersQuery,
    useGetUserByIdQuery,
    useCreateUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
} = usersApi;