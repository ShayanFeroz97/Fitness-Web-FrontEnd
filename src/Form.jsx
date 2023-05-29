import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { GlobalContext } from "./context/Context";
import "./Form.css";

export default function Forms() {
  const { allWorkouts, setAllWorkouts } = useContext(GlobalContext);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [type, setType] = useState("");
  const [typeError, setTypeError] = useState("");
  const [duration, setDuration] = useState("");
  const [durationError, setDurationError] = useState("");
  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState("");

  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };

  const SaveCard = async () => {
    const stringRegex = /^[A-Za-z]+( [A-Za-z]+)*$/;
    const numberRegex = /^[0-9]+$/
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
    } else {
      setTypeError("");
    }

    if (duration.trim() === "") {
      setDurationError("Duration can not be empty");
      return;
    } else if (duration.length > 2) {
      setDurationError("Duration can only consist of two numbers.");
      return;}
    else if (!durationRegex.test(duration)) {
      setDurationError("Duration can only contain numbers.");
      return
    }
    else {
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
      const { data } = await axios.post("http://localhost:8080/adddata", body);
      const WorkOutClone = allWorkouts.slice(0);
      WorkOutClone.push(data);
      setAllWorkouts(WorkOutClone);
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
      <div onClick={handleShow}>Add Activity</div>

      <Modal className="modal_main" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Activity</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required="required"
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

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Activity Type</Form.Label>

              {/* <Form.Control
                type="text"
                placeholder="Exercise Type"
                autoFocus
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                }}
              /> */}

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
              <Form.Label>Duration in Minutes</Form.Label>
              <Form.Control
                type="number"
                placeholder="Exercise Duration"
                autoFocus
                value={duration}
                maxLength={2}
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
            variant="secondary"
            onClick={() => {
              setShow(false);
            }}
          >
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
