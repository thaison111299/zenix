import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore } from './config';

export default function updateDocument(documentName, id, feild, value) {
    var docRef = projectFirestore.collection(documentName).doc(id)
    docRef.update(feild, value)
}

