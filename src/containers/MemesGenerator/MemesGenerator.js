import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSingleMeme } from "../../store/actions";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import ErrorNotice from "../../components/ErrorNotice/ErrorNotice";
import SingleTextBlock from "../../components/SingleTextBlock/SingleTextBlock";
import Canvas from "../Canvas/Canvas";
import ModalImg from "../../components/ModalImg/ModalImg";

import "./MemesGenerator.css";

const MemesGenerator = (props) => {
  const singleMeme = useSelector((state) => state.singleMeme);
  const fetchError = useSelector((state) => state.fetchSingleMemeError);
  const url = useSelector((state) => state.dataUrl);
  const dispatch = useDispatch();

  const [text, setText] = useState([
    {
      id: nanoid(),
      text: "",
      name: "text",
      color: "#000000",
      fontSize: "22",
      weight: false,
      italic: false,
    },
  ]);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    dispatch(getSingleMeme(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  const findIndex = (arr, id) => {
    return arr.findIndex((item) => item.id === id);
  };

  const inputChangeHandler = (id) => (event) => {
    const name = event.target.name;
    const value = event.target.value;

    const index = findIndex(text, id);
    const newObj = { ...text[index], [name]: value };

    const newText = [...text.slice(0, index), newObj, ...text.slice(index + 1)];

    setText(newText);
  };

  const setBoldOrItalic = (id, value) => {
    const index = findIndex(text, id);
    const newObj = { ...text[index], [value]: !text[index][value] };

    const newText = [...text.slice(0, index), newObj, ...text.slice(index + 1)];

    setText(newText);
  };

  const removeTextBlock = (id) => {
    const index = findIndex(text, id);
    const newText = [...text.slice(0, index), ...text.slice(index + 1)];
    if (text.length > 1) {
      setText(newText);
    }
  };

  const addText = () => {
    const newField = {
      id: nanoid(),
      text: "",
      name: "text",
      color: "#000000",
      fontSize: "22",
      weight: false,
      italic: false,
    };
    if (text.length < 5) {
      setText([...text, newField]);
    }
  };

  const textBlocks = text.map((item) => {
    return (
      <SingleTextBlock
        id={item.id}
        key={item.id}
        text={item.text}
        color={item.color}
        fontSize={item.fontSize}
        bold={() => setBoldOrItalic(item.id, "weight")}
        italic={() => setBoldOrItalic(item.id, "italic")}
        handler={inputChangeHandler(item.id)}
        remove={() => removeTextBlock(item.id)}
      />
    );
  });

  return (
    <div className="generator">
      <ModalImg
        url={url}
        visible={visible}
        close={() => setVisible((visible) => !visible)}
      />
      <h3>Generate your own meme</h3>
      {fetchError ? (
        <ErrorNotice />
      ) : (
        <div className="generatorInner">
          <div className="imgBlock">
            <Canvas
              url={singleMeme?.url}
              name={singleMeme?.name}
              textArray={text}
            />
          </div>
          <div className="changeBlock">
            {textBlocks}
            <button type="button" className="addBtn" onClick={addText}>
              Add text
            </button>
            <button
              type="button"
              className="addBtn"
              onClick={() => setVisible((visible) => !visible)}
            >
              Create meme
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

MemesGenerator.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

export default MemesGenerator;
