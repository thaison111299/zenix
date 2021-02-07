import { useState, useEffect } from 'react'
import '../styles/Navbar.css'
import vein from '../vein'
import Friend from './Friend'
import Result from './Result'
function Navbar(props) {
	const { setUser, user, userList, statusList } = props
	// const [search, setSearch] = useState(false)
	const [full, setFull] = useState(true)
	const [show, setShow] = useState(false)
	const [showFriends, setShowFriends] = useState(false)
	const [searchText, setSearchText] = useState('')
	//list string cac het qua search
	const [searchList, setSearchList] = useState(["haha", "hehe"])


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
		vein.deleteCookie("user")
		setUser(null)
	}

	function friendSection() {
		return userList.map(fr => {
			return (<Friend person={fr} />)
		})
	}

	function findResult(key) {
		let results = []
		for (let i = 0; i < statusList.length; i++) {
			if (statusList[i].text.toLowerCase().includes(key)) {
				// console.log("kq: ", statusList[i])
				results.push({ type: "status", value: statusList[i] })
			}
		}
		//user list
		for (let i = 0; i < userList.length; i++) {
			if (userList[i].name.toLowerCase().includes(key)) {
				results.push({ type: "user", value: userList[i] })
			}
		}


		setSearchList(results)
	}


	function handleSearch(e) {
		let inputText = e.target.value
		setSearchText(e.target.value)
		console.log(`searching: ${e.target.value}`)

		if (inputText) {
			let key = inputText.trim().toLowerCase()
			findResult(key)
		}
	}

	function resultSection() {
		return searchList.map(res => {
			return (
				<Result result={res} />
			)
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
						<form className={"form-search"} onSubmit={(e) => { e.preventDefault(); setSearchText('') }}>
							<img className="search-icon" src={searchIconURL} />
							<input
								onChange={handleSearch}
								className={"input-search"}
								type="text"
								placeholder={"search"}
								value={searchText} />
							{
								searchText &&
								<div className="result-container">
									{/* <h1>hah</h1> */}
									{resultSection()}
								</div>
							}

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