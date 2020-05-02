import * as ActionTypes from './ActionTypes';

export const Rdishes = (state = { isLoading: false, errMess: null, dishes: [] }, action) => {
    switch (action.type) {
        case ActionTypes.DISHES_LOADING:
            return { ...state, isLoading: true, errMess: null, dishes: [] }
        case ActionTypes.DISHES_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, dishes: [] }
        case ActionTypes.ADD_DISHES:
            return { ...state, isLoading: false, errMess: null, dishes: action.payload }
        default:
            return state;
    }
}