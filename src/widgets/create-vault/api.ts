import api from "@/features/axios"
import {Model} from "@/widgets/create-vault/model";

export const createVault = async (data: Model) => {
    const accessToken = localStorage.getItem("access")
    const headers = {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    }
    const response = await api.post("/vaults", data, headers)
    return response
}