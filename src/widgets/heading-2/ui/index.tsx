'use client'

import React from 'react';
import {Textarea, Typography} from "@mui/joy";

const Heading2 = ({index, data, colors, readonly, handleChangeBlock}: {index: number, data: string, colors?: string[], readonly?: boolean, handleChangeBlock?: (index: number, text: string) => void  }) => {
    const handleChange = (e: any) => {
        if (handleChangeBlock)
            handleChangeBlock(index, e.target.value)
    }

    if (readonly) return <Typography
        level="h2"
        sx={{
            background: "transparent",
            border: "none",
            fontSize: "1.875rem",
            lineHeight: "2.25rem",
            fontWeight: "700",
            color: colors ? colors[0] : "white"
        }}>{data}</Typography>
    else
        return (
            <Textarea
                placeholder={"Заголовок 2"}
                value={data}
                onChange={handleChange}
                variant="plain"
                sx={{
                    background: "transparent",
                    border: "none",
                    fontSize: "1.875rem",
                    lineHeight: "2.25rem",
                    fontWeight: "700",
                    color: colors ? colors[0] : "white"
                }}
            />
        );
};

export default Heading2;