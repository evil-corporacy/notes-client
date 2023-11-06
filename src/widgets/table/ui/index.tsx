'use client'

import React, {useState} from 'react';
import {Table, Typography} from "@mui/joy";

const TableBlock = ({table, colors, readonly}: {
    table: { header: string[], body: string[] },
    colors?: string[],
    readonly?: boolean
}) => {
    const [content, setContent] = useState(table)

    const handleHeaderChange = (e: any, index: number) => {
        const newData = content
        newData.header[index] = e.target.value
        console.log(newData)
        setContent(newData)
    }

    if (readonly) return <Table variant="outlined"
                                sx={{background: "transparent", border: colors ? colors[1] : "gray-500", color: colors ? colors[0] : "white"}}>
        <thead>
        {content.header.map((item: string, index: number) =>
            <th key={index} style={{background: colors ? colors[1] : "gray-500", color: colors ? colors[0] : "white"}}>
                <Typography className="bg-transparent p-2 rounded-xl">{item}</Typography>
            </th>
        )}
        </thead>
        <tbody>
        {content.body.map((col: any, index: number) =>
            <tr key={index}>
                {col.map((item: string, index: number) =>
                    <th key={index} style={{background: colors ? colors[1] : "gray-500", color: colors ? colors[0] : "white"}}>
                        <Typography className="bg-transparent p-2 rounded-xl">{item}</Typography>
                    </th>
                )}
            </tr>
        )}
        </tbody>
    </Table>
    else
        return (
            <Table variant="outlined" sx={{background: "transparent", border: colors ? colors[1] : "gray-500", color: colors ? colors[0] : "white"}}>
                <thead>
                {content.header.map((item: string, index: number) =>
                    <th key={index} style={{background: colors ? colors[1] : "gray-500", color: colors ? colors[0] : "white"}}>
                        <input value={item} onChange={(e) => handleHeaderChange(e, index)}
                               className="bg-transparent p-2 rounded-xl"/>
                    </th>
                )}
                </thead>
                <tbody>
                {content.body.map((col: any, index: number) =>
                    <tr key={index}>
                        {col.map((item: string, index: number) =>
                            <td key={index}>
                                <input value={item} className="bg-transparent p-2 rounded-xl"/>
                            </td>
                        )}
                    </tr>
                )}
                </tbody>
            </Table>
        );
};

export default TableBlock;