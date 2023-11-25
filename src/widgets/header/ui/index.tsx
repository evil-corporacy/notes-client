import React from 'react';
import Logo from "@/widgets/logo/ui";
import NotesLogo from "../../../../public/logos/notes-logo.svg";
import Link from "next/link";
import {Container} from "@mui/joy";
import ProfileButton from "@/widgets/profile-button/ui";

const Header = () => {

    return (
        <header
            className="h-20 z-20 fixed top-0 right-0 bg-black/90 backdrop-blur flex border-b-2 py-6 px-20 gap-3.5 border-gray/30 items-center w-full">
            <Container>
                <div className="flex justify-between">
                    <div className="flex items-center gap-x-5 text-white">
                        <div className="flex gap-5">
                            <Link href={"/"}>
                                <Logo logo={NotesLogo}/>
                            </Link>
                            {/*<Link href={"/"}>*/}
                            {/*    <Logo logo={CELogo}/>*/}
                            {/*</Link>*/}
                        </div>
                        <Link href={"/vaults"}>
                            Твои волты
                        </Link>
                        {/*<Link href={"/vaults/search"}>*/}
                        {/*    Публичные волты*/}
                        {/*</Link>*/}
                    </div>

                    <ProfileButton/>
                </div>
            </Container>
        </header>
    );
};

export default Header;