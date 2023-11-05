"use client"

import React, {useEffect, useState} from 'react';
import VaultCard from "@/entities/vault/ui";
import vaults from "@/shared/data/vaults.json";

const Index = ({loading, startAnimation}: {loading: boolean, startAnimation?: boolean}) => {
    const [startAnimate, setStartAnimate] = useState<undefined | boolean>(startAnimation || false)

    useEffect(() => {
        if (startAnimation === undefined)
            setStartAnimate(true)
    }, [])

    const emptyArray = new Array(9).fill(0)

    console.log(startAnimate)

    return (
        <div className={`w-full flex flex-wrap gap-20 justify-center duration-400 ${startAnimate ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
            {loading ?
                emptyArray.map((item: undefined, index: number) =>
                    <VaultCard key={index} loading={true}/>
                )
                :
                vaults.map((vault, index: number) => (
                    <VaultCard key={index} vault={vault} loading={loading}/>
                ))}
        </div>
    );
};

export default Index;