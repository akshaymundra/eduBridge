'use client'
import ProtectedLayout from "@/components/ProtectedLayout/ProtectedLayout"
import SignOut from "@/firebase/Authentication/Signout"

const page = () => {

    const handleLogout = async () => {
        await SignOut()
    }

    return (
        <ProtectedLayout>
            <div>
                this is protected
                <button onClick={handleLogout}>
                    singout
                </button>
            </div>
        </ProtectedLayout>
    )
}

export default page