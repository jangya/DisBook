import './Filter.css'
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Filter = ({handleSearch}) => {

    return (
        <div className="search-container">
            <form onSubmit={handleSearch} >
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for books by name.."
                    onChange={handleSearch}
                />
                <i className="search-icon"><FaSearch/></i>
            </form>
        </div>
    );
}

export default Filter;