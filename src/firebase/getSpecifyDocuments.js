import { useState, useEffect } from 'react';
import { projectFirestore } from './config';

export default function GetSpecifyDocuments(collectionName, feild, value) {
    const [myList, setMyList] = useState([])
    useEffect(() => {
        const unsub = projectFirestore
            .collection(collectionName)
            .orderBy('createAt', 'desc')
            .onSnapshot(snap => {
                let documents = []
                snap.forEach(doc => {
                    if (doc.data() && doc.data()[feild] == value) {
                        documents.push({ ...doc.data(), id: doc.id })
                    }
                })
                setMyList(documents)
            })

        return () => unsub()

    }, [collectionName])

    return myList
}
