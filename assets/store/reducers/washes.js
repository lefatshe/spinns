import {WASHES} from "../../../app/data/app-data";

const initialState = {
    washes: WASHES,
    favourites: [],
}

const washesReducer = (state = initialState, action) => {
    return state
}

export default washesReducer
