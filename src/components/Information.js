import { useEffect } from "react"
import { connect } from "react-redux"
import GetMyStatuses from "../firebase/GetMyStatuses"
import '../styles/Information.css'
import Status from "./Status"
function Information(props) {


  const {
    userClick,
    userList,
    user,
  } = props


  const myStatusList = GetMyStatuses('statuslist', userClick.id)


  useEffect(() => {
    console.log("mystatus: ", myStatusList)

  }, [myStatusList])


  function statusSection() {
    return myStatusList.map(st => {
      return (<Status user={user} status={st} key={st.id} />)
    })
  }

  const tempURL = "https://i.pinimg.com/originals/d4/bc/c4/d4bcc46e371e194b20854acd1ba3a86b.jpg"
  return (
    <div className="information">
      <div
        className="banner">
        <div className="left">
          <img className="avatar" src={userClick.avatarURL} />
          <h1>{userClick.name}</h1>
        </div>
        <img className="right" src={tempURL}></img>

      </div>

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