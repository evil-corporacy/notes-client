import {Button, Container, Input} from '@mui/joy';
import React from 'react';
import {Search} from "@mui/icons-material";
import VaultList from "@/widgets/vault-list";

const Page = () => {
    return (
        <main className="h-min-screen w-screen bg-black flex gap-10 flex-col ">
            <Container>
                <div className="flex flex-col gap-10 mt-10">
                    <h1 className="text-6xl font-bold text-white">Публичные волты</h1>
                    <div className="flex gap-3">
                        <Input placeholder="Поиск" endDecorator={<Search/>}/>
                        <Button>Найти</Button>
                    </div>
                    <VaultList loading={false}/>
                </div>
            </Container>
        </main>
    );
};

export default Page;