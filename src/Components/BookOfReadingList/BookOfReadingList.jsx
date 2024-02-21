import React from 'react';
import './BookOfReadingList.css';

const BookOfReadingList = () => {
    return (
        <li className='bookOfList'>
            <img className='bookOfList-img' src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1422626176i/24762432.jpg" alt="" />
            <h3 className='bookOfList-title'>title</h3>
        </li>
    );
};

export default BookOfReadingList;