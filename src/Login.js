import React from "react";
// import styled from "styled-components"
import "./style.css"

function sayHi(){
	alert('Hi Hi Hi Hi Hi');
}
function Login(){
	return (
		<div className="split right main">
			<div className="submain">
				<h2 className="title">Welcome</h2>
				{/* <label className="text">Email :</label> */}
				<input className="input" placeholder="E-mail"></input>
				{/* <label className="text">Password :</label> */}
				<input type="password" className="input" placeholder="Password"></input>
				<button type="button" onClick={sayHi} className="button">Log in</button>
			</div>
		</div>
	);
}

export default Login