import { getAuth, onAuthStateChanged } from 'firebase/auth'
import app from '../config'
import SignOut from './Signout';

const auth = getAuth(app);

export default function isAuth() {
    let uid, error;

    try {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // console.log(user)
                uid = user.uid;
            }
            else {
                SignOut()
                    .then((res, err) => {
                        if (res) {
                            console.log('user signed out')
                        }
                    })
                    .catch(e => {
                        console.log(e)
                    })
            }
        })
    } catch (e) {
        error = e;
    }

    return { uid, error }
}