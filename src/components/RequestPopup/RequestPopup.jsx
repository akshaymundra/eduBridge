import { MenuItem, TextField } from "@mui/material";
import Style from "./RequestPopup.module.css";
import { useEffect, useState } from "react";
import { collections } from "@/utils/constant";
import Heading from "../Texts/Heading/Heading";
import CustomButton from "../CustomButton/CustomButton";
import getDocument from "@/firebase/firestore/getData";
import addData from "@/firebase/firestore/addData";

const RequestPopup = ({
    onClose
}) => {

    const [data, setData] = useState({
        fullName: '',
        departmentId: '',
        title: '',
        subject: '',
        description: '',
        semester: ''
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
        if (!data.fullName ||
            !data.departmentId ||
            !data.semester ||
            !data.subject ||
            !data.title ||
            !data.description
        ) {
            setError("All fields are required");
            return
        }

        const { error: addError, result } = await addData(collections.REQUESTS, data);
        if (addError) {
            setError(addError.message);
            return;
        }
        alert('Request sent successfully!')
        onClose();

    }


    return (
        <div className={Style.container}>
            <Heading heading="Request Material" />
            <div className={Style.main}>

                <TextField
                    name='fullName'
                    value={data.fullName}
                    onChange={handleChange}
                    size='small'
                    label='Full Name'
                    placeholder='Full Name'
                />

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
                    multiline
                    minRows={2}
                    maxRows={3}
                />
                {error && <span style={{ color: 'red', fontSize: '12px' }}>{error}</span>}

                <div>
                    <CustomButton
                        variant='contained'
                        color='primary'
                        onClick={handleSubmit}
                    >
                        Submit Request
                    </CustomButton>
                </div>
            </div>
        </div>
    )
}

export default RequestPopup