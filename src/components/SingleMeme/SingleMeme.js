import React from 'react';
import {Link} from "react-router-dom";
import './SingleMeme.css';

const SingleMeme = (props) => {
    return (
        <Link to={`/generator/${props.id}`} className='singleMeme'>
            <img src={props.url}
                 alt={props.name}
                 className='memeImg'/>
        </Link>
    );
};

export default SingleMeme;