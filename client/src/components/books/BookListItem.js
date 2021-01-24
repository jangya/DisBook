import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from '../../api/booksApi';

const BookListItem = ({ book }) => {
    const dispatch = useDispatch();
    const handleClick = e => {
        e.preventDefault();
        dispatch(deleteBook(book.id));
        // dispatch({type: "DELETE_BOOK", id: book.id});
    }
    return (
        <div className="book-list-item">
            <h3>{book.name ? book.name : '-----'}</h3>
            <p>Author: {book.author}</p>
            <p>Count: {book.count}</p>
            <Link to={`/books/edit/${book.id}`}>Edit</Link>
            <a href="#" onClick={handleClick}>Delete</a>
        </div>
    );
}
export default BookListItem;