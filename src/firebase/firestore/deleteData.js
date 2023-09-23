import { collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../config";

export default async function deleteDocument(collectionName, docId) {

    try {
        const dataCol = collection(db, collectionName);
        await deleteDoc(doc(dataCol, docId));
        console.log('Document deleted successfully')
    }
    catch (error) {
        console.error(error)
    }
}
