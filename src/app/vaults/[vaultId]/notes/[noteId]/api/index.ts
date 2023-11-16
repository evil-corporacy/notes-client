import api from "@/features/axios"

export const updateNote = async (id: string, data: { title: string | undefined, colors: string[] | undefined, content: any }) => {
    try {
        const accessToken = localStorage.getItem("access")
        const headers = {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }
        const response = await api.post(`notes/update?id=${id}`, data, headers)
        return response
    } catch (e) {
        console.log(e)
    }
}

export const getNote = async (id: string) => {
    try {
        const accessToken = localStorage.getItem("access")
        const headers = {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }
        const response = await api.get(`notes?id=${id}`, headers)
        return response
    } catch (e) {
        console.log(e)
    }
}