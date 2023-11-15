export interface Note {
	id: string
	imageUrl: string
	title: string
	content: string
	starred: boolean
}

interface ShortNote {
	id: string
	title: string
}

export interface Notes {
	success: boolean
	content: ShortNote[]
}
