
import './App.css';
import { useState, useEffect } from 'react'
import Status from './components/Status'
import Navbar from './components/Navbar'
import Friend from './components/Friend'
import updateDocument from './firebase/updateDocument';
import uploadDocument from './firebase/uploadDocument';
import GetDocuments from './firebase/getDocuments';
import vein from './vein.js'

function App() {
  const userList = GetDocuments("userlist")
  const statusList = GetDocuments("statuslist")
  const [user, setUser] = useState(null)
  const [showFriend, setShowFriend] = useState(true)
  const [doRegister, setDoRegister] = useState(false)
  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newAvatarURL, setNewAvatarURL] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [statusText, setStatusText] = useState('')
  const handleWidthChange = () => {
    if (window.innerWidth <= 1263) {
      setShowFriend(false)
    } else {
      setShowFriend(true);
    }
  };

  window.addEventListener('resize', handleWidthChange);
  useEffect(() => {
    handleWidthChange()
    setUser(vein.getCookieObject("user"))

  }, [])

  function statusSection() {
    return statusList.map(st => {
      return (<Status user={user} status={st} key={st.id} />)
    })
  }
  function friendSection() {
    return userList.map(fr => {
      return (<Friend person={fr} />)
    })
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
  function handleUploadStatus(e) {
    e.preventDefault()
    // console.log(statusText)

    let newStatus = {
      text: statusText,
      by: user,
      like: []
    }
    uploadDocument("statuslist", newStatus, "text")
    setStatusText('')
  }


  return (
    <div className="app">
      {user &&
        <>
          <Navbar statusList={statusList} userList={userList} setUser={setUser} user={user} />

          {/* upload status o day */}
          <form className="form-upload-status" onSubmit={handleUploadStatus}>
            <input
              value={statusText}
              onChange={(e) => setStatusText(e.target.value)}
              type="text"
              required
              placeholder={`${user.name}, write something...`} />
            <button>upload</button>
          </form>

          <div className="main-section">
            {showFriend &&
              <div className="friend-section">
                {friendSection()}
              </div>
            }

            <div className="status-container">
              {statusSection()}
            </div>
          </div>

        </>
      }

      {!doRegister && !user &&
        // login
        <form form className="form-log" onSubmit={handleLogin}>
          <div className="zenix-intro">
            <div className="white-logo"></div>
            <h1>ZENIX</h1>
          </div>
          <h1>LOGIN</h1>
          <input onChange={(e) => setLoginEmail(e.target.value)} required className="input-log" placeholder="email" type="text" />
          <input onChange={(e) => setLoginPassword(e.target.value)} required className="input-log" placeholder="password" type="text" />
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
          <input required onChange={(e) => setNewPassword(e.target.value)} className="input-log" placeholder="password" type="text" />
          <button className="button-log">create</button>
          <button onClick={() => setDoRegister(false)} className="button-log">back to login</button>
        </form>
      }



    </div >
  );
}

export default App;
