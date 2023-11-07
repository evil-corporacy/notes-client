'use client'

import React, {useState} from 'react';
import {IconButton} from "@mui/joy";
import {BubbleChart, ColorLens, } from "@mui/icons-material";
import StarIcon from '@mui/icons-material/Star';
import PaletteModal from "@/widgets/palette-modal/ui";
import AiModal from "@/widgets/ai-modal/ui";

const NoteEdit = ({colors, pasteInNote}: {colors: string[], pasteInNote: (message: any) => void}) => {
    const [paletteOpen, setPaletteOpen] = useState<boolean>(false)
    const [aiOpen, setAiOpen] = useState<boolean>(false)

    const paste = (message: any) => {
        pasteInNote(message)
        setAiOpen(false)
    }

    return (
        <>
            <PaletteModal open={paletteOpen} setOpen={setPaletteOpen} colors={colors}/>
            <AiModal pasteInNote={paste} open={aiOpen} setOpen={setAiOpen}/>
            <div className="flex gap-2 py-2">
                <IconButton variant="solid" onClick={() => setPaletteOpen(true)} sx={{background: colors[0], color: colors[2], width: 32, height: 32}}>
                    <ColorLens/>
                </IconButton>
                <IconButton variant="solid" onClick={() => setAiOpen(true)} sx={{background: colors[0], color: colors[2], width: 32, height: 32}}>
                    <BubbleChart/>
                </IconButton>
                <IconButton variant="solid" sx={{background: colors[0], color: colors[2], width: 32, height: 32}}>
                    <StarIcon/>
                </IconButton>
            </div>
        </>
    );
};

export default NoteEdit;