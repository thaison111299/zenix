import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUserClick_a } from '../redux/actions/userActions';
import '../styles/Result.css'
function Result(props) {
  const DIR_PATH = "/zenix"

  const { result, setUserClick } = props
  const { type, value } = result
  let status;
  let person;

  return (
    <div className="result">
      <h2 className="type">{result.type}</h2>

      {type === "user" &&



        <img
          className="avatar"
          src={value.avatarURL}
        />
      }

      <Link to={DIR_PATH + "/information/"}>
        <h3
          onClick={() => setUserClick(result.value)}
          className={"value " + (type === "user" ? "background-white" : "")}
        >
          {type === "status" ? result.value.text : result.value.name}
        </h3>
      </Link>


    </div>

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

// export default App;

export default connect(mapState, mapDispatch)(Result) 