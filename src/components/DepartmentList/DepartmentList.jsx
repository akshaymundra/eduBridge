'use client'
import React, { useEffect, useState } from 'react'
import Style from "./DepartmentList.module.css";
import CustomCard from '../CustomCard/CustomCard';
import getDocument from '@/firebase/firestore/getData';
import { collections } from '@/utils/constant';

const DepartmentList = () => {

    const [data, setData] = useState(null)

    async function init() {
        const { result, error } = await getDocument(collections.DEPARTMENTS)
        if (error) {
            console.log(error)
            return;
        }
        setData(result)
    }

    useEffect(() => {
        init();
    }, [])

    return (
        <div className={Style.container}>
            {data?.map((item, index) => (
                <CustomCard key={index} data={item} />
            ))}
        </div>
    )
}

export default DepartmentList