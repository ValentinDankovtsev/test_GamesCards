import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function ErrorBlock() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ooops, error!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please, reload the page.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ErrorBlock;
