import api from "@/features/axios"
import {FormData} from "../model/index"

export const registration = async (data: FormData) => {
    return await api.post("/auth/registration", data)
}