'use client'
import ProtectedLayout from '@/components/ProtectedLayout/ProtectedLayout'
import React, { useEffect, useState } from 'react'
import Style from "./page.module.css";
import { MenuItem, TextField } from '@mui/material';
import getDocument from '@/firebase/firestore/getData';
import { collections } from '@/utils/constant';
import CustomButton from '@/components/CustomButton/CustomButton';
import Heading from '@/components/Texts/Heading/Heading';
import Uploader from '@/components/NewFileUploader/Uploader';
import addData from '@/firebase/firestore/addData';

const page = () => {

    const [data, setData] = useState({
        departmentId: '',
        title: '',
        description: '',
        subject: '',
        semester: '',
        document: []
    })
    const [error, setError] = useState(null)
    const [departmentList, setDepartmentList] = useState(null);
    const [semList, setSemList] = useState(null)

    async function init() {
        const { result, error } = await getDocument(collections.DEPARTMENTS);
        if (error) {
            console.log(error);
            return;
        }
        setDepartmentList(result)
    }

    useEffect(() => {
        init()
    }, [])

    useEffect(() => {
        if (data.departmentId) {
            const n = departmentList?.filter(item => item.id === data.departmentId)[0]?.total_sem;
            const sems = [...Array(Number(n)).keys()].map(i => i + 1);
            setSemList(sems)
        }
    }, [data])

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData(prev => ({
            ...prev,
            [name]: value
        }))
    }


    const handleSubmit = async () => {
        if (
            !data.departmentId ||
            !data.description ||
            !data.document ||
            !data.semester ||
            !data.subject ||
            !data.title

        ) {
            setError("All fields are required!")
            return
        }
        const { result, error } = await addData(collections.RESOURCES, data);
        if (error) {
            console.log(error)
            setError(error)
            return;
        }
        setData({
            departmentId: '',
            title: '',
            description: '',
            subject: '',
            semester: '',
            document: []
        })
        alert("resource uploaded successfully")

    }

    return (
        <ProtectedLayout>
            <div className={Style.container}>
                <div className={Style.main}>

                    <Heading heading='Add Resource' />

                    <div className={Style.grid_container}>
                        {departmentList &&
                            <TextField
                                name='departmentId'
                                value={data.departmentId}
                                onChange={handleChange}
                                size='small'
                                label='Department'
                                select
                            >
                                {departmentList?.map((item, index) => (
                                    <MenuItem key={index} value={item.id}>{item.name} &nbsp; {item.course}</MenuItem>
                                ))}
                            </TextField>
                        }

                        <TextField
                            name='title'
                            value={data.title}
                            onChange={handleChange}
                            size='small'
                            label='Title'
                            placeholder='Enter Title'
                        />
                        <TextField
                            name='subject'
                            value={data.subject}
                            onChange={handleChange}
                            size='small'
                            label='Subject'
                            placeholder='Enter Subject'
                        />
                        <TextField
                            name='description'
                            value={data.description}
                            onChange={handleChange}
                            size='small'
                            label='Description'
                            placeholder='Enter description'
                        />
                        {semList &&
                            <TextField
                                label="Semester"
                                value={data.semester}
                                onChange={handleChange}
                                size='small'
                                name='semester'
                                select
                            >
                                {semList?.map((item, index) => (
                                    <MenuItem key={index} value={item}>{item}</MenuItem>
                                ))}
                            </TextField>
                        }
                    </div>

                    <div>
                        <Uploader name={'document'} data={data} setData={setData} />
                    </div>

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