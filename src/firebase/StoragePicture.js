// import { useEffect, useState } from 'react';
import { projectStorage, projectFirestore, timestamp } from './config';



export default function StoragePicture(file, setPictureUrl) {
	const storageRef = projectStorage.ref(file.name);
	// const [url, setUrl] = useState(null)
	// console.log(setPictureUrl)
	// console.log("storage")
	storageRef.put(file)
		.on('state_changed',
			(snap) => { },
			(err) => { },
			async () => {
				const url = await storageRef.getDownloadURL()
				// 			// setUrl(url)
				// 			console.log("URL: ", url)
				setPictureUrl(url)
			});

	// return () => { setStatusPictureUrl('') }
}

