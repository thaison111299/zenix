
import '../styles/Home.css';
import { useState, useEffect } from 'react'
import Status from './Status'
import Navbar from './Navbar'
import Friend from './Friend'
import updateDocument from '../firebase/updateDocument';
import uploadDocument from '../firebase/uploadDocument';
import GetDocuments from '../firebase/getDocuments';
import vein from '../vein.js'
import StoragePicture from '../firebase/StoragePicture';
import { connect } from 'react-redux';
import { setUserList_a, setUser_a } from '../redux/actions/userActions';
import { setStatusList_a } from '../redux/actions/statusActions';

// import { Route, BrowserRouter as Router } from 'react-router-dom'
function Home(props) {
  const {
    user,
    userList,
    setStatusList
  } = props


  const statusList = GetDocuments("statuslist")

  const [friendList, setFriendList] = useState([])

  useEffect(() => {
    if (statusList) {
      setStatusList(statusList)
    }

  }, [statusList])


  // console.log(userList)

  const [showFriend, setShowFriend] = useState(true)


  const [statusText, setStatusText] = useState('')
  const [file, setFile] = useState(null)
  const [pictureUrl, setPictureUrl] = useState('')
  const [fileType, setFileType] = useState('image')
  const [progress, setProgress] = useState(0)
  const handleWidthChange = () => {
    if (window.innerWidth <= 1263) {
      setShowFriend(false)
    } else {
      setShowFriend(true);
    }
  };

  // console.log(pictureUrl)


  window.addEventListener('resize', handleWidthChange);


  useEffect(() => {
    handleWidthChange()


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



  async function handleUploadStatus(e) {
    e.preventDefault()

    let newStatus = {
      text: statusText,
      by: user,
      like: [],
      pictureUrl: pictureUrl,
      fileType: fileType
    }
    // console.log(newStatus)
    uploadDocument("statuslist", newStatus, "text")
    setStatusText('')
    setPictureUrl('')
    setProgress(0)
    setFile(null)
  }

  useEffect(() => {
    if (file) {
      console.log(file)
      if (file.type.includes('image')) {
        setFileType('image')

      } else {
        setFileType('video')
      }
      StoragePicture(file, setPictureUrl, setProgress)

    } else {
      setPictureUrl('')
      setProgress(0)
    }


  }, [file])

  function handleUploadPicture(e) {
    setFile(e.target.files[0])
  }

  const cameraIconURL = "https://img.icons8.com/ios/452/compact-camera.png"

  return (
    <div className="app">
      {user &&
        <>
          <form className="form-upload-status" onSubmit={handleUploadStatus}>
            <input
              value={statusText}
              onChange={(e) => setStatusText(e.target.value)}
              type="text"
              required
              placeholder={`${user.name}, write something...`} />
            <div className="bar">
              <button>upload</button>

              {file && file.name}
              <label for="file-input">
                <img
                  className="icon"
                  src={cameraIconURL}
                ></img>
              </label>
              <input
                onChange={handleUploadPicture}
                id="file-input"
                className="file"
                type="file"
              // value={file}
              />

            </div>
            {file &&
              <h3>upload: {progress} %</h3>
            }

            {
              pictureUrl && fileType === "image" &&
              <img src={pictureUrl} style={{ width: "200px", height: "200px" }} />
            }
            {
              pictureUrl && fileType === "video" &&
              // <img src={pictureUrl} style={{ width: "200px", height: "200px" }} />
              <video
                style={{ width: "200px", height: "200px" }}
                controls>
                <source src={pictureUrl} />
              </video>
            }

            {
              progress === 100 &&
              <h3>file is ready</h3>

            }

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

    </div >
  );
}


function mapState(state) {
  return state
}

function mapDispatch(dispatch) {
  return {
    setUser: (user) => dispatch(setUser_a(user)),
    setUserList: (userList) => dispatch(setUserList_a(userList)),
    setStatusList: (statusList) => dispatch(setStatusList_a(statusList))
  }
}

// export default App;
export default connect(mapState, mapDispatch)(Home) 