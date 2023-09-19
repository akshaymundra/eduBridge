import { getAuth, signOut } from 'firebase/auth'
import app from '../config'

const auth = getAuth(app);

export default async function SignOut() {
    try {
        await signOut(auth);
    } catch (e) {
        console.log(e)
    }
}