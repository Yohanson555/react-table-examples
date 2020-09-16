import { SELECT_EXAMPLE } from './types';

export const selectExample = (code) => {
    return {
        payload: code,
        type: SELECT_EXAMPLE
    };
};