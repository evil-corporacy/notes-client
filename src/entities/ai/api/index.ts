import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Ai} from "../model/"

export const AiApi = createApi({
    reducerPath: "AiApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://notes.evcorp.ru/api/ai/"}),
    endpoints: (builder) => ({
        // askQuestion: builder.query<Ai, string>({
        //     query: (messages: MessageType[], id: string) => ({
        //         url: `/?id=${id}`,
        //         method: "POST",
        //         body: messages
        //     })
        // }),
        getChat: builder.query<Ai, string>({
            query: (id: string) => ({
                url: `/?id=${id}`,
                method: "GET",
            })
        }),
    })
})

export const {
    // useAskQuestionQuery,
    useGetChatQuery
} = AiApi