'use client'

import React, {useState} from 'react';
import {Textarea, Typography} from "@mui/joy";

const Text = ({data, colors, readonly}: { data: any, colors?: string[], readonly?: boolean }) => {
    const [content, setContent] = useState<string>(data)
    const handleChange = (e: any) => setContent(e.target.value)

    if (readonly) return <Typography level="body-lg" sx={{
        background: "transparent",
        border: "none",
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
        fontWeight: "500",
        color: colors ? colors[0] : "white"
    }}>
        {content}
    </Typography>
    else
        return (
            <Textarea
                value={content}
                onChange={handleChange}
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