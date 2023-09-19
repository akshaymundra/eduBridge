'use client'
import SignOut from '@/firebase/Authentication/Signout'
import app from '@/firebase/config'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const auth = getAuth(app)

const ProtectedLayout = ({ children }) => {

    const [userId, setUserId] = useState(null);

    const router = useRouter();
    useEffect(() => {
        try {
            onAuthStateChanged(auth, (user) => {
                if (!user) {
                    SignOut()
                        .then((res, err) => {
                            if (res) {
                                console.log('user signed out')
                            }
                        })
                        .catch(e => {
                            console.log(e)
                        })
                    router.push("/admin/auth/login")
                    return
                }
                setUserId(user.uid)
            })
        } catch (e) {
            console.log(e)
        }
    })

    return (
        <>
            {userId && children}
        </>
    )
}

export default ProtectedLayout