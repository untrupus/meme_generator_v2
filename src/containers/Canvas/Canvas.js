import React from "react";
import html2canvas from "html2canvas";

const Test = () => {

    html2canvas(document.querySelector("#capture")).then(canvas => {
        document.body.appendChild(canvas)
    });

    return (
        <div id="capture" style={{padding: '10px', background: '#f5da55'}}>
            <h4>Hello world!</h4>
        </div>
    );
};

export default Test;