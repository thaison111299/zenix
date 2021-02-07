import deleteDocumentById from '../firebase/deleteDocumentById'
import '../styles/Comment.css'

function Comment(props) {
    const { comment, user } = props
    const replyList = [
        { text: "reply 1", ofId: "2", id: "1" },
        { text: "reply 2", ofId: "2", id: "2" },
    ]

    function handleDelete() {
        // console.log("delete")
        deleteDocumentById('commentlist', comment.id)
    }

    return (
        <div className="comment">
            <div className="main">
                <div className="introduce">
                    <h4 className="name">{comment.by.name}</h4>
                    <img className="icon" src={comment.by.avatarURL} />
                </div>
                <div className="comment-content">
                    <h5 className="comment-text">{comment.text}</h5>
                    <div className="comment-bar">
                        <h5>like</h5>
                        <h5>reply</h5>

                        {user.id === comment.by.id &&
                            <h5 onClick={handleDelete}>delete</h5>
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}
export default Comment;