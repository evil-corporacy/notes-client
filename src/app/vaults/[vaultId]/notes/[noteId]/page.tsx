'use client'

import React, {useState} from 'react';
import {ButtonGroup, IconButton, Typography} from "@mui/joy";
import data from "@/shared/data/note.json";
import TextBlock from "@/widgets/text-block/ui";
import NavBar from "@/widgets/nav-bar/ui";
import Image from "next/image";
import coolImage from "@/../public/images/pawel-czerwinski-VXUhQqO8u5Q-unsplash.jpg"
import NoteEdit from "@/widgets/note-edit/ui";
import TitleIcon from "@mui/icons-material/Title";

const Page = ({params}: {params: {vaultId: string, noteId: string}}) => {
    const [note, setNote] = useState<any>(data.note.content)
    const [image, setImage] = useState<any>(coolImage)
    const title = data.note.title
    const [colors, setColors] = useState<string[]>(data.note.colors)

    const pasteInNote = (data: any) => {
        const newData = [...note, ...data]
        setNote(newData)
    }

    const handleDeleteBlock = (index: number) => {
        const newData = [...note]
        newData.splice(index, 1)
        setNote(newData)
    }

    const handleChangeBlock = (index: number, text: string) => {
        const newData: any = [...note]
        newData[index] = { ...newData[index], content: text };
        setNote(newData)
    }

    const handleAddBlock = (type: string) => {
        const newData: any = [...note]
        newData.push({type, content: ""});
        setNote(newData)
    }

    const handleSaveColors = (newColors: string[]) => {
        console.log(23, newColors)
        setColors([...newColors])
    }

    console.log(213, colors)

    const handleChangeType = (type: string, index: number) => {
        const newData = [...note]
        newData[index] = { ...newData[index], type: type };
        setNote(newData)
    }

    const handleChangeImage = (src: string | ArrayBuffer | null) => {
        setImage(src)
    }

    const types = [
        {
            title: "Заголовок первого уровня",
            type: "heading-1",
            label: "text",
            icon: "H1",
        },
        {
            title: "Заголовок второго уровня",
            type: "heading-2",
            label: "text",
            icon: "H2",
        },
        {
            title: "Заголовок третьего уровня",
            type: "heading-3",
            label: "text",
            icon: "H3"
        },
        {
            title: "Заголовок четвертого уровня",
            type: "heading-4",
            label: "text",
            icon: "H4",
        },
        {
            title: "Обычный текст",
            type: "text",
            label: "text",
            icon: <TitleIcon/>,
        },
    ]

    return (
        <main className={`bg-black flex`}>
            <div className="w-full" style={{background: colors[2]}}>
                <div className="w-full h-80 overflow-hidden relative">
                    <Image quality={75} priority={true} src={image} alt={note?.title}/>
                    <div className="absolute top-0 left-0 h-full w-full flex justify-between">
                        <div className="pr-96 pl-20 w-full">
                            <div className="flex justify-between">
                                <Typography level="h1" sx={{color: colors[1]}}>{title}</Typography>
                                <NoteEdit handleChangeImage={handleChangeImage} handleSaveColors={handleSaveColors} pasteInNote={pasteInNote} colors={colors}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-10 pr-96 pl-20">
                    {note.map((block: any, index: number) =>
                        <TextBlock index={index} handleChangeType={handleChangeType} handleChangeBlock={handleChangeBlock} handleDeleteBlock={handleDeleteBlock} key={block} block={block} colors={colors}/>
                    )}
                    <ButtonGroup>
                        {types.map((type, index: number) => <IconButton onClick={() => handleAddBlock(type.type)} key={index} sx={{background: colors[1], color: colors[2]}}>{type.icon}</IconButton>)}
                    </ButtonGroup>
                </div>
            </div>
            <NavBar params={params}/>
        </main>
    );
};

export default Page;