/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateUserDto = {
    firstName: string;
    lastName: string;
    email: string;
    role: CreateUserDto.role;
};
export namespace CreateUserDto {
    export enum role {
        WORKER = 'WORKER',
        DIRECTOR = 'DIRECTOR',
        ACCOUNTANT = 'ACCOUNTANT',
        ADMIN = 'ADMIN',
    }
}

