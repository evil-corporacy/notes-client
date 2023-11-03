import React from 'react';
import {Button, Card, Skeleton, Typography} from "@mui/joy";

const Loading = () => {
    return (
        <Card
            size="lg"
            sx={{background: "black"}}
            className='relative w-80 h-80 p-3.5'
        >
            <Typography level='h1'>
                <Skeleton>
                    Название
                </Skeleton>
            </Typography>
            <Typography level='body-lg'>
                <Skeleton>
                    Lorem ipsum dolor sit amet,
                </Skeleton>
            </Typography>

            <div className='absolute flex bottom-5 gap-2.5'>
                    <Button
                        sx={{
                            flex: 1,
                            width: '230px',
                        }}
                        size='lg'
                        loading
                    >
                        Войти в волт
                    </Button>
                <Button
                    variant='solid'
                    loading
                >
                </Button>
            </div>
        </Card>
    );
};

export default Loading;