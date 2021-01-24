import './Filter.css'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { FETCH_BOOKS, FILTER_BOOKS } from '../../redux/actionTypes';

const Filter = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleChange = e => setText(e.target.value);

    // const debounce = (fn, wait) => {
    //     let timeout = null;
    //     return function () {
    //         clearTimeout(timeout);
    //         timeout = setTimeout(() => fn.apply(this, arguments), wait);
    //     }
    // }

    // const debounceSearch = debounce((text) => {
    //     dispatch(setFilter({name: text}));
    // }, 3000);

    // const handleKeyDown = e => {
    //     // e.preventDefault();
    //     const trimmedText = text.trim();
    //     if (trimmedText) {
    //         debounceSearch(trimmedText);
    //     }
    // }

    const handleSubmit = e => {
        const trimmedText = text.trim();
        if (trimmedText) {
            dispatch({ type: FILTER_BOOKS, filter: trimmedText});
        }
        else {
            dispatch({type: FETCH_BOOKS});
        }
        e.preventDefault();
    }

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for books by name.."
                    onChange={handleChange}
                />
                <button type="submit"><FaSearch/></button>
            </form>
        </div>
    );
}

export default Filter;