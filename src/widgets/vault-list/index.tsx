"use client"

import React from 'react';
import VaultCard from "@/entities/vault/ui";

const VaultList = ({loading, data}: {loading: boolean, data?: any}) => {

    const emptyArray = new Array(9).fill(0)

    console.log(data)

    return (
        <div className={`w-full flex flex-wrap gap-20 justify-start duration-400`}>
            {loading ?
                emptyArray.map((item: undefined, index: number) =>
                    <VaultCard key={index} loading={true}/>
                )
                :
                data ? data?.map((vault: any, index: number) => (
                    <VaultCard key={index} vault={vault} loading={loading}/>
                ))
            :""}
        </div>
    );
};

export default VaultList;