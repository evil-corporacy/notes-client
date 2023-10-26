import React from 'react';
import {Container} from "@mui/joy";
import data from "@/shared/data/note.json";
import TextBlock from "@/widgets/text-block/ui";

const Page = ({params}: {params: {id: string}}) => {
    const note = data.note.content
    const colors = data.note.colors

    return (
        <main className={`bg-[${colors[2]}]`}>
            {/*<NavBar/>*/}
            {/*<Image width={1000} height={300} src={note?.imageUrl} alt={note?.title}/>*/}
            <Container>
                {note.map((block, index: number) =>
                    <TextBlock key={index} block={block} colors={colors}/>
                )}
            </Container>
        </main>
    );
};

export default Page;