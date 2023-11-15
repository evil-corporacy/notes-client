import { AiApi } from '@/entities/ai/api'
import { NoteApi } from '@/entities/note/api'
import { UserApi } from '@/entities/user/api'
import { VaultApi } from '@/entities/vault/api'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
	reducer: {
		[AiApi.reducerPath]: AiApi.reducer,
		[UserApi.reducerPath]: UserApi.reducer,
		[VaultApi.reducerPath]: VaultApi.reducer,
		[NoteApi.reducerPath]: NoteApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(
			AiApi.middleware,
			UserApi.middleware,
			VaultApi.middleware,
			NoteApi.middleware
		),
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
