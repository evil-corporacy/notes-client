'use client'

import React, {ReactNode} from 'react';
import {IconButton, Typography} from "@mui/joy";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";

const Modal = ({children, isOpen, setIsOpen, title}: {children: ReactNode, isOpen: boolean, setIsOpen: any, title: string}) => {
    const close = () => setIsOpen(false)

    if (isOpen)
        return (
            <div className="fixed top-0 right-0 w-screen h-screen z-10 bg-black/30 backdrop-blur flex justify-center items-center">
                <div className="bg-gray w-96 py-2 px-4 rounded-2xl border-2 border-midnight/30 text-white">
                    <div className="flex justify-between">
                        <Typography level="h1" sx={{color: "white"}}>{title}</Typography>
                        <IconButton onClick={close} variant="solid" sx={{width: 32, height: 32}}><CloseIcon/></IconButton>
                    </div>
                    {children}
                </div>
            </div>
        );
    else return ""
};

export default Modal;