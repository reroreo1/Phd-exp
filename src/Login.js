import React from "react";
// import styled from "styled-components"
import "./style.css"


function Login(){
	return (
		<div className="split right main">
			<div className="submain">
			<h2 className="title">Welcome</h2>
			<label>Email :</label>
			<input></input>
			<label>Password :</label>
			<input></input>
			<button className="button">Login</button>
			</div>
		</div>
	);
}

export default Login