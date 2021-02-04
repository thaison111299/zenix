function Comment(props) {
    const { comment } = props
    return (
        <h1>{comment.text}</h1>
    )
}
export default Comment;