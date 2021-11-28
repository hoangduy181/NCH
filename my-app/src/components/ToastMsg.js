import React from "react";
import { ToastContainer, Toast } from "react-bootstrap";

function ToastMsg({toastMsg, closeToast, variant}) {
  return (
    <Toast  show={toastMsg !== null}
            onClose={closeToast}
            style={{position: "fixed", top: "10vh", right: "0", zIndex: "100000"}}
            delay={1200}
            autohide
            bg={variant}
            >
      <Toast.Header>
        <strong className="me-auto">NCH</strong>
        <small>just now</small>
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