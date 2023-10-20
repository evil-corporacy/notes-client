'use client'

import {extendTheme} from "@mui/joy";

export const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    solidBg: '#000',
                    solidHoverBg: '#555E68',
                    solidActiveBg: '#fff',
                    solidDisabledBg: '#F3F2F1',
                    solidDisabledColor: '#A19F9D',
                },
                neutral: {
                    outlinedBg: '#fff',
                    outlinedColor: '#201F1E',
                    outlinedDisabledBg: '#F3F2F1',
                    outlinedDisabledColor: '#A19F9D',
                    outlinedDisabledBorder: '#C8C6C4',
                    outlinedBorder: '#8A8886',
                    outlinedHoverBg: '#F3F2F1',
                    outlinedHoverBorder: undefined,
                    outlinedActiveBg: '#EDEBE9',
                },
                focusVisible: '#323130',
            },
        }
    }
});

