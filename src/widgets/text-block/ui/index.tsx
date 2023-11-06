'use client'

import React, {useState} from 'react';
import Heading1 from "@/widgets/heading-1/ui";
import Heading2 from '@/widgets/heading-2/ui';
import Heading3 from "@/widgets/heading-3/ui";
import Heading4 from '@/widgets/heading-4/ui';
import Text from "@/widgets/text/ui";
import BasicList from "@/widgets/basic-list/ui";
import NumList from "@/widgets/num-list/ui";
import TodoList from "@/widgets/todo-list/ui";
import TableBlock from "@/widgets/table/ui";
import TitleIcon from '@mui/icons-material/Title';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import ChecklistIcon from '@mui/icons-material/Checklist';
import TableRowsIcon from '@mui/icons-material/TableRows';
import {ButtonGroup, IconButton, Tooltip} from "@mui/joy";
import DeleteIcon from '@mui/icons-material/Delete';

const TextBlock = ({block, colors, readonly, handleDeleteBlock}: {handleDeleteBlock?: (itemToDelete: any) => void, block?: any, index?: number, colors?: string[], readonly?: boolean }) => {
    const [menuVisible, setMenuVisible] = useState<boolean>(false)
    const [type, setType] = useState(block?.type)

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

    const showTypes = () => {
        switch (type) {
            case "heading-1":
                return types.filter(type => type.label === "text")
            case "heading-2":
                return types.filter(type => type.label === "text")
            case "heading-3":
                return types.filter(type => type.label === "text")
            case "heading-4":
                return types.filter(type => type.label === "text")
            case "text":
                return types.filter(type => type.label === "text")
            case "list":
                return types.filter(type => type.label === "list")
            case "num-list":
                return types.filter(type => type.label === "list")
            case "todo-list":
                return types.filter(type => type.label === "todo-list")
            case "table":
                return types.filter(type => type.label === "table")
        }
    }

    const parseBlock = () => {
        switch (type) {
            case "heading-1":
                return <Heading1 data={block?.content} colors={colors} readonly={readonly}/>
            case "heading-2":
                return <Heading2 data={block?.content} colors={colors} readonly={readonly}/>
            case "heading-3":
                return <Heading3 data={block?.content} colors={colors} readonly={readonly}/>
            case "heading-4":
                return <Heading4 data={block?.content} colors={colors} readonly={readonly}/>
            case "text":
                return <Text data={block?.content} colors={colors} readonly={readonly}/>
            case "list":
                return <BasicList list={block?.list} colors={colors} readonly={readonly}/>
            case "num-list":
                return <NumList list={block?.list} colors={colors} readonly={readonly}/>
            case "todo-list":
                return <TodoList list={block?.list} colors={colors} readonly={readonly}/>
            case "table":
                return <TableBlock table={block?.table} colors={colors} readonly={readonly}/>
            default:
                return ""
        }
    }

    const handleChangeType = (type: string) => setType(type)

    if (readonly) return <div>
        {parseBlock()}
    </div>
    else return (
        <div className="relative" onMouseEnter={() => setMenuVisible(true)} onMouseLeave={() => setMenuVisible(false)}>
            <div className={`absolute -top-8 duration-300 ${menuVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <ButtonGroup variant="soft" aria-label="neutral button group" sx={{ '--ButtonGroup-radius': '40px', '--ButtonGroup-background': "black" }}>
                    {showTypes()?.map((item, index: number) =>
                        <Tooltip key={index} title={item.title}>
                            <IconButton onClick={() => handleChangeType(item.type)}>
                                {item.icon}
                            </IconButton>
                    </Tooltip>)}
                    <Tooltip title="Удалить текстовый блок">
                        <IconButton color="danger" onClick={() => handleDeleteBlock ? handleDeleteBlock(block) : console.log(block)}><DeleteIcon/></IconButton>
                    </Tooltip>
                </ButtonGroup>
            </div>
            {/*{index}*/}
            {parseBlock()}
        </div>
    )
};

export default TextBlock;