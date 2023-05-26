import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import "./Form.css";

export default function Forms() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");

  const SaveCard = async() => {
    const body = {title, description, type, duration, date};
    try {
      const res = await axios.post('http://localhost:8080/adddata', body)
      console.log(res.data)
    } catch (error) {
      alert(error)
      
    }
    setShow(false);
  };
  const handleClose = async() => {

    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow}>Add Activity</div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Activity</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Exercise Title"
                autoFocus
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Exercise Description"
                autoFocus
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Exercise Type"
                autoFocus
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type="text"
                placeholder="Exercise Duration"
                autoFocus
                value={duration}
                onChange={(e) => {
                  setDuration(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                autoFocus
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{setShow(false)}}>
            Close
          </Button>
          <Button variant="primary" onClick={SaveCard}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

