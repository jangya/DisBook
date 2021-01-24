import './Header.css';
import React from 'react';
import logo from './DisBook.png';

function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="slogan">
                Take a good <b>book</b> to bed with you...
            </p>
        </header>
    );
}

export default Header;
