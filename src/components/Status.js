
import '../styles/Status.css'
import Comment from './Comment'
import { useState } from 'react'
function Status(props) {
    const { status } = props
    const [commentList, setCommentList] = useState([
        { id: "1", text: "ban co sao khong", ofId: "1" },
        { id: "2", text: "dung nghi gi ca", ofId: "1" },
        { id: "3", text: "khong co chuyen gi dau", ofId: "1" }
    ])
    function commentSection() {
        // for test 
        return commentList.map(cm => {
            if (cm.ofId === status.id) {
                return (<Comment key={cm.id} comment={cm} />)
            }
        })
    }
    return (
        <div className="status">
            <div className="introduce">
                <img alt="avatar" className="user-avatar" src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" />
                <h2 className="user-name">thai son</h2>
            </div>


            <h3 className="status-text">{status.text}</h3>
            <div className="status-bar">
                <div className="like-icon" />
            </div>

            {commentSection()}
        </div>
        // <h1>{status.text}</h1>
    )
}

export default Status