import './Books.css';
import React from 'react';
import BookListItem from './BookListItem';

const BookList = ({books}) => {

    const renderedBookItems = books.map(book => 
        <BookListItem key={book.id} book={book} />
    );

    return (
        <div className="book-list">
            {renderedBookItems}
        </div>
    );
}

export default BookList;
