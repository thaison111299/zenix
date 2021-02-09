import Home from './components/Home'
import Navbar from './components/Navbar'
import GetDocuments from './firebase/getDocuments'
import { useState, useEffect } from 'react'
import vein from './vein'
import uploadDocument from './firebase/uploadDocument'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Information from './components/Information'
import './App.css'
import { connect } from 'react-redux'
import { setUser_a, setUserList_a } from './redux/actions/userActions'
import { setStatusList_a } from './redux/actions/statusActions'


function App(props) {
  const DIR_PATH = "/zenix"
  const {
    user,
    setUser,
    setUserList,
  } = props

  const userList = GetDocuments("userlist")


  useEffect(() => {
    setUserList(userList)
  }
    , [userList])

  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newAvatarURL, setNewAvatarURL] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [doRegister, setDoRegister] = useState(false)
  useEffect(() => {
    setUser(vein.getCookieObject("user"))
    console.log("props: ", props)
  }, [])


  function handleLogin(e) {
    e.preventDefault()

    if (userList) {
      for (let i = 0; i < userList.length; i++) {
        let { email, password } = userList[i]
        if (email === loginEmail && password === loginPassword) {
          vein.uploadCookie("user", userList[i])
          setUser(userList[i])
          return;
        }
      }
      alert("email or password wrong")
    }
  }


  const defaultAvatarURL = "https://i.pinimg.com/" +
    "originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
  function createUser(e) {
    e.preventDefault()

    const AVT = newAvatarURL ? newAvatarURL : defaultAvatarURL
    let newUser = {
      name: newName,
      avatarURL: AVT,
      email: newEmail,
      password: newPassword
    }

    if (userList) {
      for (let i = 0; i < userList.length; i++) {
        let { email } = userList[i]
        if (email === newEmail) {
          alert("email existed")
          return;
        }
      }
      uploadDocument("userlist", newUser, "name")
      alert("create success")
    }

  }

  return (
    <Router>

      <div className="app">
        {user &&
          < Navbar />
        }
        <Switch>
          <Route path={"/zenix/"} exact component={Home} />
          {user &&
            <Route path={DIR_PATH + "/information"} exact component={Information} />
          }
          <Route path="/" exact component={Home} />
        </Switch>

        {!doRegister && !user &&
          // login
          <form form className="form-log" onSubmit={handleLogin}>
            <div className="zenix-intro">
              <div className="white-logo"></div>
              <h1>ZENIX</h1>
            </div>
            <h1>LOGIN</h1>
            <input onChange={(e) => setLoginEmail(e.target.value)} required className="input-log" placeholder="email" type="text" />
            <input onChange={(e) => setLoginPassword(e.target.value)} required className="input-log" placeholder="password" type="password" />
            <button className="button-log">login</button>
            <button onClick={() => setDoRegister(true)} className="button-log">register</button>
          </form>
        }

        {
          doRegister && !user &&
          <form className="form-log" onSubmit={createUser}>
            <div className="zenix-intro">
              <div className="white-logo"></div>
              <h1>ZENIX</h1>
            </div>
            <h1>CREATE NEW</h1>
            <input required onChange={(e) => setNewName(e.target.value)} className="input-log" placeholder="name" type="text" />
            <input onChange={(e) => setNewAvatarURL(e.target.value)} className="input-log" placeholder="avatar url" type="text" />
            <input required onChange={(e) => setNewEmail(e.target.value)} className="input-log" placeholder="email" type="text" />
            <input required onChange={(e) => setNewPassword(e.target.value)} className="input-log" placeholder="password" type="password" />
            <button className="button-log">create</button>
            <button onClick={() => setDoRegister(false)} className="button-log">back to login</button>
          </form>
        }


      </div>

    </Router>

  )
}

function mapState(state) {
  return state
}

function mapDispatch(dispatch) {
  return {
    setUser: (user) => dispatch(setUser_a(user)),
    setUserList: (userList) => dispatch(setUserList_a(userList))

  }
}



export default connect(mapState, mapDispatch)(App)