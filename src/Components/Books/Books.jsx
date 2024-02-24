import React, { useContext } from 'react';
import HeaderFilters from '../HeaderFilters/HeaderFilters';
import { ReadingListContext } from '../../Context/ReadingListContext';
import Book from '../Book/Book';
import './Books.css';

const Books = ({books}) => {
    const {filteredBooks} = useContext(ReadingListContext);        

    return (
        <section className='books'>
            <HeaderFilters books={books}/>
            <ul className="content-books">                
                {
                    filteredBooks.map(book=>(
                        <Book key={book.book.ISBN} book={book}/>
                    ))
                }
            </ul>
        </section>
    );
};

export default Books;