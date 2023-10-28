'use client'

import React, {useState} from 'react';
import {Table} from "@mui/joy";

const TableBlock = ({table, colors}: {table: {header: string[], body: string[] }, colors: string[]}) => {
    const [content, setContent] = useState(table)

    const handleHeaderChange = (e: any, index: number) => {
        const newData = content
        newData.header[index] = e.target.value
        console.log(newData)
        setContent(newData)
    }

    return (
        <Table variant="outlined" sx={{background: "transparent", border: colors[1], color: colors[0]}}>
            <thead>
            {content.header.map((item: string, index: number) =>
                <th key={index} style={{background: colors[1], color: colors[0]}}>
                    <input value={item} onChange={(e) => handleHeaderChange(e, index)} className="bg-transparent p-2 rounded-xl"/>
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