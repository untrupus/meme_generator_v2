import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {fetchMemes} from "../../store/actions";
import SingleMeme from "../../components/SingleMeme/SingleMeme";
import ErrorNotice from "../../components/ErrorNotice/ErrorNotice";
import './MemesList.css';

const MemesList = () => {
    const memes = useSelector(state => state.memes);
    const fetchError = useSelector(state => state.fetchMemesError)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMemes());
    }, [dispatch]);

    const allMemes = memes.map(meme => {
        return (
            <SingleMeme
                url={meme.url}
                name={meme.name}
                key={meme.id}
                id={meme.id}
            />
        )
    });

    return (
        <div className='memesList'>
            <h2>Choose meme...</h2>
            <div className='memesListInner'>
                {fetchError ? <ErrorNotice/> : allMemes}
            </div>
        </div>
    );
};

export default MemesList;