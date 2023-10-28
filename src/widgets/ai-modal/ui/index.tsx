'use client'

import React from 'react';
import Modal from "@/widgets/modal/ui";
import {IconButton, Input, Typography} from "@mui/joy";
import SendIcon from '@mui/icons-material/Send';

const AiModal = ({open, setOpen}: {open: boolean, setOpen: any}) => {
    // const [answers, setAnswers] = useState()

    return (
        <Modal isOpen={open} setIsOpen={setOpen} title="Спроси ИИ">
            <div className="flex flex-col gap-5">
                <div className="bg-midnight p-4 h-80 rounded-xl border-2 border-black/30">
                    <Typography sx={{color: "white"}}>Тут будут ответы</Typography>
                </div>
                <div className="flex w-full justify-between gap-5">
                    <Input variant="soft" placeholder="Введите запрос" sx={{width: "100%"}}/>
                    <IconButton variant="soft" color="primary"><SendIcon/></IconButton>
                </div>
            </div>
        </Modal>
    );
};

export default AiModal;