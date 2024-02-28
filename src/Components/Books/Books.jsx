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
                    filteredBooks.length > 0 ?
                        filteredBooks.map(book=>(
                            <Book key={book.book.ISBN} book={book}/>
                        ))
                    :
                    <div className='books-message-error'>
                        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#62372d" stroke-width="1.5"></circle> <path d="M9 17C9.85038 16.3697 10.8846 16 12 16C13.1154 16 14.1496 16.3697 15 17" stroke="#62372d" stroke-width="1.5" stroke-linecap="round"></path> <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="#62372d"></ellipse> <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="#62372d"></ellipse> </g></svg>
                        <h3>No books were found for the selected filters</h3>                        
                    </div>
                }
            </ul>
        </section>
    );
};

export default Books;