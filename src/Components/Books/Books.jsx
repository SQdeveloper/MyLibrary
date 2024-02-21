import React from 'react';
import './Books.css';
import Book from '../Book/Book';
import HeaderFilters from '../HeaderFilters/HeaderFilters';

const Books = ({books}) => {
    return (
        <section className='books'>
            <HeaderFilters/>
            <ul className="content-books">
                {books.map(book=>(
                    <Book key={book.book.ISBN} book={book}/>
                ))}
            </ul>
        </section>
    );
};

export default Books;