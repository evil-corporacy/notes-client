import {ResponseModel} from "../model/index"
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const VaultApi = createApi({
    reducerPath: "VaultAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://127.0.0.1:8000/api/vaults"}),
    endpoints: (builder) => ({
        getMy: builder.query<ResponseModel, string>({
            query: (accessToken: string | null) => ({
                url: '/my',
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }
            }),
        }),
        getById: builder.query<ResponseModel, string>({
            query: (accessToken: any, id: string) => ({
                url: `?id=${id}`,
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }
            }),
        }),
    })
})

export const {useGetMyQuery, useGetByIdQuery} = VaultApi