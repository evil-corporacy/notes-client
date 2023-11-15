import api from "@/features/axios"
import {Model} from "@/widgets/create-vault/model";

export const createVault = async (data: Model) => {
    const response = await api.post("/vaults", data)
    return response
}