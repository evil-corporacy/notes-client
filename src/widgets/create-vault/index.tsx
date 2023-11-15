"use client"

import React, {useState} from 'react';
import {Button, Checkbox, FormLabel, Input, Modal, ModalClose, Sheet, Textarea, Typography} from "@mui/joy";
import Add from "@mui/icons-material/Add";
import {getRandom} from "@/features/get-random";
import {vaultNames} from "@/shared/data/vault-names";
import {SubmitHandler, useForm} from "react-hook-form";
import {Model} from "@/widgets/create-vault/model";
import {createVault} from "@/widgets/create-vault/api";
import {useRouter} from "next/navigation";

const CreateVault = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const router = useRouter()
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<Model>()
    const onSubmit: SubmitHandler<Model> = async (data) => {
        setLoading(true)

        try {
            const response = await createVault(data)
            setLoading(false)
            if (response.data.success) {
                const id = response.data.data.id
                router.push(id)
            }
        } catch (error) {
            setLoading(false)
            setError(true)
        }
    }

    return (
        <>
            <Button startDecorator={<Add/>} onClick={() => setOpen(true)} variant="solid">Создать новый волт</Button>
            <Modal sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} open={open}
                   onClose={() => setOpen(false)}>
                <Sheet
                    variant="outlined"
                    sx={{
                        maxWidth: 500,
                        borderRadius: 'md',
                        p: 3,
                        boxShadow: 'lg',
                    }}
                >
                    <ModalClose variant="plain" sx={{m: 1}}/>
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
                    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                        <FormLabel>
                            <Typography id="modal-desc" textColor="inherit" sx={{color: "white"}}>
                                Название
                                <Input error={watch("title")?.length > 100} aria-valuemax={100}
                                       placeholder={getRandom(vaultNames)}
                                       sx={{width: 300}} {...register("title", {required: true, maxLength: 100})}
                                       endDecorator={100 - watch("title")?.length || 100}/>
                            </Typography>
                        </FormLabel>
                        <FormLabel>
                            <Typography id="modal-desc" textColor="inherit" sx={{color: "white"}}>
                                Описание
                                <Textarea error={watch("description")?.length > 1000} aria-valuemax={1000} minRows={3}
                                          maxRows={3} sx={{width: 300}}
                                          endDecorator={1000 - watch("description")?.length || 1000}
                                          placeholder={getRandom(vaultNames)} {...register("description", {
                                    required: true,
                                    maxLength: 1000
                                })}/>
                            </Typography>
                        </FormLabel>
                        <Checkbox label="Публичный волт" {...register("isPublic", {required: true})} variant="solid"/>
                        <Button type="submit" disabled={loading}>Создать волт</Button>
                    </form>
                </Sheet>
            </Modal>
        </>
    );
};

export default CreateVault;