import React, { useContext } from 'react';
import Book from '../Book/Book';
import HeaderFilters from '../HeaderFilters/HeaderFilters';
import './Books.css';
import { ReadingListContext } from '../../Context/ReadingListContext';

const Books = ({books}) => {
    const {filteredBooks} = useContext(ReadingListContext);        

    return (
        <section className='books'>
            <HeaderFilters books={books}/>
            <ul className="content-books">
                {filteredBooks.map(book=>(
                    <Book key={book.book.ISBN} book={book}/>
                ))}
            </ul>
        </section>
    );
};

export default Books;