'use client'

import React from 'react';
import {Textarea, Typography} from "@mui/joy";

const Text = ({index, data, colors, readonly, handleChangeBlock}: {index: number, data: any, colors?: string[], readonly?: boolean, handleChangeBlock?: (index: number, text: string) => void   }) => {
    const handleChange = (e: any) => {
        if (handleChangeBlock)
            handleChangeBlock(index, e.target.value)
    }

    if (readonly) return <Typography level="body-lg" sx={{
        background: "transparent",
        border: "none",
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
        fontWeight: "500",
        color: colors ? colors[0] : "white"
    }}>
        {data}
    </Typography>
    else
        return (
            <Textarea
                placeholder={"Просто текст"}
                value={data}
                onChange={handleChange}
                variant="plain"
                sx={{
                    background: "transparent",
                    border: "none",
                    fontSize: "1.125rem",
                    lineHeight: "1.75rem",
                    fontWeight: "500",
                    color: colors ? colors[0] : "white"
                }}
            />
        );
};

export default Text;