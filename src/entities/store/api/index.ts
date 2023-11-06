import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "http://127.0.0.1:8000/api"}),
    endpoints: (builder) => ({
        checkServer: builder.query({
            query: () => '/',
        })
    })
})

export const { useCheckServerQuery } = api