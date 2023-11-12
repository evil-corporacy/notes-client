'use client'

import React, {useState} from 'react';
import {Button, IconButton, Input, Modal, ModalClose, ModalDialog, Sheet, Snackbar} from "@mui/joy";
import SendIcon from '@mui/icons-material/Send';
import Message from "@/widgets/message/ai";
import api from "@/features/axios"
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";

const AiModal = ({open, setOpen, pasteInNote}: { open: boolean, setOpen: any, pasteInNote: (message: any) => void }) => {
    const [question, setQuestion] = useState<string>("")
    const [chat, setChat] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [snackBarData, setSnackBarData] = useState<{open: boolean, content: any}>({open: false, content: "Все хорошо"})

    // const { data, isLoading, isSuccess } = useGetChatQuery("123")
    const handleSendQuestion = async () => {
        const data: any = [...chat]

        try {
            data.push({role: "user", content: question})
            data.push({role: "assistant", content: ""})
            setLoading(true)
            setChat(data)
            const response = await api.post(`/ai/?id=123/`, {messages: [...chat], prompt: {role: "user", content: question}})
            if (response.data.error) return;
            data.pop()
            setChat([...data, {role: "assistant", content: response.data.answer}])
            setLoading(false)
            setQuestion("")
        }
        catch (e) {
            setSnackBarData({open: true, content: "Произошла ошибка при генерации"})
            data.shift()
            setLoading(false)
        }
    }

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <ModalDialog>
                <ModalClose />
                <Snackbar
                    open={snackBarData.open}
                    onClose={() => setOpen(false)}
                    startDecorator={<CloseIcon />}
                    endDecorator={
                        <Button
                            onClick={() => setOpen(false)}
                            size="sm"
                            variant="soft"
                            color="success"
                        >
                            Закрыть
                        </Button>
                    }
                >
                    {snackBarData.content}
                </Snackbar>
                <div className="flex flex-col gap-5">
                    <Sheet variant="outlined" color="neutral"
                           sx={{p: 2, height: 500, width: 500, overflow: "scroll", borderRadius: 10}}>
                        <div className="flex flex-col gap-2.5">
                            {chat.map((message: { role: string, content: any }, index: number) => <>
                                <Message key={index}
                                                                                                           variant={message.role}
                                                                                                           content={message.content}/>
                                {loading && index === chat.length - 1 ? <Button sx={{marginRight: 5}}>Отменить</Button> : index === chat.length - 1 ? <>
                                    <Button onClick={() => pasteInNote(message.content)} sx={{marginRight: 5}}>Вставить в ноут</Button>
                                    <Button sx={{marginRight: 5}}>Переделать</Button>
                                </> : ""
                                }
                                </>)}
                        </div>
                    </Sheet>
                    <div className="flex w-full justify-between gap-5">
                        <Input disabled={loading} variant="soft" value={question} onChange={e => setQuestion(e.target.value)} placeholder="Введите запрос" sx={{width: "100%"}}/>
                        <IconButton disabled={question.length === 0 || loading} variant="soft" color="primary" onClick={handleSendQuestion}><SendIcon/></IconButton>
                    </div>
                </div>
            </ModalDialog>
        </Modal>
    );
};

export default AiModal;