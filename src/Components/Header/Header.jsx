import React from 'react';
import './Header.css';

const Header = ({amountBooks}) => {
    return (
        <header>
            <h1>MyLibrary</h1>
            <div className="available-books">
                <h3>Available Books: {amountBooks}</h3>                
            </div>
        </header>
    );
};

export default Header;