"use client"

import React from 'react';
import {Avatar, Button, CircularProgress, Typography} from "@mui/joy";
import Link from "next/link";
import {useGetMeQuery} from "@/entities/user/api";
import PersonIcon from "@mui/icons-material/Person";

const ProfileButton = () => {
    const accessToken: any = typeof window !== 'undefined' ? localStorage.getItem("access") : null;
    const {data, isLoading} = useGetMeQuery(accessToken)

    if (data)
        return (
            <Link href={"/profile"}>
                <div
                    className="flex gap-4 cursor-pointer border-2 border-black py-2 px-4 rounded-xl hover:border-gray/30 duration-300">
                    {isLoading ?
                        <CircularProgress/>
                        :
                        <>
                            <Typography level="h4"
                                        sx={{
                                            color: 'white',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}>{data?.data.nickname}</Typography>
                            <Avatar alt={data?.data.nickname}/>
                        </>
                    }
                </div>
            </Link>
        );
    else
        return (
            <Link href={"/auth/login"}>
                <Button startDecorator={<PersonIcon/>}>Залогиниться</Button>
            </Link>
        )
};

export default ProfileButton;