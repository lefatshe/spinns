import {WASHES} from "../../data/app-data";
import {TOGGLE_FAVORITE} from "../actions/washes";

const initialState = {
    washes: WASHES,
    availableWashes: WASHES,
    favouriteWashes: []
}

const washesReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favouriteWashes.findIndex(
                wash => wash.id === action.washId
            );
            if (existingIndex >= 0) {
                const updatedFavWashes = [...state.favouriteWashes];
                updatedFavWashes.splice(existingIndex, 1);
                return { ...state, favouriteWashes: updatedFavWashes };
            } else {
                const wash = state.washes.find(wash => wash.id === action.washId);
                return { ...state, favouriteWashes: state.favouriteWashes.concat(wash) };
            }
        default:
            return state;
    }
};

export default washesReducer;
