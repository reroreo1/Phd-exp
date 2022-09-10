import React from "react";
// import styled from "styled-components"
import "./style.css"


function Login(){
	return (
		<div className="split right">
			<h2 className="title">Welcome</h2>
			<label>Email :</label>
			<input className="input container"></input>
			<label>Password :</label>
			<input className="input container"></input>
			<button className="center">Login</button>
		</div>
	);
}

export default Login