import myresume from '../assets/files/Steven_Seney_Resume.doc';
import React from "react";

function Resume() {
	return (
		<div>
			<div className="c">
				<h1 className="">My Resume</h1>
			</div>
			<div className="bottom-spacing">
				<a href={myresume} download="Steven_Seney_Resume.doc">
					<h4>Resume Download</h4>
				</a>
			</div>
			<div>
				<h5>Front-End Proficiencies</h5>
				<ol>
					<li>HTML5</li>
					<li>CSS3</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>Bootstrap</li>
                    <li>Foundation</li>
					<li>React</li>
				</ol>
				<br></br>
				<h5>Back-End Proficiencies</h5>
				<ol>
					<li>APIs</li>
					<li>NodeJS</li>
					<li>Express</li>
					<li>Model View Controller (MVC)</li>
					<li>REST</li>
					<li>Progressive Web Applications (PWA)</li>
				</ol>
				<br></br>
				<h5>Dev Tool Proficiencies</h5>
				<ol>
					<li>Git</li>
					<li>npm</li>
					<li>Jest</li>
				</ol>
				<br></br>
				<h5>Database Proficiencies</h5>
				<ol>
					<li>MySQL</li>
					<li>Sequelize</li>
					<li>GraphQL</li>
					<li>MongoDB</li>
					<li>Mongoose</li>
				</ol>
			</div>
		</div>
	);
}

export default Resume;