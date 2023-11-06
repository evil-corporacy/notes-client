export type MessageType = {
    role: "user" | "assistant",
    content: any
}

export interface Ai {
    messages: MessageType[],
    answer: any,
    success: boolean
}