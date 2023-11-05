import React from 'react';
import NavBar from "@/widgets/nav-bar/ui";
import {Container, Skeleton, Typography} from "@mui/joy";

const Loading = () => {
    return (
        <main
            className='h-screen w-screen bg-black'
        >
            <NavBar loading={true}/>
            <Container>
                <div className='flex flex-col gap-y-5  pt-10'>
                    <Typography level='h1'>
                        <Skeleton>
                            Название волта
                        </Skeleton>
                    </Typography>
                </div>
            </Container>
        </main>
    );
};

export default Loading;