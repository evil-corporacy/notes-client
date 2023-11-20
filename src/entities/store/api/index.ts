import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "http://notes.evcorp.ru/api"}),
    endpoints: (builder) => ({
        checkServer: builder.query({
            query: () => '/',
        })
    })
})

export const { useCheckServerQuery } = api