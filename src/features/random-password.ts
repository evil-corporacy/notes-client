export function generateRandomPassword(): string {
	const length = Math.floor(Math.random()) + 8
	const charset =
		'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'

	let password = ''
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * charset.length)
		password += charset[randomIndex]
	}

	return password
}
