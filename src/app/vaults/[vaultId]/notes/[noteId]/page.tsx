'use client'

import React, {useEffect, useState} from 'react';
import {ButtonGroup, CircularProgress, IconButton, Typography} from "@mui/joy";
import TextBlock from "@/widgets/text-block/ui";
import NavBar from "@/widgets/nav-bar/ui";
import NoteEdit from "@/widgets/note-edit/ui";
import {useGetNoteByIdQuery} from "@/entities/note/api";
import {updateNote} from "@/app/vaults/[vaultId]/notes/[noteId]/api";
import {checkAuth} from "@/features/check-auth";

const Page = ({params}: {params: {vaultId: string, noteId: string}}) => {
    checkAuth()

    const [image, setImage] = useState<any>("http://localhost/media/backgrounds/cai-fang-xZgwNbcLBWM-unsplash.jpg");

    const {data} = useGetNoteByIdQuery(params.noteId)
    const [note, setNote] = useState<any>()
    const [title, setTitle] = useState<string | undefined>("")
    const [colors, setColors] = useState<string[] | undefined>()

    useEffect(() => {
        setColors(data?.colors)
        setNote(data?.content)
        setTitle(data?.title)
    }, [data])


    const pasteInNote = (data: any) => {
        const newData = [...note, ...data]
        setNote(newData)
    }

    const handleDeleteBlock = (index: number) => {
        const newData = [...note]
        newData.splice(index, 1)
        setNote(newData)
        updateNote(params.noteId, {title, colors, content: note}).then(r => console.log(r))
    }

    const handleChangeBlock = (index: number, text: string) => {
        const newData: any = [...note]
        newData[index] = { ...newData[index], content: text };
        setNote(newData)
        updateNote(params.noteId, {title, colors, content: newData}).then(r => console.log(r))
    }

    const handleAddBlock = (type: string) => {
        const newData: any = [...note]
        newData.push({type, content: ""});
        setNote(newData)
        updateNote(params.noteId, {title, colors, content: newData}).then(r => console.log(r))
    }

    const handleSaveColors = (newColors: string[]) => {
        setColors([...newColors])
        updateNote(params.noteId, {title, colors: newColors, content: note}).then(r => console.log(r))
    }

    const handleChangeType = (type: string, index: number) => {
        const newData = [...note]
        newData[index] = { ...newData[index], type: type };
        setNote(newData)
        updateNote(params.noteId, {title, colors, content: newData}).then(r => console.log(r))
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
            icon: "Text",
        },
    ]

    if (!data)
        return (
            <main className="w-screen h-screen flex justify-center items-center">
                <CircularProgress/>
            </main>
        )
    else
    return (
        <main className={`bg-black flex min-h-screen`}>
            <div className="w-full" style={{background: colors ? colors[2] : "#000000"}}>
                <div className="w-full h-12 overflow-hidden relative">
                    {/*<Image quality={75} priority={true} src={image} width={1640} height={300} alt={"Фоновая картинка"}/>*/}
                    <div className="absolute top-0 left-0 h-full w-full flex justify-between">
                        <div className="pr-96 pl-20 w-full">
                            <div className="flex justify-between">
                                <Typography level="h1" sx={{color:  colors ? colors[1] : "#FFFFFF"}}>{title}</Typography>
                                <NoteEdit handleChangeImage={handleChangeImage} handleSaveColors={handleSaveColors} pasteInNote={pasteInNote} colors={colors}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-10 pr-96 pl-20">
                    {note ? note.map((block: any, index: number) =>
                        <TextBlock index={index} handleChangeType={handleChangeType} handleChangeBlock={handleChangeBlock} handleDeleteBlock={handleDeleteBlock} key={block} block={block} colors={colors}/>
                    ) : ""}
                    <div className="w-full mt-2 opacity-0 duration-300 hover:opacity-100">
                        <ButtonGroup>
                            {types.map((type, index: number) => <IconButton onClick={() => handleAddBlock(type.type)} key={index} sx={{background: colors ? colors[1] : "#FFFFFF", color: colors ? colors[2] : "#000000"}}>{type.icon}</IconButton>)}
                        </ButtonGroup>
                    </div>
                </div>
            </div>
            <NavBar params={params}/>
        </main>
    );
};

export default Page;