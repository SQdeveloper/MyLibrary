import React from 'react';
import './Book.css';

const Book = ({book}) => {
    return (
        <li className='book'>
            <img className='book-img' src={book.book.cover} alt="book-image" />
            <div className="book-right">
                <div className="book-info">
                    <h3>{book.book.title}</h3>
                    <h5>{book.book.author.name}</h5>
                    <div className="book-info-group">
                        <span>{book.book.genre}</span>
                        <span>{book.book.pages} págs</span>
                    </div>
                    <p>{book.book.synopsis}</p>
                </div>
                <button className="book-btn-addToList">Add to List</button>
            </div>
        </li>
    );
};

export default Book;