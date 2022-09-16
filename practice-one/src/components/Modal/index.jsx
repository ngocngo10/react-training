import React from "react";
import "./index.css";

const Modal = props => {
  const { show, onClose, title } = props;
  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">{title}</h4>
          <button className="button" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="modal-body">{props.children}</div>
        <div className="modal-footer">{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
