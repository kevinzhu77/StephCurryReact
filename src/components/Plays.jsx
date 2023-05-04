import React from "react"

export default function Plays (props) {
	return (
		<div className = "plays">
			<h3> {props.year}: {props.game} of the {props.round} against the {props.opponent} </h3>
			<iframe title = "Highlights"
				src = {props.link}>
			</iframe>
		</div>
	)
}
