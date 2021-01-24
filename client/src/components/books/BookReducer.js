import { ADD_BOOK, FILTER_BOOKS, FETCH_BOOKS, ADD_BOOKS, EDIT_BOOK, DELETE_BOOK } from "../../redux/actionTypes";

const initialState = [];

const BookReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOKS:
            state = action.books;
            return state;
        case ADD_BOOK:
            return [
                ...state,
                {...action.book}
            ];
        case EDIT_BOOK:
            return [
                ...state,
                {...action.book}
            ];
        case DELETE_BOOK:
            const findIndex = state.findIndex(s => s.id === action.id);
            state.splice(findIndex, 1);
            return state;
        case FILTER_BOOKS:
            return state.filter(book => 
                book.name.includes(action.filter)
            );
        case FETCH_BOOKS:
            return state;
        default:
            return state;
    }
}

export default BookReducer;
