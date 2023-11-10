type Data = {
    id: string,
    nickname: string,
    email: string,
    passwordHash: string
}

export interface UserResponse {
    success: boolean,
    data: Data
}