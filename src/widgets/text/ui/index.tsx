'use client'

import React, {useState} from 'react';
import {Textarea} from "@mui/joy";

const Text = ({data, colors} : {data: any, colors: string[]}) => {
    const [content, setContent] = useState<string>(data)
    const handleChange = (e: any) => setContent(e.target.value)

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
                color: colors[0]
            }}
        />
    );
};

export default Text;