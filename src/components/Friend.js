import '../styles/Friend.css'
function Friend(props) {
    const { name } = props
    const exampleURL = "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
    return (
        <div className="friend">
            <img className="icon" src={exampleURL} />
            <h4 className="friend-name">{name}</h4>
            <div className="green-dot"></div>
        </div>
    )
}
export default Friend