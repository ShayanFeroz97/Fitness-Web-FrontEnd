import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Gymactivities from "./assets/Gymactivities.png";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./Cards.css";

function Cards() {
  const [alldata, setAlldata] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const { data } = await axios.get("http://localhost:8080/getcards");
    console.log(data);
    setAlldata(data);
  };

  const Delete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8080/data/${id}`);
      console.log("Item successfully deleted.");
    } catch (error) {
      alert(error);
    }
  };

  let data = [
    {
      title: "WALK",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, est.",
      type: "R",
      duration: "2min",
      date: "18/2/2023",
    },
    {
      title: "WALK",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, est.",
      type: "R",
      duration: "2min",
      date: "18/2/2023",
    },
    {
      title: "WALK",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, est.",
      type: "R",
      duration: "2min",
      date: "18/2/2023",
    },
    {
      title: "WALK",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, est.",
      type: "R",
      duration: "2min",
      date: "18/2/2023",
    },
    {
      title: "WALK",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, est.",
      type: "R",
      duration: "2min",
      date: "18/2/2023",
    },
    {
      title: "WALK",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, est.",
      type: "R",
      duration: "2min",
      date: "18/2/2023",
    },
  ];
  return (
    <div className="card_main">
      {alldata.map((item) => (

        <div key={item._id} className="card">
          <img
            className="card-img-top"
            src={Gymactivities}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">
              {item.description}
              <br />
              {item.type}
              <br />
              {item.duration}
              <br />
              {item.date}
            </p>
            <EditForms cardData={item} />
            <button
              className="btn btn-primary"
              onClick={async () => {
                try {
                  const res = await axios.delete(
                    `http://localhost:8080/data/${item._id}`
                  );
                  console.log("Item successfully deleted.");
                } catch (error) {
                  alert(error);
                }
              }}
            >
              Delete
            </button>
          </div>
        </div>

        ))}
        </div>
  );
}

export function EditForms({ cardData }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(cardData.title);
  const [description, setDescription] = useState(cardData.description);
  const [type, setType] = useState(cardData.type);
  const [duration, setDuration] = useState(cardData.duration);
  const [date, setDate] = useState(cardData.date);

  const EditCard = async () => {
    const body = { title, description, type, duration, date };
    try {
      const res = await axios.put(
        `http://localhost:8080/data/${cardData._id}`,
        body
      );
      console.log(res.data);
    } catch (error) {
      alert(error);
    }
    setShow(false);
  };
  const handleClose = async () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  return (
    <>
      {/* <div onClick={handleShow}>Add Activity</div> */}
      <button onClick={handleShow} className="btn btn-primary">
        Edit
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Activity</Modal.Title>
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
          <Button
            variant="secondary"
            onClick={() => {
              setShow(false);
            }}
          >
            Close
          </Button>
          <Button variant="primary" onClick={EditCard}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cards;
