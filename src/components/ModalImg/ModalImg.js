import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";
import Modal from "react-modal";

const ModalImg = (props) => {
  return (
    <div className="modal">
      <Modal
        isOpen={props.visible}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={props.url} alt="meme" className="modalImg" />
        <button onClick={props.close} className="closeBtn">
          Close
        </button>
      </Modal>
    </div>
  );
};

ModalImg.propTypes = {
  visible: PropTypes.bool.isRequired,
  url: PropTypes.string,
  close: PropTypes.func.isRequired,
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default ModalImg;
