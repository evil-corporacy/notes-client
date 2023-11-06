'use client'

import React, {useState} from 'react';
import {IconButton, Input, Modal, ModalDialog, Sheet} from "@mui/joy";
import SendIcon from '@mui/icons-material/Send';
import {chatData} from "@/shared/data/chat-data";
import Message from "@/widgets/message/ai";
import {useGetChatQuery} from "@/entities/ai/api";

const AiModal = ({open, setOpen}: { open: boolean, setOpen: any }) => {
    const [question, setQuestion] = useState<string>("")
    const [chat, setChat] = useState(chatData)

    const { data, isLoading, isSuccess } = useGetChatQuery("123")
    console.log(data, isLoading, isSuccess)
    const handleSendQuestion = () => {
        console.log(question)
        const data: any = [...chat]
        data.push({role: "user", content: question})
        console.log(data)
        setChat(data)
        setQuestion("")
    }

    console.log(chat)

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <ModalDialog>
                <div className="flex flex-col gap-5">
                    <Sheet variant="outlined" color="neutral"
                           sx={{p: 2, height: 500, width: 500, overflow: "scroll", borderRadius: 10}}>
                        <div className="flex flex-col gap-2.5">
                            {chat.map((message: { role: string, content: any }, index: number) => <Message key={index}
                                                                                                           variant={message.role}
                                                                                                           content={message.content}/>)}
                        </div>
                    </Sheet>
                    <div className="flex w-full justify-between gap-5">
                        <Input variant="soft" value={question} onChange={e => setQuestion(e.target.value)} placeholder="Введите запрос" sx={{width: "100%"}}/>
                        <IconButton disabled={question.length === 0} variant="soft" color="primary" onClick={handleSendQuestion}><SendIcon/></IconButton>
                    </div>
                </div>
            </ModalDialog>
        </Modal>
    );
};

export default AiModal;