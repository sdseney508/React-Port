import React from "react";

function AboutMe() {
    return (
		<div className="d-flex flex-column">
			<div className="flex-column content" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img src="../assets/images/avatar.jpg" alt="Steve Seney" className="photo"/>
			</div>
			<div>
				<p>
                Retired Naval Aviator and Engineer now working on Full Stack
                development projects. I served 10 years as a P-3C "Mighty Orion"
                pilot to begin my career, then transitioned to the Aviation
                Engineering Duty Corps where I spent the ten years of serving as
                a Program Manager and then the Chief Engineer on major aircraft
                development efforts.
				</p>
				<p>
			
				I am now refrehsing my skills as a SW engineer working on large
                database efforts and Full Stack projects.
				</p>
			</div>
		</div>
	);
}
export default AboutMe;