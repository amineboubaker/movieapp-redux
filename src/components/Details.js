import React from "react";
import { Button, Card, Container, Navbar } from "react-bootstrap";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Details = ({ match }) => {
  const animeList = useSelector((state) => state.movieReducer.animeList);
  const anime = animeList.find(
    (el) => el.id.toString() === match.params.id.toString()
  );

  return (
    <div className="card">
      <div>
        <Navbar variant="dark" bg="dark">
          <Container>
            <Link to="/">
              <Navbar.Brand href="#">Home</Navbar.Brand>
            </Link>
          </Container>
        </Navbar>
      </div>
      <Card style={{ width: "18rem", marginBottom: "15px", marginTop: "80px" }}>
        <Card.Img variant="top" src={anime.posterUrl} />
        <Card.Body>
          <Card.Title>{anime.title}</Card.Title>
          <Card.Text>{anime.description}</Card.Text>
        </Card.Body>
      </Card>

      <div className="trailer">{anime.trailer}</div>
      <Link to="/">
        <Button variant="primary">Go Back</Button>
      </Link>
    </div>
  );
};

export default Details;
