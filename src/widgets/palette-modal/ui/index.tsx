'use client'

import React, {useState} from 'react';
import Modal from "@/widgets/modal/ui";
import {HexColorPicker} from "react-colorful";
import {Button} from "@mui/joy";

const PaletteModal = ({open, setOpen, colors}: {open: boolean, setOpen: any, colors: string[]}) => {
    const [chosenColor, setChosenColor] = useState(0)
    const [newColors, setNewColors] = useState<string[]>(colors)
    const handleChooseColor = (index: number) => setChosenColor(index)

    const handleChangeColor = (color: string) => {
        const newData: string[] = [...newColors]
        newData[chosenColor] = color
        setNewColors(newData)
    }

    return (
        <Modal isOpen={open} setIsOpen={setOpen} title="Палитра ноута">
            <div className="flex justify-between ">
                <HexColorPicker className="border-2 border-black/30 rounded-xl" color={colors[chosenColor]} onChange={handleChangeColor}/>
                <div className="flex flex-col gap-y-2">
                    <button onClick={() => handleChooseColor(0)} className="p-2 rounded-xl cursor-pointer border-2 border-black/30" style={{background: newColors[0]}}>
                        Текст
                    </button>
                    <button onClick={() => handleChooseColor(1)} className="p-2 rounded-xl cursor-pointer border-2 border-black/30" style={{background: newColors[1]}}>
                        Кнопки
                    </button>
                    <button onClick={() => handleChooseColor(2)} className="p-2 rounded-xl cursor-pointer border-2 border-black/30" style={{background: newColors[2]}}>
                        Фон
                    </button>
                    <div className="mt-auto">
                        <Button>Сохранить</Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default PaletteModal;