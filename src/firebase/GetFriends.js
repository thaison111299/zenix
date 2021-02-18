import { useState, useEffect } from 'react';
import { projectFirestore } from './config';

export default function GetFriends(collectionName, userid) {
    const [myList, setMyList] = useState([])
    useEffect(() => {
        const unsub = projectFirestore
            .collection(collectionName)
            .orderBy('createAt', 'desc')
            .onSnapshot(snap => {
                let documents = []
                snap.forEach(doc => {
                    if (doc.data()) {
                        // if(doc.data().friends.includes)
                        for (let i = 0; i < doc.data().friends.length; i++) {
                            if (doc.data().friends[i].id === userid) {
                                documents.push({ ...doc.data(), id: doc.id })
                                break;
                            }
                        }
                    }
                })
                setMyList(documents)
            })

        return () => unsub()

    }, [collectionName])

    return myList
}
