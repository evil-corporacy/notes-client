import api from "@/features/axios"
import {FormData} from "../model/index"
import {AxiosResponse} from "axios";

export const login = async (data: FormData) => {
    return await api.post("/auth/login", data)
}