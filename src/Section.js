import React from "react";
import "./style.css";
import e1 from "./e1.png";
import e2 from "./e2.png";

function Section(){
	return (
		<div className="split left">
			<h1 className="title1">LOGO</h1>
			<p className="Ftext">The name of the experiment and a brief description</p>
			<p className="text">The name of the experiment and a brief description The name of the experiment and a brief description fasdghadshbgdhsbgds gdsbgdjksg gdsngkldsjgkdsg mngdsgdksj;</p>
			<div className="imgholder">
				<img className="e1" src={e1} alt=""/>
				<img className="e2" src={e2} alt=""/>
			</div>			
		</div>)
}

export default Section

