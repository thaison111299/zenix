import { useState, useEffect } from 'react';
import { projectFirestore } from './config';

export default function GetCommentsByStatusId(collectionName, statusId) {
    const [myList, setMyList] = useState([])
    useEffect(() => {
        const unsub = projectFirestore
            .collection(collectionName)
            .orderBy('createAt', 'asc')
            .onSnapshot(snap => {
                let documents = []
                snap.forEach(doc => {
                    if (doc.data() && doc.data().of.id === statusId) {
                        documents.push({ ...doc.data(), id: doc.id })
                    }
                })
                setMyList(documents)
            })

        return () => unsub()

    }, [collectionName])

    return myList
}
