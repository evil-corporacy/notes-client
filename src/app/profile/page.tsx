'use client'

import {Container, Divider, IconButton, Input, Typography} from '@mui/joy';
import React, {useState} from 'react';
import profileData from "../../shared/data/profile.json"
import KeyIcon from "@mui/icons-material/Key";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";

const Page = () => {
    const profile = profileData
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

    return (
        <main className="bg-black h-screen">
            <Container>
                <div className="mt-10 pt-10 flex flex-col gap-5">
                    <Typography level="h1" sx={{color: "white"}}>Настройки</Typography>
                    <Divider/>
                    <div className="flex flex-col gap-5">
                        <Typography level="h2" sx={{color: "white"}}>Основное</Typography>
                        <div>
                            <Typography level="h4" sx={{color: "white"}}>Никнейм</Typography>
                            <Input variant="soft" startDecorator={<PersonIcon/>} size="lg" value={profile.nickname}/>
                        </div>
                        <div>
                            <Typography level="h4" sx={{color: "white"}}>E-Mail</Typography>
                            <Input variant="soft" startDecorator={<EmailIcon/>} size="lg" value={profile.email}/>
                        </div>
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

            </Container>
        </main>
    );
};

export default Page;