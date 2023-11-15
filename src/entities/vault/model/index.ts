export interface Vault {
	id: string
	title: string
	description: string
	isPublic: boolean
	colors: string[]
	tags: string[]
}

export interface ResponseModel {
	success: boolean
	data: Vault
}