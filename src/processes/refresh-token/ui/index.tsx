"use client"

import {refreshToken} from "@/processes/refresh-token/api";
import {useEffect} from "react";

const RefreshToken = () => {

    function refresh() {
        if (typeof window !== 'undefined' && window.localStorage) {
            const token: any = typeof window !== 'undefined' ? localStorage.getItem("refresh") : null;
            refreshToken(token).then(r => console.log(r))
        }
    }

    useEffect(() => {
        refresh()
    }, []);

    return (
        <></>
    )
};

export default RefreshToken;
