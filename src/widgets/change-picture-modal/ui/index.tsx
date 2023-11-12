'use client'

import React, {useCallback, useState} from 'react';
import {
    AspectRatio,
    Button,
    Card,
    ColorPaletteProp, FormLabel,
    Modal,
    ModalDialog,
    Snackbar, SnackbarPropsColorOverrides, Switch,
    Typography
} from "@mui/joy";
import {usePalette} from 'color-thief-react';
import {OverridableStringUnion} from "@mui/types";

const ChangePictureModal = ({handleSaveColors, open, setOpen, colors}: {
    handleChangeImage: (src: string | ArrayBuffer | null) => void,
    handleSaveColors: (newColors: string[]) => void,
    open: boolean,
    setOpen: (open: boolean) => void,
    colors: string[]
}) => {
    const [dragging, setDragging] = useState<boolean>(false)
    const [file, setFile] = useState<File>()
    const [snackBarData, setSnackBarData] = useState<{
        open: boolean,
        content: string,
        color: OverridableStringUnion<ColorPaletteProp, SnackbarPropsColorOverrides> | undefined
    }>({open: false, content: "", color: "neutral"})
    const [imageSrc, setImageSrc] = useState<any>(null);
    const [newColors, setNewColors] = useState<string[]>(colors)
    const [isBgColors, setIsBgColors] = useState<boolean>(false)

    const closeSnackBar = (time: number) => {
        time *= 1000
        setTimeout(() => setSnackBarData({...snackBarData, open: false}), time)
    }

    const { data } = usePalette(imageSrc, 3, "hex")

    const handleChangeIsBgColors = () => {
        setIsBgColors(!isBgColors)
        if (data) setNewColors(data)
    }

    const save = () => {
        // handleChangeImage(imageSrc)
        if (isBgColors) {
            const data = [
                newColors[0],
                newColors[2],
                newColors[1]
            ]
            handleSaveColors(data)
        }
        setIsBgColors(false)
        setOpen(false)
    }

    const onDrop = (files: FileList) => {
        const newFile = files[0];
        setDragging(false);

        if (newFile.type === "image/png" || newFile.type === "image/jpeg") {
            setFile(newFile);

            const reader = new FileReader();
            reader.onload = (event) => {
                const result: any = event?.target?.result ? event?.target?.result : ""
                console.log(result)
                setImageSrc(result);
            };

            reader.readAsDataURL(newFile);
        } else {
            setSnackBarData({ open: true, content: "Неверный формат файла!", color: "danger" });
            closeSnackBar(3);
        }
    };

    const handleDrop = useCallback(
        (event: React.DragEvent<HTMLDivElement>) => {
            event.preventDefault();

            const {files} = event.dataTransfer;

            if (files && files.length > 0) {
                onDrop(files);
            }
        },
        [onDrop]
    );

    const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        setDragging(true)
        event.preventDefault();
    }, []);

    const handleDragLeave = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        setDragging(false)
        event.preventDefault();
    }, []);

    const clearFile = () => {
        setFile(undefined)
    }

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <>
                <Snackbar open={snackBarData.open} color={snackBarData.color}>
                    {snackBarData.content}
                </Snackbar>
                <ModalDialog>
                    <form className="flex flex-col gap-2 justify-start">
                        <Typography level="h1">Изменение фоновой картинки</Typography>
                        <AspectRatio>
                            <Card
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                variant={dragging ? "solid" : "outlined"}
                                sx={file ? {
                                    backgroundImage: `url(${imageSrc})`,
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: "100%"
                                } : {}}
                            >
                                <Typography level="h2">{imageSrc ? "" : "Перетащите сюда картинку"}</Typography>
                            </Card>
                        </AspectRatio>
                        {
                            file ?
                                <Button variant="outlined" onClick={clearFile}>Сбросить</Button>
                                : ""
                        }
                        <FormLabel>
                            <div className="flex justify-between w-full">
                                <Typography level="body-lg">
                                    Применить цвета картинки к ноуту
                                </Typography>
                                <Switch variant="solid" onChange={handleChangeIsBgColors}/>
                            </div>
                        </FormLabel>
                        {
                            isBgColors ?
                                <div className="flex gap-5">
                                    <Button sx={{flex: 1, background: newColors[0]}}>Текст</Button>
                                    <Button sx={{flex: 1, background: newColors[1]}}>Фон</Button>
                                    <Button sx={{flex: 1, background: newColors[2]}}>Кнопки</Button>
                                </div>
                                : ""
                        }

                        <div className="flex gap-5">
                            <Button variant="outlined" sx={{flex: 1}}>Отмена</Button>
                            <Button onClick={save} disabled={!file} sx={{flex: 1}}>Сохранить</Button>
                        </div>
                    </form>
                </ModalDialog>
            </>
        </Modal>
    );
};

export default ChangePictureModal;