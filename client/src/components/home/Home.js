import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBooks } from '../../api/booksApi';
import BookList from '../books/BookList';
import Filter from '../filters/Filter';

const debounce = (callback, wait, immediate = false) =>{
    let timeout = null 
    
    return function() {
      const callNow = immediate && !timeout
      const next = () => callback.apply(this, arguments)
      
      clearTimeout(timeout)
      timeout = setTimeout(next, wait)
  
      if (callNow) {
        next()
      }
    }
};

const Home = () => {
    const dispatch = useDispatch();
    const bookStore = useSelector(state => state.books);
    const [books, setBooks] = useState(bookStore);
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef();

    useEffect(() => {
        setIsLoading(true);
        dispatch(getBooks());
        inputRef.current = debounce(onSearchText, 500);
    }, [])

    useEffect(() => {
        if (bookStore.length > 0) {
            setBooks(bookStore);
            setIsLoading(false);
        }
      }, [bookStore]);

    const onSearchText = (text, bookStore) => {
        let filtered;
        if (text) {
            filtered = bookStore.filter((book) =>
                book.name.toLowerCase().includes(text.toLowerCase())
            );
        } else {
          filtered = bookStore;
        }
        setBooks(filtered);
      }

    const handleSearch = e => {
        const inputValue = e.target.value.trim();
        const callImmediate = e.type === 'submit';
        inputRef.current(inputValue, bookStore, callImmediate);
        e.preventDefault();
    }
    return (
        <div>
            <Filter handleSearch={handleSearch}></Filter>
            <Link to={'/books/add'}>Add Book</Link>
            <BookList books={books} isLoading={isLoading}></BookList>
        </div>
    );
}

export default Home;
