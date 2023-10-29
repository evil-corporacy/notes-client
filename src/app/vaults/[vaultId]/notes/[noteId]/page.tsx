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
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import ChecklistIcon from "@mui/icons-material/Checklist";
import TableRowsIcon from "@mui/icons-material/TableRows";
// import {Note} from "@/entities/note/model";

const Page = ({params}: {params: {vaultId: string, noteId: string}}) => {
    const [note, setNote] = useState<any>(data.note.content)
    const image = coolImage
    const title = data.note.title
    const colors = data.note.colors
    const handleDeleteBlock = (itemToDelete: any) => {
        let newData = [...note]
        newData = newData.filter(item => item !== itemToDelete);
        setNote(newData)
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
        {
            title: "Маркированный список",
            type: "list",
            label: "list",
            icon: <FormatListBulletedIcon/>,
        },
        {
            title: "Нумерованный список",
            type: "num-list",
            label: "list",
            icon: <FormatListNumberedIcon/>,
        },
        {
            title: "Список задач",
            type: "todo-list",
            label: "todo-list",
            icon: <ChecklistIcon/>,
        },
        {
            title: "Таблица",
            type: "table",
            label: "table",
            icon: <TableRowsIcon/>,
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
                                <Typography level="h1">{title}</Typography>
                                <NoteEdit colors={colors}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-10 pr-96 pl-20">
                    {note.map((block: any, index: number) =>
                        <TextBlock index={index} handleDeleteBlock={handleDeleteBlock} key={index} block={block} colors={colors}/>
                    )}
                    <ButtonGroup>
                        {types.map((type, index: number) => <IconButton key={index} sx={{background: colors[1], color: colors[2]}}>{type.icon}</IconButton>)}
                    </ButtonGroup>
                </div>
            </div>
            <NavBar params={params}/>
        </main>
    );
};

export default Page;