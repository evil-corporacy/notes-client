'use client'

import React, {useState} from 'react';
import {HexColorPicker} from "react-colorful";
import {Button, Modal, ModalClose, ModalDialog, Typography} from "@mui/joy";

const PaletteModal = ({handleSaveColors, open, setOpen, colors}: {handleSaveColors: (newColors: string[]) => void, open: boolean, setOpen: any, colors: string[]}) => {
    const [chosenColor, setChosenColor] = useState(0)
    const [newColors, setNewColors] = useState<string[]>(colors)
    const handleChooseColor = (index: number) => setChosenColor(index)

    const handleChangeColor = (color: string) => {
        const newData: string[] = [...newColors]
        newData[chosenColor] = color
        setNewColors(newData)
    }

    const handleSave = () => {
        handleSaveColors(newColors)
        setOpen(false)
    }

    return (
        <Modal open={open} onClose={() => setOpen(false)} title="Палитра ноута">
            <ModalDialog className="flex justify-between ">
                <ModalClose />
                <Typography level="h1">Цвета ноута</Typography>
                <HexColorPicker className="border-2 border-black/30 rounded-xl" color={colors[chosenColor]} onChange={handleChangeColor}/>
                <div className="flex flex-col gap-y-2">
                    <Button onClick={() => handleChooseColor(0)} className="p-2 rounded-xl cursor-pointer border-2 border-black/30" style={{background: newColors[0]}}>
                        Текст
                    </Button>
                    <Button onClick={() => handleChooseColor(1)} className="p-2 rounded-xl cursor-pointer border-2 border-black/30" style={{background: newColors[1]}}>
                        Кнопки
                    </Button>
                    <Button onClick={() => handleChooseColor(2)} className="p-2 rounded-xl cursor-pointer border-2 border-black/30" style={{background: newColors[2]}}>
                        Фон
                    </Button>
                    <Button size="lg" onClick={handleSave}>Сохранить</Button>
                </div>
            </ModalDialog>
        </Modal>
    );
};

export default PaletteModal;