"use client"
import {Button, Container, Divider, IconButton, Input, LinearProgress, Typography} from '@mui/joy';
import React, {useState} from 'react';
import KeyIcon from "@mui/icons-material/Key";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import {Save} from "@mui/icons-material";
import {useGetMeQuery} from "@/entities/user/api";
import {useRouter} from "next/navigation";

const Page = () => {
    const router = useRouter()
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false)
    const [canSave, setCanSave] = useState<boolean>(false)
    const [apiKey, setApiKey] = useState<string>("")
    const accessToken: any = typeof window !== 'undefined' ? localStorage.getItem("access") : null;

    if (!accessToken) router.replace("/auth/login")
    const {data, isLoading} = useGetMeQuery(accessToken)

    // const saveApiKey = () => {
    //     saveApiKey(apiKey)
    // }

    return (
        <main className="bg-black h-screen">
            <Container>
                <div className="mt-10 pt-10 flex flex-col gap-5">
                    <Typography level="h1" sx={{color: "white"}}>Настройки</Typography>
                    <Divider/>
                    <div className="flex flex-col gap-5">
                        <Typography level="h2" sx={{color: "white"}}>Основное</Typography>
                        {isLoading ?
                            <>
                                <div>
                                    <Typography level="h4" sx={{color: "white"}}>Никнейм</Typography>
                                    <LinearProgress />
                                </div>
                                <div>
                                    <Typography level="h4" sx={{color: "white"}}>E-Mail</Typography>
                                    <LinearProgress />
                                </div>
                            </>
                        :
                            <>
                                <div>
                                    <Typography level="h4" sx={{color: "white"}}>Никнейм</Typography>
                                    <Input disabled variant="soft" startDecorator={<PersonIcon/>} size="lg" value={data?.data.nickname}/>
                                </div>
                                <div>
                                    <Typography level="h4" sx={{color: "white"}}>E-Mail</Typography>
                                    <Input disabled variant="soft" startDecorator={<EmailIcon/>} size="lg" value={data?.data.email}/>
                                </div>
                            </>
                        }

                    </div>
                    <Divider/>
                    <div>
                        <div>
                            <Typography level="h4" sx={{color: "white"}}>Ключ OpenAI</Typography>
                            <div className="flex">
                                <Input
                                    type={passwordVisible ? 'text' : 'password'}
                                    startDecorator={<KeyIcon />}
                                    sx={{ width: '100%' }}
                                    variant='soft'
                                    size='lg'
                                    onChange={(e) => setApiKey(e.target.value)}
                                    value={apiKey}
                                />
                                <IconButton variant="soft" size="lg" color="neutral" sx={{marginLeft: "15px"}} onClick={() => setPasswordVisible(!passwordVisible)}>
                                    {passwordVisible ?
                                        <VisibilityIcon/>
                                        :
                                        <VisibilityOffIcon/>
                                    }
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <Button disabled={canSave} endDecorator={<Save/>}>Сохранить</Button>
                </div>
            </Container>
        </main>
    );
};

export default Page;