import React from 'react';
import {Button, Container, Typography} from "@mui/joy";
import VaultCard from "@/entities/vault/ui";
import Add from "@mui/icons-material/Add";

const Loading = () => {
    const emptyArray = new Array(9).fill(0)

    return (
        <main className='h-full w-full bg-black'>
            <Container>
                <div className='my-10'>
                    <div className="my-10 pt-10">
                        <Typography level='h1' sx={{color: 'white'}}>
                            Твои волты
                        </Typography>
                        <Button startDecorator={<Add/>} loading>Создать новый волт</Button>
                    </div>
                    <div className='w-full flex flex-wrap gap-20 justify-center'>
                        {
                            emptyArray.map((item: undefined, index: number) =>
                                <VaultCard key={index} loading={true}/>
                            )
                        }
                    </div>
                </div>
            </Container>
        </main>
    )
};

export default Loading;