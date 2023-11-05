import {Button, Container, Input, Typography} from '@mui/joy'
import React from "react";
import {Search} from "@mui/icons-material";
import CreateVault from "@/widgets/create-vault";
import VaultList from "@/widgets/vault-list";

const Page = () => {
    const loading = false

    return (
        <main className='h-full w-full bg-black'>
            <Container>
                <div className='my-10'>
                    <div className="my-10 pt-10">
                        <Typography level='h1' sx={{color: 'white'}}>
                            Твои волты
                        </Typography>
                        <div className="flex mt-5 justify-between">
                            <div className="flex gap-4">
                                <Input placeholder="Поиск" variant="soft" endDecorator={<Search/>}/>
                                <Button>Найти</Button>
                            </div>
                            <CreateVault/>
                        </div>
                    </div>
                    <VaultList loading={loading}/>
                </div>
            </Container>
        </main>
    )
}

export default Page
