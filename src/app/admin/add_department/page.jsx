'use client'
import React, { useState } from 'react'
import Style from './page.module.css';
import ProtectedLayout from '@/components/ProtectedLayout/ProtectedLayout';
import { TextField } from '@mui/material';
import Heading from '@/components/Texts/Heading/Heading';
import CustomButton from '@/components/CustomButton/CustomButton';
import addData from '@/firebase/firestore/addData';
import { collections } from '@/utils/constant';

const page = () => {

    const [data, setData] = useState({
        name: '',
        course: '',
        total_sem: ''
    })
    const [error, setError] = useState(null)

    const handleChange = (e) => {
        let { name, value } = e.target;

        if (name === 'name') {
            value = value.toUpperCase();
        }
        setData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async () => {
        if (!data.name || !data.course || !data.total_sem) {
            setError("All fields are mandatory");
            return
        }

        const { result, error } = await addData(collections.DEPARTMENTS, data);

        if (error) {
            setError(error.message);
            return;
        }

        setData({
            name: '',
            course: '',
            total_sem: ''
        })
        alert('Department Added Successfully');


    }

    return (
        <ProtectedLayout>
            <div className={Style.container}>
                <div className={Style.main}>
                    <Heading heading='Add Department' />

                    <TextField
                        label='Name of department'
                        value={data.name}
                        onChange={handleChange}
                        name='name'
                        size='small'
                    />
                    <TextField
                        label='Course'
                        value={data.course}
                        onChange={handleChange}
                        name='course'
                        size='small'
                    />
                    <TextField
                        type='number'
                        label='Total Semesters'
                        value={data.total_sem}
                        onChange={handleChange}
                        name='total_sem'
                        size='small'
                    />

                    {error && <span style={{ color: 'red', fontSize: '12px' }}>{error}</span>}

                    <div>
                        <CustomButton
                            variant='contained'
                            color='primary'
                            onClick={handleSubmit}
                        >
                            Submit
                        </CustomButton>
                    </div>
                </div>
            </div>
        </ProtectedLayout>
    )
}

export default page