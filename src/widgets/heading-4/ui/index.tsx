'use client'

import React from 'react';
import {Textarea, Typography} from "@mui/joy";

const Heading4 = ({index, data, colors, readonly, handleChangeBlock}: {index: number, data: string, colors?: string[], readonly?: boolean, handleChangeBlock?: (index: number, text: string) => void   }) => {
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
                placeholder={"Заголовок 4"}
                value={data}
                onChange={handleChange}
                variant="plain"
                sx={{
                    background: "transparent",
                    border: "none",
                    fontSize: "1.25rem",
                    lineHeight: "1.75rem",
                    fontWeight: "700",
                    color: colors ? colors[0] : "white"
                }}
            />
        );
};

export default Heading4;