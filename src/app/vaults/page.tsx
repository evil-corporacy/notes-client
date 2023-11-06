import {Button, Container, Input} from '@mui/joy'
import React from "react";
import {Search} from "@mui/icons-material";
import CreateVault from "@/widgets/create-vault";
import VaultList from "@/widgets/vault-list";

const Page = () => {
    const loading = false

    return (
        <main className='h-full w-full bg-black pb-10'>
            <Container>
                <div className='my-10'>
                    <div className="flex flex-col gap-10 pt-10 mb-10">
                        <h1 className="text-6xl font-bold text-white">Твои волты</h1>
                        <div className="flex mt-5 justify-between">
                            <div className="flex gap-4">
                                <Input placeholder="Поиск" variant="soft" endDecorator={<Search/>}/>
                                <Button>Найти</Button>
                            </div>
                            <CreateVault/>
                        </div>
                        <VaultList loading={loading}/>
                    </div>
                </div>
            </Container>
        </main>
    )
}

export default Page
