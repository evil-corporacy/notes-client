import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Notes } from '../model/index'

const getAccessToken = () => {
	if (typeof window === 'undefined') {
		return null
	}
	return localStorage.getItem('access')
}
export const NoteApi = createApi({
	reducerPath: 'NoteApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://127.0.0.1:8000/api/notes',
		headers: {
			Authorization: `Bearer ${getAccessToken()}`,
		},
	}),
	endpoints: builder => ({
		getByVault: builder.query<Notes, string>({
			query: (id: string | undefined) => ({
				url: `/byvault?id=${id}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${getAccessToken()}`,
				},
			}),
		}),
		getById: builder.query<Notes, string>({
			query: (id: string | undefined) => ({
				url: `?id=${id}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${getAccessToken()}`,
				},
			}),
		}),
	}),
})

export const { useGetByVaultQuery } = NoteApi
