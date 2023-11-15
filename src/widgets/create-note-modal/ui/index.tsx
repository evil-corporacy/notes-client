"use client"

import {Button, Input, Modal, ModalClose, ModalDialog, Typography} from "@mui/joy";
import {useState} from "react";
import api from "@/features/axios"
import {useRouter} from "next/navigation";

export const CreateNoteModal = ({open, setOpen, vaultId}: {open: boolean, setOpen: (open: boolean) => void, vaultId: string | undefined}) => {
    const [title, setTitle] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()
    const createNote = async () => {
        try {
            setLoading(true)
            const data = {
                title
            }
            const accessToken = localStorage.getItem("access")
            const headers = {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }
            const response = await api.post(`/notes?vault_id=${vaultId}`, data, headers)
            setLoading(false)
            if (response.data.success) {
                router.push(`/vaults/${vaultId}/notes/${response.data.data.id}`)
            }
        }
        catch (e) {
            setLoading(false)
            console.log(e)
        }
    }

    return (
        <Modal open={open} onClose={() => setOpen(false)} title="Палитра ноута">
            <ModalDialog className="flex justify-between ">
                <ModalClose />
                <Typography level="h1">Создать ноут</Typography>
                <div>
                    <Typography level="h4" sx={{color: "white"}}>Название ноута</Typography>
                    <Input variant="soft" value={title} onChange={e => setTitle(e.target.value)} size="lg" placeholder="Лучший ноут"/>
                </div>
                <Button disabled={loading} onClick={createNote}>Создать</Button>
            </ModalDialog>
        </Modal>
    );
}