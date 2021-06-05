import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDataUrl } from "../../store/actions";
import PropTypes from "prop-types";

const Canvas = (props) => {
  const dispatch = useDispatch();
  const textArray = props.textArray;
  const canvas = useRef();
  let ctx;
  let img;
  const positions = [
    { x: 100, y: 100, w: 100, h: 50 },
    { x: 100, y: 150, w: 100, h: 50 },
    { x: 100, y: 200, w: 100, h: 50 },
    { x: 100, y: 250, w: 100, h: 50 },
    { x: 100, y: 300, w: 100, h: 50 },
  ];
  let isDown = false;
  let dragTarget = null;
  let startX = null;
  let startY = null;
  let dataURL = null;

  useEffect(() => {
    const canvasEle = canvas.current;
    ctx = canvasEle.getContext("2d");
    img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = props.url;
    canvasEle.width = img.width;
    canvasEle.height = img.height;
    dataURL = canvasEle.toDataURL("image/jpeg", 1.0);
    dispatch(getDataUrl(dataURL));
    draw();
  }, [textArray]);

  const draw = () => {
    ctx.clearRect(
      0,
      0,
      canvas.current.clientWidth,
      canvas.current.clientHeight
    );
    ctx.drawImage(img, 0, 0);
    for (let i = 0; i < textArray.length; i++) {
      drawText(positions[i], textArray[i]);
    }
  };

  const drawText = (pos, arr) => {
    const { x, y, w, h } = pos;
    ctx.beginPath();
    ctx.fillStyle = "transparent";
    ctx.fillRect(x, y, w, h);
    ctx.font = `${arr?.weight ? "bold" : ""} ${arr?.italic ? "italic" : ""}
        ${arr ? arr.fontSize : ""}px Verdana`;
    ctx.fillStyle = arr.color;
    ctx.fillText(arr.text, x, y + 30);
  };

  const hitBox = (x, y) => {
    let isTarget = null;
    for (let i = 0; i < positions.length; i++) {
      const box = positions[i];
      if (x >= box.x && x <= box.x + 40 && y >= box.y && y <= box.y + 40) {
        dragTarget = box;
        isTarget = true;
        break;
      }
    }
    return isTarget;
  };

  const handleMouseDown = (e) => {
    startX = e.nativeEvent.offsetX - canvas.current.clientLeft;
    startY = e.nativeEvent.offsetY - canvas.current.clientTop;
    isDown = hitBox(startX, startY);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    const mouseX = e.nativeEvent.offsetX - canvas.current.clientLeft;
    const mouseY = e.nativeEvent.offsetY - canvas.current.clientTop;
    const dx = mouseX - startX;
    const dy = mouseY - startY;
    startX = mouseX;
    startY = mouseY;
    dragTarget.x += dx;
    dragTarget.y += dy;
    draw();
  };
  const handleMouseUp = (e) => {
    console.log(e);
    dragTarget = null;
    isDown = false;
  };
  const handleMouseOut = (e) => {
    handleMouseUp(e);
  };
  return (
    <canvas
      // width={588}
      // height={500}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseOut={handleMouseOut}
      ref={canvas}
      // style={{ width: "588px", height: "auto" }}
    ></canvas>
  );
};

Canvas.propTypes = {
  textArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      fontSize: PropTypes.string.isRequired,
      weight: PropTypes.bool.isRequired,
      italic: PropTypes.bool.isRequired,
    })
  ).isRequired,
  url: PropTypes.string,
};

export default Canvas;
