export function getRandom(array: any[]) {
	let randomIndex: number = Math.floor(Math.random() * array.length)
	return array[randomIndex]
}
