// import { Vault } from '@/entities/vault/model'
import VaultCard from '@/entities/vault/ui'
import {Button, Container, Input, Typography} from '@mui/joy'
import vaults from '../../shared/data/vaults.json'
import Add from "@mui/icons-material/Add";
import React from "react";

const Page = () => {
    const loading = false

    const emptyArray = new Array(9).fill(0)

    return (
        <main className='h-full w-full bg-black'>
            <Container>
                <div className='my-10'>
                    <div className="my-10 pt-10">
                        <Typography level='h1' sx={{color: 'white'}}>
                            Твои волты
                        </Typography>
                        <div className="flex mt-5 justify-between">
                            <Input/>
                            <Button startDecorator={<Add/>} variant="solid">Создать новый волт</Button>
                        </div>
                    </div>
                    <div className='w-full flex flex-wrap gap-20 justify-center'>
                        {loading ?
                            emptyArray.map((item: undefined, index: number) =>
                                <VaultCard key={index} loading={true}/>
                            )
                            :
                            vaults.map((vault, index: number) => (
                                <VaultCard key={index} vault={vault} loading={loading}/>
                            ))}
                    </div>
                </div>
            </Container>
        </main>
    )
}

export default Page
