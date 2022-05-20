import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="container d-flex flex-row">
      <div className="flex-column">
        <h2 className='centered'>Steve's React Portfolio</h2>
        <nav>
				<Link to={"/"} className="col-sm-12 col-md-5 col-lg-2">About Me</Link>

				<Link to={"/portfolio"} className="col-sm-12 col-md-5 col-lg-2">Porfoliol</Link>

				<Link to={"/resume"} className="col-sm-12 col-md-5 col-lg-2">Resume</Link>

				<Link to={"/contact"} className="col-sm-12 col-md-5 col-lg-2">Contact</Link>

        </nav>
      </div>
    </header>
  );
}

export default Header;
