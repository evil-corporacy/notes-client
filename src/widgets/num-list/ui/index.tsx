'use client'

import React, {useState} from 'react';
import {List, ListItem, ListItemDecorator, Textarea} from "@mui/joy";

const NumList = ({list, colors} : {list: string[], colors: string[]}) => {
    const [content, setContent] = useState<string[]>(list)
    // const handleChange = (e: ChangeEvent<HTMLInputElement>) => setContent(e.target.value)

    const handleChange = (e: any, index: number) => {
        const newData = [...content]
        newData[index] = e.target.value
        console.log(newData)
        setContent(newData)
    }

    return (
        <div className={`relative py-2 px-4 rounded-xl hover:bg-${colors[0]}/30 cursor-pointer duration-300`}>
            <List>{content.map((element: string, index: number) =>
                <ListItem key={index} sx={{color: colors[0], position: "relative"}}><ListItemDecorator>{index + 1}.</ListItemDecorator>
                    <Textarea
                        value={element}
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

export default NumList;