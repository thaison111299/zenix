import { useState, useEffect } from 'react'
import '../styles/Navbar.css'
import vein from '../vein'
import Friend from './Friend'
function Navbar(props) {
    const { setUser, user, userList } = props
    const [search, setSearch] = useState(false)
    const [full, setFull] = useState(true)
    const [show, setShow] = useState(false)
    const [showFriends, setShowFriends] = useState(false)


    const handleWidthChange = () => {
        if (window.innerWidth <= 690) {
            setFull(false)
        } else {
            setFull(true);
        }
    };

    window.addEventListener('resize', handleWidthChange);

    useEffect(() => {
        handleWidthChange()
    }, [])

    function handleLogout() {
        // console.log("logout")
        vein.deleteCookie("user")
        setUser(null)
    }

    function friendSection() {

        return userList.map(fr => {
            return (<Friend person={fr} />)
        })
    }

    const URL = "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
    const searchIconURL = "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
    const extendIconURL = "https://image.flaticon.com/icons/png/512/56/56763.png"
    const closeIconURL = "https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/close.png"
    const friendsIconURL = "https://img.icons8.com/ios/452/friends.png"

    const logoutIconURL = "https://www.iconpacks.net/icons/2/free-exit-logout-icon-2857-thumb.png"
    return (
        <div className="navbar-container">
            <div className={"navbar"}>
                <div className="logo">
                </div>
                {full &&
                    <>
                        <form className={"form-search " + (search ? "" : "white")}>
                            <img onClick={() => setSearch(!search)} className="search-icon" src={searchIconURL} />
                            <input className={"input-search " + (search ? "" : "none")} type="text" placeholder={search ? "search" : ""} />
                        </form>

                        <div className="navbar-introduce">
                            <img className="avatar" src={URL} />
                            <div className="introduce-text" >
                                <h3 className="name">{user.name}</h3>
                                <h4 className="email">{user.email}</h4>
                            </div>
                        </div>
                        <button onClick={handleLogout} className="button-log">logout</button>

                    </>
                }
                {!full &&
                    <>
                        <h1>ZENIX</h1>
                        <img onClick={() => setShow(!show)}
                            className="extend-icon"
                            src={show ? closeIconURL : extendIconURL} />
                    </>
                }

            </div>
            {show && !full &&
                <ul className="navbar-mobile">
                    <li className="item navbar-introduce">
                        <img className="avatar" src={URL} />
                        <div className="introduce-text" >
                            <h3 className="name">{user.name}</h3>
                            <h4 className="email">{user.email}</h4>
                        </div>
                    </li>

                    <button onClick={handleLogout} className="item button-logout">logout</button>

                    <div className="item-logout" onClick={handleLogout}>
                        <img className="icon-logout" src={logoutIconURL} />
                    </div>


                    <div onClick={() => setShowFriends(!showFriends)} className="item">
                        <img className="friend-icon" src={friendsIconURL} />
                        {/* <img className="friend-icon" src={friendsIconURL} /> */}
                    </div>

                    {
                        showFriends &&
                        friendSection()
                    }

                </ul>
            }

        </div>

    )
}
export default Navbar