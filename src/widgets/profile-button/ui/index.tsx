import React from 'react';
import {Avatar, Typography} from "@mui/joy";
import {User} from "@/shared/interfaces";

const user: User = {
    nickname: "Леха тараканов",
    avatarURL: "../../../../public/images/thispersondoesnotexist.jpg",
    mail: "gmail@gmail.com",
    password: "12345"
}

const ProfileButton = () => {
    return (
        <div className="flex mx-auto gap-4 justify-center bg-gray py-2 rounded-xl w-64 hover:brightness-125 duration-300 cursor-pointer">
            <Avatar alt={user.nickname} src={user.avatarURL}/>
            <Typography level="h4" sx={{color: 'white', display: 'flex', alignItems: 'center'}}>{user.nickname}</Typography>
        </div>
    );
};

export default ProfileButton;