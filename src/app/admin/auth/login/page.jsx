'use client'
import Signin from "@/firebase/Authentication/Signin"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Style from './page.module.css';
import { TextField } from "@mui/material";
import CustomButton from "@/components/CustomButton/CustomButton";
import Heading from "@/components/Texts/Heading/Heading";

const Page = () => {

    const [loginError, setLoginError] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async () => {

        if (!data.email || !data.password) {
            setLoginError("All fields are mandatory");
            return;
        }
        setLoading(true)
        const { user, error } = await Signin(data.email, data.password);
        setLoading(false)
        if (error) {
            // console.log('something went wront')
            console.log(error)
            setLoginError('Email or password is invalid!')
            return;
        }
        setTimeout(() => {
            router.push('/admin');
        }, 200);
    }

    return (
        <div className={Style.container}>
            <div className={Style.main}>

                <Heading heading="Admin Login" />

                <TextField
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    label='Email'
                    placeholder="example@gmail.com"
                    size="small"
                />
                <TextField
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    label='Password'
                    size="small"
                />

                {loginError && <span style={{ color: 'red', fontSize: '12px' }}>{loginError}</span>}
                <div>
                    <CustomButton
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                    >
                        {loading ? 'loading...' : 'Login'}
                    </CustomButton>
                </div>
            </div>
        </div>
    )
}

export default Page