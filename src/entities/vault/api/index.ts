import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ResponseModel } from '../model/index'

const getAccessToken = () => {
	if (typeof window === 'undefined') {
		return null
	}
	return localStorage.getItem('access')
}
export const VaultApi = createApi({
	reducerPath: 'VaultAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://notes.evcorp.ru/api/vaults',
		headers: {
			Authorization: `Bearer ${getAccessToken()}`,
		},
	}),
	endpoints: builder => ({
		getMy: builder.query<ResponseModel, undefined>({
			query: () => ({
				url: '/my',
				method: 'GET',
				headers: {
					Authorization: `Bearer ${getAccessToken()}`,
				},
			}),
		}),
		getById: builder.query<ResponseModel, string>({
			query: (id: string) => ({
				url: `?id=${id}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${getAccessToken()}`,
				},
			}),
		}),
	}),
})

export const { useGetMyQuery, useGetByIdQuery } = VaultApi
