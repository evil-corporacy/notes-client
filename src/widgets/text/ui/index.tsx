'use client'

import React, {ChangeEvent, useState} from 'react';
import {Textarea, Typography} from "@mui/joy";

const Text = ({data, colors} : {data: string, colors: string[]}) => {
    const [content, setContent] = useState<string>(data)
    const handleChange = (e: ChangeEvent) => setContent(e.target.value)

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