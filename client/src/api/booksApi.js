import { SET_BOOKS, FETCH_BOOKS } from "../redux/actionTypes";
import { client } from "./client";

export const getBooks = () => async (dispatch) => {
    const books = await client.get('/api/books')
        .catch(err => { 
            console.error(err);
            throw err;
        });
    dispatch({type: FETCH_BOOKS, books});
}

export const addBook = book => async (dispatch) => {
    const books = await client.post('/api/books', book)
        .catch(err => { 
            console.error(err);
            throw err;
        });
    dispatch({type: SET_BOOKS, books});
}

export const editBook = book => async (dispatch) => {
    const books = await client.put(`/api/books/${book.id}`, book)
        .catch(err => { 
            console.error(err);
            throw err;
        });
    dispatch({type: SET_BOOKS, books});
};

export const deleteBook = id => async (dispatch) => {
    const books = await client.delete(`/api/books/${id}`)
        .catch(err => { 
            console.error(err);
            throw err;
        });
    dispatch({type: SET_BOOKS, books});
};

export const getBook = async id => {
    return await client.get(`/api/books/${id}`);
};