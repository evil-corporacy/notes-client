"use client"

import React from 'react';
import {Button, Typography} from "@mui/joy";
import {useRouter} from "next/navigation";

const NotFound = () => {
    const router = useRouter()

    const goBack = () => router.back()

    return (
        <main className="h-screen bg-black gap-2.5 flex justify-center flex-col items-center">
            <h1 className="text-9xl font-bold text-yellow-700">404</h1>
            <Typography level="h3" color="warning">Страница не найдена</Typography>
            <Button onClick={goBack} variant="outlined" size="lg" color="warning">Вернуться обратно</Button>
        </main>
    );
};

export default NotFound;