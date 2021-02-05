import '../styles/Navbar.css'
function Navbar() {

    const URL = "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
    // alert("hah")
    return (
        <div className="navbar">
            <div className="logo">

            </div>
            <div className="navbar-introduce">
                <img className="avatar" src={URL} />
                <div className="introduce-text" >
                    <h3 className="name">nguyen hoang long</h3>
                    <h4 className="email">longhudsad@gmail.com</h4>
                </div>
            </div>
            <button className="button-log">logout</button>
        </div>
    )
}
export default Navbar