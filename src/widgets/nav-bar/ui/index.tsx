'use client'

import React from 'react';
import {Button, Divider} from "@mui/joy";
import Add from '@mui/icons-material/Add';
import notes from "@/shared/data/notes";
import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";

const NavBar = () => {
    return (
        <div className="relative top-0 border-l-2">
            <div className="fixed -top-0 border-l-2 bg-black border-gray/30 right-0 h-full w-72 flex flex-col align-center">
                <div className="relative align-center flex flex-col gap-3.5 pt-24 py-6 px-3.5 overflow-scroll">
                    <Button size="lg" startDecorator={<Add/>}>Создать новый ноут</Button>
                    <Divider>
                        Со звездочками
                    </Divider>
                    {notes.filter(note => note.starred).map((note: any, index: number) =>
                        <Button key={index} variant="solid" size="lg">
                            <div className="flex justify-between w-full">
                                <div/>
                                <Link href={`/notes/${note.id}`}>
                                    {note.title}
                                </Link>
                                <StarIcon color="primary"/>
                            </div>
                        </Button>
                    )}
                    <Divider>
                        Другие ноуты
                    </Divider>
                    {notes.filter(note => !note.starred).map((note: any, index: number) =>
                        <Button key={index} variant="solid" size="lg">
                            <Link href={`/notes/${note.id}`}>
                                {note.title}
                            </Link>
                        </Button>
                    )}
                    <Divider>
                        Это все
                    </Divider>
                </div>
            </div>
        </div>
    );
};

export default NavBar;