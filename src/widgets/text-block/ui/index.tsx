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
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import ChecklistIcon from '@mui/icons-material/Checklist';
import TableRowsIcon from '@mui/icons-material/TableRows';
import {ButtonGroup, IconButton, Tooltip} from "@mui/joy";
import DeleteIcon from '@mui/icons-material/Delete';

const TextBlock = ({block, colors, readonly, handleDeleteBlock, handleChangeBlock, handleChangeType, index}: {handleDeleteBlock?: (itemToDelete: any) => void, block?: any, index?: number, colors?: string[], handleChangeType?: (type: string, index: number) => void,  readonly?: boolean, handleChangeBlock?: (index: number, text: string) => void }) => {
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
            icon: "Text",
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
                return <Heading1 index={index ? index : 0} handleChangeBlock={handleChangeBlock} data={block?.content} colors={colors} readonly={readonly}/>
            case "heading-2":
                return <Heading2 index={index ? index : 0} handleChangeBlock={handleChangeBlock} data={block?.content} colors={colors} readonly={readonly}/>
            case "heading-3":
                return <Heading3 index={index ? index : 0} handleChangeBlock={handleChangeBlock} data={block?.content} colors={colors} readonly={readonly}/>
            case "heading-4":
                return <Heading4 index={index ? index : 0} handleChangeBlock={handleChangeBlock} data={block?.content} colors={colors} readonly={readonly}/>
            case "text":
                return <Text index={index ? index : 0} handleChangeBlock={handleChangeBlock} data={block?.content} colors={colors} readonly={readonly}/>
            case "list":
                return <BasicList index={index ? index : 0} handleChangeBlock={handleChangeBlock} list={block?.list} colors={colors} readonly={readonly}/>
            case "num-list":
                return <NumList index={index ? index : 0} handleChangeBlock={handleChangeBlock} list={block?.list} colors={colors} readonly={readonly}/>
            case "todo-list":
                return <TodoList index={index ? index : 0} handleChangeBlock={handleChangeBlock} list={block?.list} colors={colors} readonly={readonly}/>
            case "table":
                return <TableBlock index={index ? index : 0} handleChangeBlock={handleChangeBlock ? handleChangeBlock : ""} table={block?.table} colors={colors} readonly={readonly}/>
            default:
                return ""
        }
    }

    const changeType = (type: string, index: number) => {
        if (handleChangeType) {
            handleChangeType(type, index)
            setType(type)
        }
    }

    if (readonly) return <div>
        {parseBlock()}
    </div>
    else return (
        <div className="relative" onMouseEnter={() => setMenuVisible(true)} onMouseLeave={() => setMenuVisible(false)}>
            <div className={`absolute -top-8 duration-300 ${menuVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <ButtonGroup variant="soft" aria-label="neutral button group" sx={{ '--ButtonGroup-radius': '40px', '--ButtonGroup-background': colors ? colors[1] : "black" }}>
                    {showTypes()?.map((item, typeIndex: number) =>
                        <Tooltip key={typeIndex} title={item.title}>
                            <IconButton sx={{background: colors ? colors[1] : "black", color: colors ? colors[2] : "white"}} onClick={() => changeType(item.type, index ? index : 0)}>
                                {item.icon}
                            </IconButton>
                    </Tooltip>)}
                    <Tooltip title="Удалить текстовый блок">
                        <IconButton color="danger" onClick={() => handleDeleteBlock ? handleDeleteBlock(index) : ""}><DeleteIcon/></IconButton>
                    </Tooltip>
                </ButtonGroup>
            </div>
            {parseBlock()}
        </div>
    )
};

export default TextBlock;