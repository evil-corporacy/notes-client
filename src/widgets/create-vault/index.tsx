"use client"

import React, {useState} from 'react';
import {Button, FormLabel, Input, Modal, ModalClose, Sheet, Textarea, Typography} from "@mui/joy";
import Add from "@mui/icons-material/Add";
import {CheckBox} from "@mui/icons-material";
import {getRandom} from "@/features/get-random";
import {vaultNames} from "@/shared/data/vault-names";

const CreateVault = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const create = () => {
        setLoading(true)
        function throwErrorAfterDelay() {
            setTimeout(() => {
                throw new Error("Ошибка после задержки в 300 миллисекунд");
            }, 300);
        }

        try {
            throwErrorAfterDelay();
        } catch (error) {
            setLoading(false)
            setError(true)
        }
    }

    return (
        <>
            <Button startDecorator={<Add/>} onClick={() => setOpen(true)} variant="solid">Создать новый волт</Button>
            <Modal sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} open={open} onClose={() => setOpen(false)}>
                <Sheet
                    variant="outlined"
                    sx={{
                        maxWidth: 500,
                        borderRadius: 'md',
                        p: 3,
                        boxShadow: 'lg',
                    }}
                >
                    <ModalClose variant="plain" sx={{ m: 1 }} />
                    <Typography
                        component="h2"
                        id="modal-title"
                        level="h4"
                        textColor="inherit"
                        fontWeight="lg"
                        mb={1}
                    >
                        Создание волта
                    </Typography>
                    <form className="flex flex-col gap-5">
                        <FormLabel>
                            <Typography id="modal-desc" textColor="inherit" sx={{color: "white"}}>
                                Название
                            <Input placeholder={getRandom(vaultNames)}/>
                            </Typography>
                        </FormLabel>
                        <FormLabel>
                            <Typography id="modal-desc" textColor="inherit" sx={{color: "white"}}>
                                Описание
                            <Textarea placeholder={getRandom(vaultNames)}/>
                            </Typography>
                        </FormLabel>
                        <FormLabel>
                            {/*<CheckBox component={<></>} label="Приватный волт" variant="solid" defaultChecked/>*/}
                            <Typography sx={{color: "white"}}>
                                Приватный волт
                            </Typography>
                        </FormLabel>
                        {/*<Button error={error} onClick={create} loading={loading}>Создать волт</Button>*/}
                    </form>
                </Sheet>
            </Modal>
        </>
    );
};

export default CreateVault;