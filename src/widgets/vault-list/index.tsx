"use client"

import React from 'react';
import VaultCard from "@/entities/vault/ui";
import vaults from "@/shared/data/vaults.json";

const Index = ({loading}: {loading: boolean}) => {

    const emptyArray = new Array(9).fill(0)

    return (
        <div className={`w-full flex flex-wrap gap-20 justify-center duration-400`}>
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