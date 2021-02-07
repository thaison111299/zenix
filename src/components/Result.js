import '../styles/Result.css'
export default function Result(props) {
	const { result } = props
	const { type, value } = result
	let status;
	let person;

	return (
		<div className="result">
			<h2 className="type">{result.type}</h2>

			{type === "user" &&

				<img
					className="avatar"
					src={value.avatarURL}
				/>
			}

			<h3
				className={"value " + (type === "user" ? "background-white" : "")}
			>
				{type === "status" ? result.value.text : result.value.name}
			</h3>

		</div>

	)

}