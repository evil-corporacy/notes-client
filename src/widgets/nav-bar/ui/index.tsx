'use client'

import React from 'react';
import {Button} from "@mui/joy";
import Logo from "@/widgets/logo/ui";
import CELogo from "../../../../public/logos/evil-corporacy-logo.svg"
import NotesLogo from "../../../../public/logos/notes-logo.svg"
import Add from '@mui/icons-material/Add';
import ProfileButton from "@/widgets/profile-button/ui";
import notes from "@/shared/data/notes";
import {Note} from "@/shared/interfaces";
import Link from "next/link";

const NavBar = () => {
    return (
        <div className="fixed border-l-2 bg-black border-gray/30 right-0 h-full w-72 flex flex-col align-center">
            <div className="flex border-b-2 py-6 gap-3.5 border-gray/30 justify-center align-center w-full">
                <Logo logo={CELogo}/>
                <Logo logo={NotesLogo}/>
            </div>
            <div className="relative align-center flex flex-col gap-3.5 py-6 px-3.5 overflow-scroll">
                {notes.map((note: Note, index: number) =>
                        <Button key={index} variant="solid" size="lg">
                            <Link href={`/notes/${note.id}`}>
                                {note.title}
                            </Link>
                        </Button>
                )}
            </div>
            <div className="relative">
                <div className="absolute w-full h-20 -top-20 right-0 left-0 bg-gradient-to-b to-gray/30 from-transparent"/>
                <div className="flex gap-3.5 flex-col py-6 px-3.5 border-t-2 border-t-gray/30 justify-center align-middle">
                    <Button size="lg" startDecorator={<Add/>}>Создать новый ноут</Button>
                    <ProfileButton/>
                </div>
            </div>
        </div>
    );
};

export default NavBar;