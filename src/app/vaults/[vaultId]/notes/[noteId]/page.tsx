import React from 'react';
import {Typography} from "@mui/joy";
import data from "@/shared/data/note.json";
import TextBlock from "@/widgets/text-block/ui";
import NavBar from "@/widgets/nav-bar/ui";
import Image from "next/image";
import coolImage from "@/../public/images/pawel-czerwinski-VXUhQqO8u5Q-unsplash.jpg"
import NoteEdit from "@/widgets/note-edit/ui";
// import {Note} from "@/entities/note/model";

const Page = () => {
    const image = coolImage
    const title = data.note.title
    const note: any = data.note.content
    const colors = data.note.colors

    return (
        <main className={`bg-black flex`}>
            <div className="w-full" style={{background: colors[2]}}>
                <div className="w-full h-80 overflow-hidden relative">
                    <Image quality={75} priority={true} src={image} alt={note?.title}/>
                    <div className="absolute top-0 left-0 h-full w-full flex justify-between">
                        <div className="pr-96 pl-20 w-full">
                            <div className="flex justify-between">
                                <Typography level="h1">{title}</Typography>
                                <NoteEdit colors={colors}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-10 pr-96 pl-20">
                    {note.map((block: any, index: number) =>
                        <TextBlock key={index} block={block} colors={colors}/>
                    )}
                </div>
            </div>
            <NavBar/>
        </main>
    );
};

export default Page;