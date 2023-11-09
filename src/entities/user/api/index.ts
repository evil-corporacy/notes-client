import {User} from "../model/index"
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const UserApi = createApi({
    reducerPath: "UserApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://127.0.0.1:8000/api/auth/"}),
    endpoints: (builder) => ({
        getMe: builder.query<User, string>({
            query: (accessToken: string | null) => ({
                url: '/me',
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }
            }),
        }),
        refresh: builder.query<User, string>({
            query: (accessToken: string | null) => ({
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