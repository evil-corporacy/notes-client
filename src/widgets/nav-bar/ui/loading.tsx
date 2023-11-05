"use client"

import React from 'react';
import {Button, Divider, Skeleton} from "@mui/joy";
import Add from "@mui/icons-material/Add";

const Loading = () => {
    const emptyArray = new Array(9).fill(0)

    return (
        <div className="relative top-0 border-l-2">
            <div
                className="fixed -top-0 border-l-2 bg-black border-gray/30 right-0 h-full w-72 flex flex-col align-center">
                <div className="relative align-center flex flex-col gap-3.5 pt-24 py-6 px-3.5 overflow-scroll">
                    <Button size="lg" startDecorator={<Add/>} loading>Создать новый ноут</Button>
                    <Divider>
                        <Skeleton>
                            Со звездочками
                        </Skeleton>
                    </Divider>
                    {emptyArray.map((note: any, index: number) =>
                        <Button loading key={index} variant="solid" size="lg" sx={{width: "100%"}}>
                            {note}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Loading;