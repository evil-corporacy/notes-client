"use client"

import React from 'react';
import VaultCard from "@/entities/vault/ui";
import vaults from "@/shared/data/vaults.json";
import {Vault} from "@/entities/vault/model";

const VaultList = ({loading, data}: {loading: boolean, data?: Vault[]}) => {

    const emptyArray = new Array(9).fill(0)

    console.log(data)

    return (
        <div className={`w-full flex flex-wrap gap-20 justify-start duration-400`}>
            {loading ?
                emptyArray.map((item: undefined, index: number) =>
                    <VaultCard key={index} loading={true}/>
                )
                :
                data?.map((vault, index: number) => (
                    <VaultCard key={index} vault={vault} loading={loading}/>
                ))}
        </div>
    );
};

export default VaultList;