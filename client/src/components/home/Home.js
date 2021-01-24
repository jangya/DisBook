import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBooks } from '../../api/booksApi';
import BookList from '../books/BookList';
import Filter from '../filters/Filter';

const Home = () => {
    const dispatch = useDispatch();
    const books = useSelector(state => state.books);
    useEffect(() => {
        // if (!books.length)
        dispatch(getBooks());
    }, [books, dispatch])

    return (
        <div>
            <Filter></Filter>
            <Link to={'/books/add'}>Add Book</Link>
            <BookList books={books}></BookList>
        </div>
    );
}

export default Home;
