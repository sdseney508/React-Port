import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ProjectCards from "./projectCards";
import pokedex from "../assets/images/pokedex.png";
import trailFinder from "../assets/images/trail-finder.jpg";
import weather from "../assets/images/trail-finder.jpg";


function Portfolio() {
  return (
    <Container fluid className="">
      <Container>
        <h1 className="">
          Recent Portfolio
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: ".25rem" }}>
          <Col sm={12} md={6} lg={4} className="">
            <ProjectCards
              imgPath={pokedex}
              title="Ultimate Pokedex"
              description="A Pokedex creator for all fans of Pokemon.  Create your own online log of all the Pokemon you've caught across all generations of the game and research the various abilities and evolutions of your Pokemon"
              link="https://unh-pokedex-final.herokuapp.com/"
              repo=''
            />
          </Col>

          <Col sm={12} md={6} lg={4} className="">
            <ProjectCards
              imgPath={trailFinder}
              title="Trail Finder"
              description="A cool app that helps hikers and bikers find trails in their local areas.  It also gives them a 5 day weather forecast and displays what stars will be in the sky in an intuitive star chart."
              link="https://sdseney508.github.io/Trail-Finder/"
            />
          </Col>

          <Col sm={12} md={6} lg={4} className="">
            <ProjectCards
              imgPath={weather}
              title="Weather"
              description="A weather API for cities of interest of the user.  Displays the current temperature, forecast hi and low temps for the 5 days forecast, UV index (helps to plan outdoors activities), wind forecast, and weather conditions."
              link="https://sdseney508.github.io/Weather-Dashboard/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Portfolio;