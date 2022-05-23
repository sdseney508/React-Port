import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ height: '750px' }}>
      <Card.Img
        variant="top"
        src={props.imgPath}
        style={{ height: '300px' }}
        alt="card-img"
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button className='me-5' variant="primary" href={props.link} target="_blank">
          View Deployed Project
        </Button>
        <Button variant="success" href={props.repo} target="_blank">
          View Github Repo
        </Button>
      </Card.Footer>
    </Card>
  );
}
export default ProjectCards;
