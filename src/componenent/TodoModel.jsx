import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const TodoModel = ({ todo, taskCompleted, deleteTask, EdidTask }) => {
  const [EditToDo, setEditTodo] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(todo);

  return (
    <div>
      <div
        style={{
          display: "inline-flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1>{todo.title}</h1>
        <Button
          style={{
            padding: "1px",
            marginInline: "10px",
            marginLeft: "10px",
            marginBottom: "10px",
          }}
          onClick={() => taskCompleted(todo.id)}
        >
          {todo.completed ? "Completed" : "Not Completed"}
        </Button>
        <Button
          style={{
            padding: "1px",
            marginInline: "10px",
            marginLeft: "10px",
            marginBottom: "5px",
          }}
          variant="danger"
          onClick={() => {
            deleteTask(todo.id);
          }}
        >
          Delete
        </Button>{" "}
        <Button
          style={{
            padding: "10px",
            marginInline: "10px",
            marginLeft: "10px",
            marginBottom: "5px",
          }}
          variant="info"
          onClick={handleShow}
        >
          Edit
        </Button>{" "}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h1>EDIT TODO</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Todo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={todo.title}
                  autoFocus
                  onChange={(e) => setEditTodo(e.target.value)}
                  required
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                EdidTask(todo.id, EditToDo);
                handleClose();
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default TodoModel;
