import { Note } from '@/entities/note/model'

export interface Vault {
	id: string
	title: string
	user: string
	isPublic: boolean
	description?: string
	tags?: string[]
	colors: string[]
	notes?: Note[]
}
