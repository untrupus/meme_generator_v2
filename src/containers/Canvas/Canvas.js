import React, {useRef, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getDataUrl} from "../../store/actions";

const Canvas = props => {
    const dispatch = useDispatch();
    const canvasRef = useRef(null);
    const textArray = props.textArray;

    useEffect(() => {

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = props?.url;

        canvas.width = img.width;
        canvas.height = img.height;

        context.drawImage(img, 0, 0);

        // const texts = [];
        //
        // for (let i = 0; i < textArray.length; i++) {
        //     texts.push({text: textArray[i].text, x: 20, y: 150})
        // }
        //
        // context.font = "36px verdana";
        //
        // for (let i = 0; i < texts.length; i++) {
        //     let text = texts[i];
        //     text.width = context.measureText(text.text).width;
        //     text.height = 16;
        // }
        //
        // let selectedText = -1;
        //
        // const draw = () => {
        //     for (let i = 0; i < texts.length; i++) {
        //         let text = texts[i];
        //         context.fillStyle = "#CCCCCC";
        //         context.fillStyle = "blue";
        //         context.fillText(text.text, text.x, text.y);
        //         context.fill();
        //     }
        // }
        //
        // draw();
        //
        // const textHit = (x, y, textIndex) => {
        //     let text = texts[textIndex];
        //     return (x >= text.x && x <= text.x + text.width && y >= text.y - text.height && y <= text.y);
        // }
        //
        // const handleMouseDown = (e) => {
        //     e.preventDefault();
        //     startX = e.clientX - offsetX;
        //     startY = e.clientY - offsetY;
        //     console.log('asd')
        //     for (let i = 0; i < texts.length; i++) {
        //         if (textHit(startX, startY, i)) {
        //             selectedText = i;
        //         }
        //     }
        // }
        //
        // const handleMouseUp = (e) => {
        //     e.preventDefault();
        //     selectedText = -1;
        //
        // }
        //
        // const handleMouseOut = (e) => {
        //     e.preventDefault();
        //     selectedText = -1;
        // }
        //
        // const handleMouseMove = (e) => {
        //     if (selectedText < 0) {
        //         return;
        //     }
        //     e.preventDefault();
        //     let mouseX = e.clientX - offsetX;
        //     let mouseY = e.clientY - offsetY;
        //
        //     let dx = mouseX - startX;
        //     let dy = mouseY - startY;
        //     startX = mouseX;
        //     startY = mouseY;
        //
        //     let text = texts[selectedText];
        //     text.x += dx;
        //     text.y += dy;
        //     draw();
        // }

        /** =================================================================== */

        context.font = `${textArray[0].weight ? 'bold' : ''} ${textArray[0].italic ? 'italic' : ''}
         ${textArray[0].fontSize}px Verdana`;
        context.fillStyle = textArray[0].color;
        context.fillText(textArray[0].text, 100, 50,);

        context.font = `${textArray[1]?.weight ? 'bold' : ''} ${textArray[1]?.italic ? 'italic' : ''}
        ${textArray[1] ? textArray[1].fontSize : ''}px Verdana`;
        context.fillStyle = textArray[1]?.color;
        context.fillText(textArray[1] ? textArray[1]?.text : '', 100, 100,);

        context.font = `${textArray[2]?.weight ? 'bold' : ''} ${textArray[2]?.italic ? 'italic' : ''}
        ${textArray[2] ? textArray[2].fontSize : ''}px Verdana`;
        context.fillStyle = textArray[2]?.color;
        context.fillText(textArray[2] ? textArray[2]?.text : '', 100, 150,);

        context.font = `${textArray[3]?.weight ? 'bold' : ''} ${textArray[3]?.italic ? 'italic' : ''}
        ${textArray[3] ? textArray[3].fontSize : ''}px Verdana`;
        context.fillStyle = textArray[3]?.color;
        context.fillText(textArray[3] ? textArray[3]?.text : '', 100, 200,);

        context.font = `${textArray[4]?.weight ? 'bold' : ''} ${textArray[4]?.italic ? 'italic' : ''}
        ${textArray[4] ? textArray[4].fontSize : ''}px Verdana`;
        context.fillStyle = textArray[4]?.color;
        context.fillText(textArray[4] ? textArray[4]?.text : '', 100, 250,);

        /** =================================================================== */

        const dataURL = canvas.toDataURL('image/jpeg', 1.0);
        dispatch(getDataUrl(dataURL));

    }, [textArray, props.url, dispatch]);


    // const $canvas = document.getElementById('canvas');
    // const canvasOffset = $canvas.offsetParent;
    // const offsetX = canvasOffset.left;
    // const offsetY = canvasOffset.top;
    // const scrollX = $canvas.scrollLeft;
    // const scrollY = $canvas.scrollTop;

    // let startX;
    // let startY;
    //
    // const handleMouseDown = (e) => {
    //     e.preventDefault();
    //     startX = e.clientX - offsetX;
    //     startY = e.clientY - offsetY;
    //     console.log(e.clientX)
    //     // for (let i = 0; i < texts.length; i++) {
    //     //     if (textHit(startX, startY, i)) {
    //     //         selectedText = i;
    //     //     }
    //     // }
    // }

    return (
        <canvas
            ref={canvasRef}
            // onMouseDown={(e) => handleMouseDown(e)}
            width={588}
            height={500}
            style={{width: '588px', height: 'auto'}}
            id='canvas'/>
    );
}

export default Canvas