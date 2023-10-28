'use client'

import React, {useState} from 'react';
import {Checkbox, List, ListItem, ListItemDecorator, Textarea} from "@mui/joy";

const TodoList = ({list, colors}: { list: string[], colors: string[] }) => {
    const [content, setContent] = useState<any>(list)
    // const handleChange = (e: ChangeEvent<HTMLInputElement>) => setContent(e.target.value)

    const handleChange = (e: any, index: number) => {
        const newData = [...content]
        newData[index] = e.target.value
        setContent(newData)
    }

    const handleCheckboxChange = (e: any, index: number) => {
        const newData = [...content]
        console.log(e.target.checked)
        newData[index].done = e.target.checked
        setContent(newData)
    }

    console.log(list)

    return (
        <div className={`relative py-2 px-4 rounded-xl hover:bg-${colors[0]}/30 cursor-pointer duration-300`}>
            <List>{content.map((element: any, index: number) =>
                <ListItem key={index} sx={{color: colors[0], position: "relative"}}>
                    <ListItemDecorator>
                        <Checkbox
                            onChange={(e: any) => handleCheckboxChange(e, index)}
                            checked={element.done}
                            />
                    </ListItemDecorator>
                    <Textarea
                        value={element.content}
                        onChange={(e: any) => handleChange(e, index)}
                        sx={{
                            width: "100%",
                            background: "transparent",
                            border: "none",
                            fontSize: "1.125rem",
                            lineHeight: "1.75rem",
                            fontWeight: "700",
                            color: colors[0]
                        }}
                    />
                </ListItem>)}
            </List>
        </div>
    );
};

export default TodoList;