import React from 'react';
import {Container, Tooltip} from "@mui/joy";

const Footer = () => {
    const date = new Date()

    return (
        <footer className="py-6 border-t-2 border-t-gray/30">
            <Container>
                <Tooltip variant="soft" placement="top-start" title="Безумцы землю ногами крутят">
                    <h1 className="text-white font-bold text-xl">Продукт Корпорации Зла {date.getFullYear()}</h1>
                </Tooltip>
            </Container>
        </footer>
    );
};

export default Footer;