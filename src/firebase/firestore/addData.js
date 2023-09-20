import { addDoc, getFirestore, collection } from "firebase/firestore";
import { db } from "../config";
// import app from "../config";

// const db = getFirestore(app)

export default async function addData(collectionName, data) {
    let result;
    let error;
    try {
        const dataCol = collection(db, collectionName)
        const dataSnapshot = await addDoc(dataCol, data)
        result = dataSnapshot;
    }
    catch (e) {
        error = e;
    }

    return { error, result }
}