"use client"

import {useTokenRefresher} from "@/processes/refresh-token/api";
import {useEffect} from "react";

const RefreshToken = () => {

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const refreshToken = localStorage.getItem('refresh') || '';
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useTokenRefresher(refreshToken);
        }
    }, []);

    return (
        <></>
    )
};

export default RefreshToken;
