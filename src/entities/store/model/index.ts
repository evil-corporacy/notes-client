import { configureStore } from '@reduxjs/toolkit'
import {AiApi} from "@/entities/ai/api";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [AiApi.reducerPath]: AiApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(AiApi.middleware)
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch