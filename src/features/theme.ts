'use client'

import {extendTheme} from "@mui/joy";

export const theme = extendTheme({
    cssVarPrefix: "",
    shouldSkipGeneratingVar(keys, value) {
        return false;
    },
    components: {
        JoySkeleton: {
            defaultProps: {
                animation: 'wave',
            },
        },
    },
    colorSchemes: {
        dark: {
            palette: {
                text: {
                    primary: "var(--joy-palette-neutral-100, #F0F4F8)"
                }
            }
        }
    }
});

