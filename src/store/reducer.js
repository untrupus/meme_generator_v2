import {
    FETCH_MEMES_SUCCESS,
    FETCH_MEMES_FAILURE,
    GET_SINGLE_MEME_SUCCESS,
    GET_SINGLE_MEME_FAILURE,
    GET_DATA_URL
} from "./actionTypes";

const initialState = {
    memes: [],
    singleMeme: null,
    fetchMemesError: null,
    fetchSingleMemeError: null,
    dataUrl: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MEMES_SUCCESS:
            return {...state, memes: action.data, fetchMemesError: null, singleMeme: null};
        case FETCH_MEMES_FAILURE:
            return {...state, fetchMemesError: action.error};
        case GET_SINGLE_MEME_SUCCESS:
            return {...state, singleMeme: action.data, fetchSingleMemeError: null};
        case GET_SINGLE_MEME_FAILURE:
            return {...state, fetchSingleMemeError: action.error};
        case GET_DATA_URL:
            return {...state, dataUrl: action.url};
        default:
            return {...state};
    }
};

export default reducer;