import React from "react";
import PropTypes from "prop-types";
import "./SingleTextBlock.css";

const SingleTextBlock = (props) => {
  return (
    <div className="addTextBlock" id={props.id}>
      <input
        name="text"
        type="text"
        value={props.text}
        placeholder="Enter your text"
        onChange={props.handler}
        className="textField field"
      />
      <input
        type="color"
        className="colorField"
        name="color"
        onChange={props.handler}
        value={props.color}
      />
      <input
        type="text"
        name="fontSize"
        className="field sizeField"
        onChange={props.handler}
        value={props.fontSize}
      />
      <button type="button" onClick={props.bold} className="removeBtn boldBtn">
        B
      </button>
      <button
        type="button"
        onClick={props.italic}
        className="removeBtn italicBtn"
      >
        I
      </button>
      <button type="button" onClick={props.remove} className="removeBtn">
        X
      </button>
    </div>
  );
};

SingleTextBlock.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  bold: PropTypes.func.isRequired,
  italic: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default SingleTextBlock;
