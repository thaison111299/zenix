
import './App.css';
import { useState } from 'react'
import Status from './components/Status'
import Navbar from './components/Navbar'
function App() {
  const [user, setUser] = useState(null)
  const [statusList, setStatusList] = useState([
    { by: "son", text: "xin chao", id: "1" },
    { by: "khanh", text: "hellow moi nguoi", id: "2" },
  ])

  function statusSection() {
    return statusList.map(st => {
      return (<Status user={user} status={st} key={st.id} />)
    })
  }
  return (
    <div className="app">
      <Navbar />
      <div className="status-container">
        {statusSection()}
      </div>

    </div>
  );
}

export default App;
