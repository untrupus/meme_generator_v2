import {
    FETCH_MEMES_SUCCESS,
    FETCH_MEMES_FAILURE,
    GET_SINGLE_MEME_SUCCESS,
    GET_SINGLE_MEME_FAILURE,
    GET_DATA_URL
} from "./actionTypes";
import axios from "axios";

const fetchMemesSuccess = data => {
    return {type: FETCH_MEMES_SUCCESS, data};
};

const fetchMemesFailure = error => {
    return {type: FETCH_MEMES_FAILURE, error};
};

export const fetchMemes = () => {
    return async dispatch => {
        try {
            const response = await axios.get('https://api.imgflip.com/get_memes');
            dispatch(fetchMemesSuccess(response.data.data.memes));
        } catch (e) {
            dispatch(fetchMemesFailure(e));
        }
    }
};

const getSingleMemeSuccess = data => {
    return {type: GET_SINGLE_MEME_SUCCESS, data};
};

const getSingleMemeFailure = error => {
  return {type: GET_SINGLE_MEME_FAILURE};
};

export const getSingleMeme = id => {
    return async dispatch => {
        try {
            const response = await axios.get('https://api.imgflip.com/get_memes');
            const singleMeme = response.data.data.memes.find(meme => meme.id === id);
            dispatch(getSingleMemeSuccess(singleMeme));
        } catch (e) {
            dispatch(getSingleMemeFailure(e));
        }
    }
}

export const getDataUrl = url => {
    return {type: GET_DATA_URL, url};
}
