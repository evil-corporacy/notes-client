import React from 'react';
import NavBar from "@/widgets/nav-bar/ui";
import {Container, Typography} from "@mui/joy";
import Image from "next/image";
import notes from "@/shared/data/notes";

const Page = ({params}: {params: {id: string}}) => {
    console.log(params)

    const note = notes.find(item => item.id === params.id)

    return (
        <main className="bg-black">
            <NavBar/>
            <Image width={1000} height={300} src={note?.imageUrl} alt={note?.title}/>
            <Container>
                <Typography level="h2">{note?.title}</Typography>
            </Container>
        </main>
    );
};

export default Page;