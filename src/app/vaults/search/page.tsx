import {Button, Container, Input} from '@mui/joy';
import React from 'react';
import {Search} from "@mui/icons-material";

const Page = () => {
    return (
        <main className="h-screen w-screen bg-black flex gap-10 flex-col justify-center items-center">
            <h1 className="text-6xl font-bold text-white">Публичные волты</h1>
            <div className="flex gap-3">
                <Input placeholder="Поиск" endDecorator={<Search/>}/>
                <Button>Найти</Button>
            </div>

            <Container>
                Чичи
            </Container>
        </main>
    );
};

export default Page;