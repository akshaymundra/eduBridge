import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { db } from "../config";
// import app from "../config";


// const db = getFirestore(app)

export default async function getDocument(collectionName, attributeName, id = null) {
    let result;
    let error;
    try {
        const dataCol = collection(db, collectionName)


        let baseQuery = query(dataCol);

        if (id && attributeName) {
            baseQuery = query(dataCol, where(attributeName, "==", id))
        }

        const dataSnapshot = await getDocs(baseQuery)

        const dataList = dataSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        result = dataList;
    }
    catch (e) {
        error = e;
    }

    return { error, result }
}

