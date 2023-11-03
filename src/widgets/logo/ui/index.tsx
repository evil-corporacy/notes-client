import React from 'react';
import Image from "next/image";

const Logo = ({logo}: {logo: any}) => {
    return (
        <Image src={logo} alt="Логотип" className="w-10"/>
    );
};

export default Logo;