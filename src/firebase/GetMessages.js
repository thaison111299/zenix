import { useState, useEffect } from 'react';
import { projectFirestore } from './config';

export default function GetMessages(collectionName, userEmail, targetEmail) {
  const [myList, setMyList] = useState([])
  useEffect(() => {
    const unsub = projectFirestore
      .collection(collectionName)
      .orderBy('createAt', 'asc')
      .onSnapshot(snap => {
        let documents = []
        snap.forEach(doc => {
          if (doc.data()) {
            if (doc.data().room === userEmail + targetEmail ||
              doc.data().room === targetEmail + userEmail) {
              documents.push({ ...doc.data(), id: doc.id })
            }
          }
        })
        setMyList(documents)
      })
    return () => unsub()

  }, [collectionName])

  return myList
}