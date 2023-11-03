import React from 'react';
import {Button, Card, IconButton, Typography} from "@mui/joy";
import Link from "next/link";
import LockIcon from "@mui/icons-material/Lock";

const Main = ({vault}: {vault: any}) => {
    return (
        <Card
            size="lg"
            className='relative w-80 h-80 p-3.5'
            style={{ background: vault.colors[2] }}
        >
            <Typography level='h1' sx={{ color: vault?.colors[0] }}>
                {vault.title}
            </Typography>
            <Typography level='body-lg' sx={{ color: vault.colors[0] }}>
                {vault.description}
            </Typography>

            <div className='absolute flex bottom-5 gap-2.5'>
                <Link href={`/vaults/${vault.id}`}>
                    <Button
                        sx={{
                            flex: 1,
                            background: vault.colors[1],
                            color: vault.colors[0],
                            width: '230px',
                        }}
                        size='lg'
                    >
                        Войти в волт
                    </Button>
                </Link>
                <IconButton
                    variant='solid'
                    sx={{
                        background: vault.colors[1],
                        color: vault.colors[2],
                    }}
                >
                    <LockIcon />
                </IconButton>
            </div>
        </Card>
    )
};

export default Main;