import '../styles/Navbar.css'
function Navbar() {

    const URL = "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
    // alert("hah")
    return (
        <div className="navbar">
            <div className="logo">

            </div>
            <div className="introduce">
                <img className="avatar" url={URL} />
            </div>
            <button className="button-log">logout</button>
        </div>
    )
}
export default Navbar