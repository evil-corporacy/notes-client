import React from 'react';
import TextBlock from "@/widgets/text-block/ui";
import {CircularProgress, Sheet, Typography} from '@mui/joy';

const CompanionMessage = ({content}: {content: any}) => {
    const blocks = content ? JSON.parse(content) : undefined

    if (content)
    return (
        <Sheet variant="outlined" sx={{display: "flex", flexDirection: "column", gap: 2, padding: 2, marginRight: 5, borderRadius: 10}}>
            {blocks.map((block: any, index: number) => <TextBlock key={index} readonly={true} block={block}/>)}
        </Sheet>
    )
    else
        return <Sheet variant="outlined" sx={{display: "flex", flexDirection: "column", gap: 2, padding: 2, marginRight: 5, borderRadius: 10, alignItems: "center"}}>
            <Typography level="h2">Генерирую ответ...</Typography>
            <CircularProgress/>
        </Sheet>
};

export default CompanionMessage;