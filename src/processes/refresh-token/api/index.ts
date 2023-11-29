import api from "@/features/axios";

export const tokenRefresher = async (refreshToken: string): Promise<any> => {
    const response = await api.patch('/auth/refresh', { refresh: refreshToken });

    const newAccessToken = response.data.accessToken;

    if (newAccessToken) {
        localStorage.setItem("access", newAccessToken)
        return newAccessToken
    }
}

export const refreshToken = async (refreshToken: string): Promise<any> => {
    try {
        await tokenRefresher(refreshToken)

        const refreshInterval = setInterval(async (): Promise<any> => {
            await tokenRefresher(refreshToken)
        },1000 * 10 * 60);

        return () => clearInterval(refreshInterval);
    } catch (e) {
        console.log(e)
    }
};

