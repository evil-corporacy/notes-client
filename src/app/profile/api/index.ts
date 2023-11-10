import api from "@/features/axios"

export const useGetApiKey = async () => {
    const data = await api.get("/apikeys/")
    console.log(data)
}

export const useSaveApiKey = async (key: string) => {
    const data = await api.post("/apikeys/", {key})
    console.log(data)
}