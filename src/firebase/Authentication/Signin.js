import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../config";

const auth = getAuth(app)

export default async function Signin(email, password) {
    let user, error;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        user = userCredential.user
    } catch (e) {
        error = e;
    }

    return { user, error }
}