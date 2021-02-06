import { projectStorage, projectFirestore, timestamp } from './config';

export default function uploadDocument(collectionName, newDocument, refFeild) {
    const storageRef = projectStorage.ref(newDocument[refFeild]);
    const collectionRef = projectFirestore.collection(collectionName);

    storageRef.put(newDocument)
        .on('state_changed',
            (snap) => { },
            (err) => { },
            async () => {
                const createdAt = timestamp();
                await collectionRef.add({ ...newDocument, createAt: createdAt });
            });
}

