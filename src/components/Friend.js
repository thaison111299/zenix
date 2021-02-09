
import '../styles/Friend.css'
import { setUserClick_a } from '../redux/actions/userActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
function Friend(props) {
    const DIR_PATH = "/zenix"
    const { person, setUserClick } = props
    const exampleURL = "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"

    function handleClick() {
        // console.log("clicked")
        setUserClick(person)
    }

    return (
        <Link to={DIR_PATH + "/information"} className="friend" onClick={handleClick}>
            <img className="icon" src={person.avatarURL} />
            <h4 className="friend-name">{person.name}</h4>
            <div className="green-dot"></div>
        </Link>
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

export default connect(mapState, mapDispatch)(Friend)