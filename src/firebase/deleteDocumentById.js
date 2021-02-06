import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore } from './config';


export default function deleteDocumentById(documentName, id) {
    projectFirestore.collection(documentName).doc(id).delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
}
