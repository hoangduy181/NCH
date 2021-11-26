import React from "react";
import { ToastContainer, Toast } from "react-bootstrap";

function ToastMsg({toastMsg, closeToast}) {
  return (
    <Toast  show={toastMsg !== null}
            onClose={closeToast}
            style={{position: "fixed", top: "10vh", right: "0", zIndex: "100000"}}
            delay={1000}
            autohide
            bg='success'
            >
      <Toast.Header>
        <strong className="me-auto">NCH</strong>
        <small>right now</small>
      </Toast.Header>
      <Toast.Body 
        style={{color: "#000"}}
      >
        {toastMsg}
      </Toast.Body>
    </Toast>
  )
}

export default ToastMsg;