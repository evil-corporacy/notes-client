'use client'

import React, {ChangeEvent, useState} from 'react';
import {Textarea, Typography} from "@mui/joy";

const Heading2 = ({data, colors} : {data: string, colors: string[]}) => {
    const [content, setContent] = useState<string>(data)
    const handleChange = (e: any) => {
        setContent(e.target.value)
    }

    return (
        <Textarea
            value={content}
            onChange={handleChange}
            sx={{
                background: "transparent",
                border: "none",
                fontSize: "1.875rem",
                lineHeight: "2.25rem",
                fontWeight: "700",
                color: colors[0]
            }}
        />
    );
};

export default Heading2;