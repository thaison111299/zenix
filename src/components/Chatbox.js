import { useState, useEffect } from 'react'
import uploadDocument from '../firebase/uploadDocument'
import '../styles/Chatbox.css'
import GetMessages from '../firebase/GetMessages'
import $ from 'jquery';
import { connect } from 'react-redux';
import { setUserClick_a, setUserList_a } from '../redux/actions/userActions';

function Chatbox(props) {
    const { user, setChat } = props
    const target = props.userClick
    const setTarget = props.setUserClick
    const [text, setText] = useState('')
    const messages = GetMessages('messages', user.email, target.email)
    const [count, setCount] = useState(0)


    useEffect(() => {

        if (count != messages.length) {
            scrollToBottom("scroll")
            setCount(messages.length)
        }


    }, [messages])



    function scrollToBottom(id) {
        var div = document.getElementById(id);
        $('#' + id).animate({
            scrollTop: div.scrollHeight - div.clientHeight
        }, 300);
    }


    function handleSendMessage(e) {
        e.preventDefault()
        console.log("sending message...")
        let newMessage = {
            text: text,
            by: user,
            room: user.email + target.email
        }
        uploadDocument('messages', newMessage, 'text')
        setText('')
    }
    function handleClose() {
        setChat(false)
    }

    function messageSection() {
        return messages.map(message => {
            return (
                <div
                    key={message.id}
                    className={message.by.email !== user.email ? "message" : "my-message"}>
                    <img
                        className="avatar"
                        src={message.by.avatarURL}
                    />
                    <h3
                        className={message.by.email !== user.email ? "message-text" : "my-message-text"}
                    >{message.text}</h3>
                </div>
            )
        })
    }
    return (
        <form className="chatbox" onSubmit={handleSendMessage} >
            {/* <h1>chatbox</h1> */}
            <div className="title">
                <img
                    className="avatar"
                    src={target.avatarURL} />
                <h2>{target.email}</h2>
                <h3
                    onClick={handleClose}

                    className="close">close</h3>
            </div>
            <div id="scroll" className="messages-container">
                {messageSection()}
            </div>
            <div className="new-message">
                <input
                    type="text"
                    value={text}
                    required
                    onChange={(e) => setText(e.target.value)}
                    placeholder="text someshit..."
                />
                <button>send</button>
            </div>
            {/* <button onClick={() => scrollToBottom("scroll")}>dasdsa</button> */}
        </form>
    )
}


function mapState(state) {
    return state
}

function mapDispatch(dispatch) {
    return {
        setUserClick: (user) => dispatch(setUserClick_a(user))
    }
}


export default connect(mapState, mapDispatch)(Chatbox) 