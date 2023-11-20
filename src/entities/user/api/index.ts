import {UserResponse} from "../model/index"
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const UserApi = createApi({
    reducerPath: "UserApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://notes.evcorp.ru/api/auth/"}),
    endpoints: (builder) => ({
        getMe: builder.query<UserResponse, string>({
            query: (accessToken: any) => ({
                url: '/me',
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }
            }),
        }),
        refresh: builder.query<UserResponse, string>({
            query: (accessToken: any) => ({
                url: '/refresh',
                method: "PATCH",
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }
            }),
        }),
    })
})

export const {useGetMeQuery, useRefreshQuery} = UserApi