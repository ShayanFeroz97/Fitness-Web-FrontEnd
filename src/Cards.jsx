import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Gymactivities from "./assets/Gymactivities.png";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { GlobalContext } from "./context/Context.mjs";
import "./Cards.css";

function Cards() {
  const { allWorkouts, setAllWorkouts } = useContext(GlobalContext);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get("http://localhost:8080/getcards");
    setAllWorkouts(data);
    console.log(allWorkouts, data);
    // setAlldata(data);
  };

  // const Delete = async (id) => {
  //   try {
  //     const res = await axios.delete(`http://localhost:8080/data/${id}`);
  //     console.log("Item successfully deleted.");
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  // let data = [
  //   {
  //     title: "WALK",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, est.",
  //     type: "R",
  //     duration: "2min",
  //     date: "18/2/2023",
  //   },
  //   {
  //     title: "WALK",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, est.",
  //     type: "R",
  //     duration: "2min",
  //     date: "18/2/2023",
  //   },
  //   {
  //     title: "WALK",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, est.",
  //     type: "R",
  //     duration: "2min",
  //     date: "18/2/2023",
  //   },
  //   {
  //     title: "WALK",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, est.",
  //     type: "R",
  //     duration: "2min",
  //     date: "18/2/2023",
  //   },
  //   {
  //     title: "WALK",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, est.",
  //     type: "R",
  //     duration: "2min",
  //     date: "18/2/2023",
  //   },
  //   {
  //     title: "WALK",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, est.",
  //     type: "R",
  //     duration: "2min",
  //     date: "18/2/2023",
  //   },
  // ];

  return (
    <div className="card_main">
      {allWorkouts.map((item) => (
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
            <DeleteForm allData={item} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function DeleteForm({ allData }) {
  const [show, setShow] = useState(false);
  const { allWorkouts, setAllWorkouts } = useContext(GlobalContext);

  const confirmDelete = async () => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8080/data/${allData?._id}`
      );
      console.log(data);
      setAllWorkouts(
        allWorkouts.filter((singleData) => singleData._id !== allData._id)
      );

      console.log("Item successfully deleted.");
    } catch (error) {
      alert(error);
    }
  };

  const handleClose = async () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <button className="btn btn-primary" onClick={handleShow}>
        Delete
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure, you want to delete?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn_1"
            variant="secondary"
            onClick={() => {
              setShow(false);
            }}
          >
            No
          </Button>
          <Button variant="primary" onClick={confirmDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export function EditForms({ cardData }) {
  const { allWorkouts, setAllWorkouts } = useContext(GlobalContext);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(cardData.title);
  const [description, setDescription] = useState(cardData.description);
  const [type, setType] = useState(cardData.type);
  const [duration, setDuration] = useState(cardData.duration);
  const [date, setDate] = useState(cardData.date);
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [typeError, setTypeError] = useState("");
  const [durationError, setDurationError] = useState("");
  const [dateError, setDateError] = useState("");

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };

  const EditCard = async () => {
    const stringRegex = /^[A-Za-z]+( [A-Za-z]+)*$/;
    const numberRegex = /^[0-9]+$/;
    const durationRegex = /^\d{2}$/;

    if (title.trim() === "") {
      setTitleError("Title can not be empty");
      return;
    } else if (!stringRegex.test(title)) {
      setTitleError("Title can only contain letters.");
      return;
    } else {
      setTitleError("");
    }

    if (description.trim() === "") {
      setDescriptionError("Description can not be empty");
      return;
    } else if (!stringRegex.test(description)) {
      setDescriptionError("Description can only contain letters.");
      return;
    } else {
      setDescriptionError("");
    }

    if (type.trim() === "") {
      setTypeError("Type can not be empty");
      return;
    } else {
      setTypeError("");
    }

    if (duration.trim() === "") {
      setDurationError("Duration can not be empty");
      return;
    } else if (duration.length > 2) {
      setDurationError("Duration can only consist of two numbers.");
      return;
    } else if (!durationRegex.test(duration)) {
      setDurationError("Duration can only contain numbers.");
      return;
    } else {
      setDurationError("");
    }

    if (date.trim() === "") {
      setDateError("Date can not be empty");
      return;
    } else {
      setDateError("");
    }

    try {
      const body = { title, description, type, duration, date };
      const { data } = await axios.put(
        `http://localhost:8080/data/${cardData._id}`,
        body
      );
      setAllWorkouts(
        allWorkouts.map((item) => {
          // console.log(item, allData, data, body);
          return item._id == cardData?._id ? data : item;
        })
      );
      console.log(data);
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
      <button onClick={handleShow} className="btn btn-secondary">
        Edit
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Activity</Modal.Title>
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
              <p style={{ color: "red", fontSize: "12px" }}>{titleError}</p>
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
              <p style={{ color: "red", fontSize: "12px" }}>
                {descriptionError}
              </p>
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
              <p style={{ color: "red", fontSize: "12px" }}>{typeError}</p>

            </Form.Group> */}

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Activity Type</Form.Label>

              <select
                id="type"
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                }}
                className="form_select"
              >
                <option value="run">Run</option>
                <option value="bicycle">Bicycle</option>
                <option value="swim">Swim</option>
                <option value="ride">Ride</option>
                <option value="walk">Walk</option>
                <option value="hike">Hike</option>
              </select>
              <p style={{ color: "red", fontSize: "12px" }}>{typeError}</p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type="number"
                placeholder="Exercise Duration"
                autoFocus
                maxLength={"2"}
                value={duration}
                onChange={(e) => {
                  setDuration(e.target.value);
                }}
              />
              <p style={{ color: "red", fontSize: "12px" }}>{durationError}</p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                autoFocus
                value={date}
                min={getCurrentDate()}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
              <p style={{ color: "red", fontSize: "12px" }}>{dateError}</p>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn_1"
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
