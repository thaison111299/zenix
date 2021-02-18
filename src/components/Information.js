import { useEffect, useState } from "react"
import { connect } from "react-redux"
import GetMyStatuses from "../firebase/GetMyStatuses"
import updateDocument from "../firebase/updateDocument"
import '../styles/Information.css'
import Chatbox from "./Chatbox"
import Status from "./Status"
function Information(props) {

  const [chat, setChat] = useState(false)
  const [isFriend, setIsFriend] = useState(false)
  const {
    userClick,
    userList,
    user,
  } = props

  useEffect(() => {
    console.log(user.friends)
    for (let i = 0; i < user.friends.length; i++) {
      if (user.friends[i].email === userClick.email) {
        console.log('is friend')
        setIsFriend(true)
        return
      }
    }

    setIsFriend(false)
    console.log('not friends')

  }, [])


  const myStatusList = GetMyStatuses('statuslist', userClick.id)


  useEffect(() => {
    console.log("mystatus: ", myStatusList)

  }, [myStatusList])


  function statusSection() {
    return myStatusList.map(st => {
      return (<Status user={user} status={st} key={st.id} />)
    })
  }

  function handleAddFriend() {
    // setIsFriend(!isFriend)

    if (isFriend === false) {
      updateDocument('userlist', user.id, 'friends', [...user.friends, userClick])
      updateDocument('userlist', userClick.id, 'friends', [...user.friends, user])
      setIsFriend(true)
    } else {
      setIsFriend(false)
      let newFriendList = user.friends.filter(friend => {
        return friend.id !== userClick.id
      })

      let newFriendList2 = userClick.friends.filter(friend => {
        return friend.id !== user.id
      })

      console.log("userclickfriends:", userClick)

      updateDocument('userlist', user.id, 'friends', newFriendList)
      updateDocument('userlist', userClick.id, 'friends', newFriendList2)



    }

  }

  const tempURL = "https://i.pinimg.com/originals/d4/bc/c4/d4bcc46e371e194b20854acd1ba3a86b.jpg"
  return (
    <div className="information">
      <div
        className="banner">
        <div className="left">
          <img className="avatar" src={userClick.avatarURL} />
          <h1>{userClick.name}</h1>
          <div className="options center-flex-row">
            <h3 className="item unselect" >friends</h3>
            <h3 onClick={() => setChat(!chat)} className="item unselect" >send message</h3>
            <h3
              onClick={handleAddFriend}
              className="item unselect" >{isFriend ? "disfriend" : "addfriend"}</h3>
          </div>
        </div>
        <img className="right" src={tempURL}></img>
      </div>


      {chat &&
        <Chatbox setChat={setChat} />
      }


      <div className="status-container">
        <h1>{userClick.name}'s statuses</h1>
        {statusSection()}
      </div>


    </div>

  )
}

function mapState(state) {
  return state
}

export default connect(mapState)(Information) 