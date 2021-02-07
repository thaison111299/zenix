
import '../styles/Status.css'
import Comment from './Comment'
import { useState, useEffect } from 'react'
import uploadDocument from '../firebase/uploadDocument'
import GetDocuments from '../firebase/getDocuments'
import updateDocument from '../firebase/updateDocument'
import GetSpecifyDocuments from '../firebase/getSpecifyDocuments'
import GetCommentsByStatusId from '../firebase/getCommentsByStatusId'
import deleteDocumentById from '../firebase/deleteDocumentById'
function Status(props) {
	const { status, user } = props

	// const [commentList, setCommentList] = useState([
	// 	{ id: "1", text: "ban co sao khong", ofId: "1" },
	// 	{ id: "2", text: "dung nghi gi ca", ofId: "UDjfRr7P1Krm5SVyqQ6J" },
	// 	{ id: "3", text: "khong co chuyen gi dau", ofId: "UDjfRr7P1Krm5SVyqQ6J" }
	// ])

	const commentList = GetCommentsByStatusId('commentlist', status.id)
	const [commentText, setCommentText] = useState('')
	const [showComment, setShowComment] = useState(true)
	const [liked, setLiked] = useState(false)



	useEffect(() => {

		for (let i = 0; i < status.like.length; i++) {
			if (status.like[i].id === user.id) {
				// console.log("you liked ")
				setLiked(true)
				return
			}
		}
		console.log("you not liked")


	}, [])

	// const [commentNumber, setCommentNumber] = useState(0)
	function commentSection() {
		//for temp
		// let x = 0;
		const commentss = commentList.map(cm => {
			// if (cm.of.id === status.id) {
			// x++
			return (<Comment user={user} key={cm.id} comment={cm} />)
			// }
		})

		// setCommentNumber(commentss.length)
		return commentss
	}
	function handleUploadComment(e) {
		e.preventDefault()

		let newComment = {
			text: commentText,
			of: status,
			by: user,
		}
		uploadDocument("commentlist", newComment, "text")
		setCommentText('')
	}
	function handleLike() {
		setLiked(!liked)
		let like = !liked
		if (like) {
			for (let i = 0; i < status.like.length; i++) {
				if (status.like[i].id === user.id) {
					// console.log("you liked ")
					// setLiked(true)
					//cai nao cung dc tru user hien tai - lay ra
					let newLikeList = status.like.filter(userwholiked => {
						return userwholiked.id !== user.id
					})
					updateDocument('statuslist', status.id, 'like', newLikeList)
					return
				}
			}
			updateDocument('statuslist', status.id, 'like', [...status.like, user])
		} else {
			let newLikeList = status.like.filter(userwholiked => {
				return userwholiked.id !== user.id
			})
			updateDocument('statuslist', status.id, 'like', newLikeList)
			return
		}

	}

	function handleDelete() {
		console.log("deleted")
		deleteDocumentById('statuslist', status.id)
	}

	const defaultAvatarURL = "https://i.pinimg.com/" +
		"originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
	return (
		<div className="status">
			<div className="introduce">
				<img alt="avatar" className="user-avatar" src={status.by.avatarURL} />
				<h2 className="user-name">{status.by.name}</h2>
				{
					status.by.id === user.id &&
					<button onClick={handleDelete} className="delete">X</button>

				}

			</div>

			<h3 className="status-text">{status.text}</h3>
			<div className="status-bar">
				<div
					onClick={handleLike}
					className={"like-icon " + (liked ? "liked" : "like")}
				/>


				<h3
					className="like-count"
					style={{ marginLeft: "10px", fontSize: "24px", color: "blue" }}
				>{status.like.length}</h3>


				<h4 onClick={() => setShowComment(!showComment)}
					className="show-comment">{showComment ? `hide ${commentList.length} comment` : `show ${commentList.length} comment`}</h4>
			</div>

			{showComment &&
				<>
					<form
						className="form-upload-comment"
						onSubmit={handleUploadComment}>
						<img className="user-avatar"
							src={user.avatarURL}
						/>
						<input
							type="text"
							placeholder="your comment..."
							onChange={(e) => setCommentText(e.target.value)}
							value={commentText}
							required
						/>
					</form>
					{commentSection()}
				</>

			}

		</div>
	)
}

export default Status