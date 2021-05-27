import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteAnime } from "../js/action/Movie_action";
import EditMovie from "./EditMovie";

const MovieCard = ({ anime }) => {
  const dispatch = useDispatch();
  return (
    <Card style={{ width: "18rem", marginBottom: "15px", marginTop: "80px" }}>
      <Card.Img
        variant="top"
        src={anime.posterUrl}
        style={{ height: "27rem" }}
      />
      <Card.Body>
        <Card.Title>{anime.title}</Card.Title>
        <Card.Text>
          <span className="gold">{"★".repeat(anime.rate)}</span>
        </Card.Text>

        <Button
          variant="danger"
          onClick={() => dispatch(deleteAnime(anime.id))}
        >
          Delete
        </Button>
        <EditMovie anime={anime} />
      </Card.Body>
      <Link to={`/Details/${anime.id}`}>
        <Button variant="primary">Description</Button>
      </Link>{" "}
      <br />
    </Card>
  );
};

export default MovieCard;
