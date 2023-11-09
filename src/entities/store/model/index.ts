import { configureStore } from '@reduxjs/toolkit'
import {AiApi} from "@/entities/ai/api";
import {setupListeners} from "@reduxjs/toolkit/query";
import {UserApi} from "@/entities/user/api";

export const store = configureStore({
    reducer: {
        [AiApi.reducerPath]: AiApi.reducer,
        [UserApi.reducerPath]: UserApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(AiApi.middleware, UserApi.middleware)
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch