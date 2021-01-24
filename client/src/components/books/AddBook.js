import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaBook, FaCalculator, FaStickyNote, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { addBook, getBook, editBook } from '../../api/booksApi';

const AddBook = () => {
    let history = useHistory();
    const {id} = useParams();
    const [book, setBook] = useState({
        name: '',
        description: '',
        author: '',
        count: ''
    });
    const dispatch = useDispatch();
    
    const loadBook = async () => {
        const result = await getBook(id);
        setBook(result);
    };
    useEffect(() => {
        if (id) {
            loadBook();
        }
    }, []);

    const handleSubmit = e => {
        id ? dispatch(editBook(book)) : dispatch(addBook(book));
        history.push('/');
        e.preventDefault();
    }
    
    const handleChange = e => {
        const target = e.target;
        setBook({
            ...book,
            [target.name]: target.value
        });
    }
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="add-form">
                <Link to={'/'}><FaArrowLeft/></Link>
                <h2>Add/Edit Books</h2>
                <div className="input-container">
                    <i className="icon"><FaBook/></i>
                    <input className="input-field" type="text" placeholder="Book Name" 
                        value={book.name} onChange={handleChange} name="name"/>
                </div>
                <div className="input-container">
                    <i className="icon"><FaStickyNote/></i>
                    <textarea rows="4" cols="10" className="input-field" type="text" placeholder="Description"
                        value={book.description} onChange={handleChange} name="description"/>
                </div>
                <div className="input-container">
                    <i className="icon"><FaUser/></i>
                    <input className="input-field" type="text" placeholder="Author"
                        value={book.author} onChange={handleChange}  name="author"/>
                </div>
                <div className="input-container">
                    <i className="icon"><FaCalculator/></i>
                    <input className="input-field" type="number" placeholder="Count" 
                        value={book.count} onChange={handleChange} name="count"/>
                </div>
                <button type="submit" className="btn">Save</button>
            </form>
        </div>
    );
}
export default AddBook;
