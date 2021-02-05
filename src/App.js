
import './App.css';
import { useState, useEffect } from 'react'
import Status from './components/Status'
import Navbar from './components/Navbar'
import Friend from './components/Friend'
function App() {
  const [user, setUser] = useState(null)
  // const [showNavbar, setShowNavbar] = useState(true)
  const [statusList, setStatusList] = useState([
    { by: "son", text: "xin chao", id: "1" },
    { by: "khanh", text: "hellow moi nguoi", id: "2" },
    { by: "khanh", text: "hellow moi nguoi dasdasdsadas", id: "3" },
  ])
  const friendList = ["huy", "trang", "long", "huy", "trang", "long", "huy", "trang", "long"]

  // document.getElementsByClassName("app").onScroll = (e) => {
  //   // console.log("scrolling")
  //   // console.log(e)
  //   alert("scrolling")
  // }

  useEffect(() => {

  }, [])



  function statusSection() {
    return statusList.map(st => {
      return (<Status user={user} status={st} key={st.id} />)
    })
  }
  function friendSection() {
    return friendList.map(fr => {
      return (<Friend name={fr} />)
    })
  }
  return (
    <div className="app">
      {/* {showNavbar && */}
      <Navbar />
      {/* } */}

      test friendlist o day
      <div className="main-section">
        <div className="friend-section">
          {friendSection()}
        </div>
        <div className="status-container">
          {statusSection()}
        </div>
      </div>


      <form className="form-log" onSubmit={(e) => e.preventDefault()}>
        <div className="zenix-intro">
          <div className="white-logo"></div>
          <h1>ZENIX</h1>
        </div>
        <h1>LOGIN</h1>
        <input className="input-log" placeholder="email" type="text" />
        <input className="input-log" placeholder="password" type="password" />
        <button className="button-log">login</button>
      </form>


      <form className="form-log" onSubmit={(e) => e.preventDefault()}>
        <div className="zenix-intro">
          <div className="white-logo"></div>
          <h1>ZENIX</h1>
        </div>
        <h1>CREATE NEW</h1>
        <input className="input-log" placeholder="name" type="text" />
        <input className="input-log" placeholder="email" type="text" />
        <input className="input-log" placeholder="avatar url" type="text" />
        <input className="input-log" placeholder="password" type="text" />
        <button className="button-log">create</button>
        <button className="button-log">back to login</button>
      </form>


    </div>
  );
}

export default App;
