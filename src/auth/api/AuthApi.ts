import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginResponseDto, LoginUserDto, RequestResetPasswordDto, ResetPasswordDto, SuccessDto } from '../../shared/generated-sources';

const baseUrl = `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_VERSION}`;
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        loginUser: builder.mutation<LoginResponseDto, LoginUserDto>({
            query: (data: LoginUserDto) => ({
                url: `/auth/login`,
                method: 'POST',
                body: data
            }),
        }),
        passwordResetRequest: builder.mutation<SuccessDto, RequestResetPasswordDto>({
            query: (data: RequestResetPasswordDto) => ({
                url: `/auth/passwordResetRequest`,
                method: 'POST',
                body: data
            })
        }),
        passwordReset: builder.mutation<SuccessDto, ResetPasswordDto>({
            query: (data: ResetPasswordDto) => ({
                url: `/auth/passwordReset`,
                method: 'POST',
                body: data
            })
        })
    })
});

export const { 
    useLoginUserMutation, 
    usePasswordResetRequestMutation, 
    usePasswordResetMutation 
} = authApi;