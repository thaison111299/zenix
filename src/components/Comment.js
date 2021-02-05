import '../styles/Comment.css'

function Comment(props) {
    const { comment } = props
    const replyList = [
        { text: "reply 1", ofId: "2", id: "1" },
        { text: "reply 2", ofId: "2", id: "2" },
    ]



    return (
        <div className="comment">
            <div className="main">
                <div className="introduce">
                    <h4 className="name">nguyen hoang long</h4>
                    <img className="icon" src=" https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" />
                </div>
                <div className="comment-content">
                    <h5 className="comment-text">{comment.text}</h5>
                    <div className="comment-bar">
                        {/* <div className="like-icon like" /> */}
                        <h5>like</h5>
                        <h5>show reply</h5>
                        <h5>reply</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Comment;