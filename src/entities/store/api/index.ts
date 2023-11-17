import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "http://134.0.118.64/api"}),
    endpoints: (builder) => ({
        checkServer: builder.query({
            query: () => '/',
        })
    })
})

export const { useCheckServerQuery } = api