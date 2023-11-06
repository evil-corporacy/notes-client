'use client'

import React, {useState} from 'react';
import {Textarea, Typography} from "@mui/joy";

const Heading1 = ({data, colors, readonly}: { data: string, colors?: string[], readonly?: boolean }) => {
    const [content, setContent] = useState<string>(data)
    const handleChange = (e: any) => {
        setContent(e.target.value)
    }

    if (readonly) return <Typography
        level="h1"
        sx={{
            background: "transparent",
            border: "none",
            fontSize: "2.25rem",
            lineHeight: "2.5rem",
            fontWeight: "700",
            color: colors ? colors[0] : "white"
        }}>
        {content}
    </Typography>
    else return (
        <Textarea
            value={content}
            onChange={handleChange}
            sx={{
                background: "transparent",
                border: "none",
                fontSize: "2.25rem",
                lineHeight: "2.5rem",
                fontWeight: "700",
                color: colors ? colors[0] : "white"
            }}
        />
    );
};

export default Heading1;