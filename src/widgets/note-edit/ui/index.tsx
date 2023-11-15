'use client'

import React, {useState} from 'react';
import {IconButton} from "@mui/joy";
import {ColorLens, Panorama,} from "@mui/icons-material";
import PaletteModal from "@/widgets/palette-modal/ui";
import AiModal from "@/widgets/ai-modal/ui";
import ChangePictureModal from "@/widgets/change-picture-modal/ui";

const NoteEdit = ({handleChangeImage, handleSaveColors, colors, pasteInNote}: {handleChangeImage: (src: string | ArrayBuffer | null) => void, handleSaveColors: (newColors: string[]) => void, colors?: string[], pasteInNote: (message: any) => void}) => {
    const [paletteOpen, setPaletteOpen] = useState<boolean>(false)
    const [aiOpen, setAiOpen] = useState<boolean>(false)
    const [pictureOpen, setPictureOpen] = useState<boolean>(false)

    const paste = (message: any) => {
        pasteInNote(message)
        setAiOpen(false)
    }

    return (
        <>
            <PaletteModal handleSaveColors={handleSaveColors} open={paletteOpen} setOpen={setPaletteOpen} colors={colors ? colors : []}/>
            <AiModal pasteInNote={paste} open={aiOpen} setOpen={setAiOpen}/>
            <ChangePictureModal handleSaveColors={handleSaveColors} handleChangeImage={handleChangeImage} open={pictureOpen} setOpen={setPictureOpen} colors={colors ? colors : []}/>
            <div className="flex gap-2 py-2">
                <IconButton variant="solid" onClick={() => setPictureOpen(true)} sx={{background: colors ? colors[0] : "", color: colors ? colors[2] : "", width: 32, height: 32}}>
                    <Panorama/>
                </IconButton>
                <IconButton variant="solid" onClick={() => setPaletteOpen(true)} sx={{background: colors ? colors[0] : "", color: colors ? colors[2] : "", width: 32, height: 32}}>
                    <ColorLens/>
                </IconButton>
                {/*<IconButton variant="solid" onClick={() => setAiOpen(true)} sx={{background: colors[0], color: colors[2], width: 32, height: 32}}>*/}
                {/*    <BubbleChart/>*/}
                {/*</IconButton>*/}
                {/*<IconButton variant="solid" sx={{background: colors[0], color: colors[2], width: 32, height: 32}}>*/}
                {/*    <StarIcon/>*/}
                {/*</IconButton>*/}
            </div>
        </>
    );
};

export default NoteEdit;