import React from 'react';
import './Modal.css';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const ModalImg = (props) => {

    return (
        <div className='modal'>
            <Modal
                isOpen={props.visible}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <img src={props.url} alt="meme" className='modalImg'/>
                <button onClick={props.close} className='closeBtn'>Close</button>
            </Modal>
        </div>
    );
};

export default ModalImg;