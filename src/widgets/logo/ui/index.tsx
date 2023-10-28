import React from 'react';
import Image from "next/image";

const Logo = ({logo}: {logo: any}) => {
    return (
        <div className="bg-gray p-1 h-12 w-12 flex rounded-xl cursor-pointer hover:brightness-125 duration-300">
            <Image src={logo} alt="Логотип"/>
        </div>
    );
};

export default Logo;