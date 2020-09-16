import { SELECT_EXAMPLE } from "./types";

const INIT_STATE = {
    example: null
};

export default (state = INIT_STATE, action) => {
    switch(action.type) {
        case SELECT_EXAMPLE: 
            return { ...state, example: action.payload };

        default: return state;
    }
};