import React, { useState, useEffect } from 'react';
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
        if (id) {
            dispatch(editBook(book));
        }
        else {
            dispatch(addBook(book));
        }
        
        history.push('/');
        e.preventDefault();
    }
    
    const handleChange = e => {
        const target = e.target;
        setBook({
            ...book,
            [target.name]: target.value
        });
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="add-form">
                <label>Book Name</label>
                <input type="text" name="name" value={book.name} onChange={handleChange}/>
                <label>Description</label>
                <textarea rows="4" cols="10" value={book.description} name="description" onChange={handleChange}>
                </textarea>
                <label>Author</label>
                <input type="text" name="author" value={book.author} onChange={handleChange}/>
                <label>Count</label>
                <input type="number" name="count" value={book.count} onChange={handleChange}/>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}
export default AddBook;
