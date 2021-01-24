import { ADD_BOOKS, ADD_BOOK, EDIT_BOOK, DELETE_BOOK } from "../redux/actionTypes";
import { client } from "./client";

export const getBooks = () => async (dispatch) => {
    const books = await client.get('/api/books');
    dispatch({type: ADD_BOOKS, books})
};

export const addBook = (book) => async (dispatch) => {
    await client.post('/api/books', book);
    dispatch({type: ADD_BOOK, book})
};

export const editBook = (book) => async (dispatch) => {
    await client.put(`/api/books/${book.id}`, book);
    dispatch({type: EDIT_BOOK, book})
};

export const deleteBook = (id) => async (dispatch) => {
    await client.delete(`/api/books/${id}`);
    dispatch({type: DELETE_BOOK, id})
};

export const getBook = async (id) => {
    return await client.get(`/api/books/${id}`);
};