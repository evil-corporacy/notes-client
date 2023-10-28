import React from 'react';
import {Avatar, Typography} from "@mui/joy";
import {User} from "@/shared/interfaces";
import Link from "next/link";

const user: User = {
    nickname: "Леха тараканов",
    avatarURL: "../../../../public/images/thispersondoesnotexist.jpg",
    mail: "gmail@gmail.com",
    password: "12345"
}

const ProfileButton = () => {
    return (
        <Link href="/profile">
            <div className="flex gap-4 cursor-pointer border-2 border-black py-2 px-4 rounded-xl hover:border-gray/30 duration-300">
                <Typography level="h4" sx={{color: 'white', display: 'flex', alignItems: 'center'}}>{user.nickname}</Typography>
                <Avatar alt={user.nickname} src={user.avatarURL}/>
            </div>
        </Link>
    );
};

export default ProfileButton;