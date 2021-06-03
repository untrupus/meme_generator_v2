import React from 'react';
import './SingleTextBlock.css';

const SingleTextBlock = (props) => {
    return (
        <div className='addTextBlock' id={props.id}>
            <input
                name='text'
                type="text"
                value={props.text}
                placeholder='Enter your text'
                onChange={props.handler}
                className='textField field'
            />
            <input type="color"
                   className='colorField'
                   name='color'
                   onChange={props.handler}
                   value={props.color}/>
            {/*<select name="fontSize"*/}
            {/*        className='field'*/}
            {/*        onChange={props.handler}*/}
            {/*        value={props.fontSize}>*/}
            {/*    <option value={16}>16</option>*/}
            {/*    <option value={18}>18</option>*/}
            {/*    <option value={20}>20</option>*/}
            {/*    <option value={22}>22</option>*/}
            {/*    <option value={24}>24</option>*/}
            {/*    <option value={26}>26</option>*/}
            {/*    <option value={28}>28</option>*/}
            {/*    <option value={30}>30</option>*/}
            {/*    <option value={32}>32</option>*/}
            {/*    <option value={36}>36</option>*/}
            {/*    <option value={40}>40</option>*/}
            {/*</select>*/}
            <input type="text"
                   name="fontSize"
                   className='field sizeField'
                   onChange={props.handler}
                   value={props.fontSize}/>
                <button type='button'
                        onClick={props.bold}
                        className='removeBtn boldBtn'
                >B
                </button>
                <button type='button'
                        onClick={props.italic}
                        className='removeBtn italicBtn'
                >I
                </button>
                <button type='button'
                        onClick={props.remove}
                        className='removeBtn'
                >X
                </button>
        </div>
);
};

export default SingleTextBlock;