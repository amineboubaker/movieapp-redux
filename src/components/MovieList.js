import React from "react";
import { useState } from "react";
import { Button, Form, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { colorize } from "../js/action/starAction";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const animeList = useSelector((state) => state.movieReducer.animeList);
  const starArray = useSelector((state) => state.starReducer.starArray);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  return (
    <div>
      <div>
        <Navbar
          fixed="top"
          bg="dark"
          variant="dark"
          className="row justify-content-around"
        >
          <Navbar.Brand href="#home">ANIMEX</Navbar.Brand>
          <Nav className="">
            <Link to="/" href="#home">
              Home
            </Link>
            <Link href="#features">News</Link>
            <Link href="#About us">About us</Link>
          </Nav>

          <Form inline>
            {starArray.map((star) => (
              <span
                key={star.id}
                className={star.isColored ? "gold" : "black"}
                onClick={() => dispatch(colorize(star.id))}
              >
                {star.star}
              </span>
            ))}
            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
            <input type="text" onChange={(e) => setText(e.target.value)} />

            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </div>

      <div className="d-flex justify-content-around flex-wrap">
        {animeList
          .filter((anime) =>
            anime.title.toUpperCase().includes(text.toUpperCase().trim())
          )
          .filter(
            (anime) =>
              anime.rate >= starArray.filter((star) => star.isColored).length
          )
          .map((anime) => (
            <MovieCard anime={anime} key={anime.id} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
