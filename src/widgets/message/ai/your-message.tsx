import {Sheet} from "@mui/joy";
import React from "react";

export const Your = ({content}: { content: any }) => {
    return (
        <Sheet variant="soft" sx={{display: "flex", flexDirection: "column", gap: 2, padding: 2, marginLeft: 5, borderRadius: 10}}>
            {content}
        </Sheet>
    );
}
