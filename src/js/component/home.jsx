import React from "react";
import { useState, useEffect } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState("off");
	let red = "bg-danger rounded-circle";
	let yellow = "bg-warning rounded-circle";
	let green = "bg-success rounded-circle";
	let off = "bg-dark rounded-circle";

	return (
		<div claName="cable">
			<div className="lightcable"></div>
			<div className="box">
				<div className="light" onClick={() => setColor("red")}>
					{color == "yellow" || color == "green" || color == "off" ? (
						<div className={off}></div>
					) : (
						<div className={`glow ${red}`}></div>
					)}
				</div>
				<div className="light" onClick={() => setColor("yellow")}>
					{color == "red" || color == "green" || color == "off" ? (
						<div className={off}></div>
					) : (
						<div className={`glower ${yellow}`}></div>
					)}
				</div>
				<div className="light" onClick={() => setColor("green")}>
					{color == "yellow" || color == "red" || color == "off" ? (
						<div className={off}></div>
					) : (
						<div className={`glowerest ${green}`}></div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Home;
