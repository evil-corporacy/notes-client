'use client'

import React from 'react';
import {getAll} from "@/widgets/unsplash/api";


const Unsplash = () => {

    const data = getAll()

    console.log(data)

    return (
        <div>

        </div>
    );
};

export default Unsplash;