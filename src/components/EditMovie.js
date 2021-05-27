import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editAnime } from "../js/action/Movie_action";

const EditMovie = ({anime}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState(anime.title);
  const [url, setUrl] = useState(anime.posterUrl);
  const [rate, setRate] = useState(anime.rate);
  const [description, setDescription] = useState(anime.description);
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
      e.preventDefault();
      const newAnime = {
          id: anime.id,
          title:title,
          posterUrl:url,
          rate,
          description 
      }
      dispatch(editAnime(newAnime));
      handleClose()
  }
  
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} >
            <label htmlFor="">Title</label>
            <input type="text" className="form-control" onChange={e => setTitle(e.target.value)} />
            <label htmlFor="">PosterUrl</label>
            <input type="text" className="form-control" onChange={e => setUrl(e.target.value)} />
            <label htmlFor="">Rate</label>
            <input type="text" className="form-control" onChange={e => setRate(e.target.value)}   />
            <label htmlFor="">Description</label>
            <input type="text" className="form-control" onChange={e => setDescription(e.target.value)}/>
            <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
          </form>
        </Modal.Body>
      
      </Modal>
    </>
  );
};

export default EditMovie;
