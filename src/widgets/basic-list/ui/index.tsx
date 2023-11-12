'use client'

import React, {useState} from 'react';
import {List, ListItem, ListItemDecorator, Textarea, Typography} from "@mui/joy";

const BasicList = ({list, colors, readonly}: {index: number, list: string[], colors?: string[], readonly?: boolean, handleChangeBlock?: (index: number, text: string) => void   }) => {
    const [content, setContent] = useState<string[]>(list)
    // const handleChange = (e: ChangeEvent<HTMLInputElement>) => setContent(e.target.value)

    const handleChange = (e: any, index: number) => {
        const newData = [...content]
        newData[index] = e.target.value
        setContent(newData)
    }

    if (readonly) return <div
        className={`relative py-2 px-4 rounded-xl hover:bg-${colors ? colors[0] : "white"}/30 cursor-pointer duration-300`}>
        <List>{content.map((element: string, index: number) =>
            <ListItem key={index} sx={{color: colors ? colors[0] : "white", position: "relative"}}><ListItemDecorator>•</ListItemDecorator>
                <Typography
                    sx={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        fontSize: "1.125rem",
                        lineHeight: "1.75rem",
                        fontWeight: "700",
                        color: colors ? colors[0] : "white"
                    }}
                >{element}</Typography>
            </ListItem>)}
        </List>
    </div>
    else
        return (
            <div className={`relative py-2 px-4 rounded-xl hover:bg-${colors ? colors[0] : "white"}/30 cursor-pointer duration-300`}>
                <List>{content.map((element: string, index: number) =>
                    <ListItem key={index}
                              sx={{color: colors ? colors[0] : "white", position: "relative"}}><ListItemDecorator>•</ListItemDecorator>
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
                                color: colors ? colors[0] : "white"
                            }}
                        />
                    </ListItem>)}
                </List>
            </div>
        );
};

export default BasicList;