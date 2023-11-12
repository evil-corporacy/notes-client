'use client'

import React from 'react';
import {Textarea, Typography} from "@mui/joy";

const Heading3 = ({index, data, colors, readonly, handleChangeBlock}: {index: number, data: string, colors?: string[], readonly?: boolean, handleChangeBlock?: (index: number, text: string) => void   }) => {
    const handleChange = (e: any) => {
        if (handleChangeBlock)
            handleChangeBlock(index, e.target.value)
    }

    if (readonly) return <Typography
        level="h3"
        sx={{
            background: "transparent",
            border: "none",
            fontSize: "1.5rem",
            lineHeight: "2rem",
            fontWeight: "700",
            color: colors ? colors[0] : "white"
        }}>{data}</Typography>
    else
        return (
            <Textarea
                placeholder={"Заголовок 3"}
                value={data}
                onChange={handleChange}
                variant="plain"
                sx={{
                    background: "transparent",
                    border: "none",
                    fontSize: "1.5rem",
                    lineHeight: "2rem",
                    fontWeight: "700",
                    color: colors ? colors[0] : "white"
                }}
            />
        );
};

export default Heading3;