"use client"

import {useRouter} from "next/navigation";

export const checkAuth = () => {
    const router = useRouter()
    const accessToken = localStorage.getItem("access")
    if (!accessToken) {
        return router.replace("/auth/login")
    }
}
