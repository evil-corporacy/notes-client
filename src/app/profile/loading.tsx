import React from 'react';
import {CircularProgress} from "@mui/joy";

const Loading = () => {
    return (
        <main className="h-screen flex justify-center items-center">
            <CircularProgress/>
        </main>
    );
};

export default Loading;