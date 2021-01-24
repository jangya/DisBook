import './Books.css';
import React from 'react';
import BookListItem from './BookListItem';

const BookList = ({ books, isLoading }) => {

    const renderedBookItems = books.map(book => 
        <BookListItem key={book.id} book={book} />
    );

    return (
        <div className="book-list">
            {isLoading ? (
                <p className="loading">Loading...</p>
            ): renderedBookItems}
        </div>
    );
}

export default BookList;
