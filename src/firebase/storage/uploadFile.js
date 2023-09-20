import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../config";

export default async function (file, name) {
    let error, url;
    const fileRef = ref(storage, name)

    try {
        const fileSnapshot = await uploadBytes(fileRef, file);

        alert('File uploaded successfully')

        url = await getDownloadURL(fileRef);

    } catch (e) {
        error = e;
    }
    return { error, url }
}