'use client'
import CustomButton from "@/components/CustomButton/CustomButton"
import ProtectedLayout from "@/components/ProtectedLayout/ProtectedLayout"
import Heading from "@/components/Texts/Heading/Heading"
import SignOut from "@/firebase/Authentication/Signout"
import Style from './page.module.css';
import { useRouter } from 'next/navigation'

const page = () => {

    const router = useRouter();

    const handleLogout = async () => {
        await SignOut()
    }

    return (
        <ProtectedLayout>
            <div className={Style.container}>
                <div className={Style.header}>
                    <Heading heading="Welcome Admin!" />
                    <CustomButton
                        color="secondary"
                        variant="contained"
                        onClick={handleLogout}
                    >
                        singout
                    </CustomButton>
                </div>


                <div className={Style.actions}>
                    <div
                        onClick={() => router.push('admin/add_department')}
                    >
                        Add Department
                    </div>
                    <div
                        onClick={() => router.push('admin/add_resource')}
                    >
                        Add Resource
                    </div>
                    <div
                        onClick={() => router.push('admin/view_request')}
                    >
                        View Request
                    </div>
                </div>

            </div>
        </ProtectedLayout>
    )
}

export default page