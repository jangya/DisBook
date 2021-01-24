import { SET_BOOKS, FETCH_BOOKS } from "../../redux/actionTypes";

const initialState = [];

const BookReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS:
            state = action.books;
            return state;
        case SET_BOOKS:
            return action.books;
        default:
            return state;
    }
}

export default BookReducer;
