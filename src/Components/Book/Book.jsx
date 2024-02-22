import React, { useContext, useEffect, useState } from 'react';
import { ReadingListContext } from '../../Context/ReadingListContext';
import './Book.css';

const Book = ({book}) => {
    const {readingList, setReadingList} = useContext(ReadingListContext);
    const isRepeatedBook = readingList.findIndex(bookOfList=> bookOfList.book.ISBN == book.book.ISBN) >= 0 ? true : false;
    const [bookIsSaved, setBookIsSaved] = useState(isRepeatedBook);        

    const removeToReadingList = ()=>{
        const newList = [...readingList];
        const index = readingList.findIndex(bookOfList=> bookOfList.book.ISBN == book.book.ISBN);
        newList.splice(index,1);
        setReadingList(newList);

        setBookIsSaved(false)
    }
    
    const addToReadingList = ()=>{                
        if(isRepeatedBook) return;
        const newList = [...readingList];
        newList.push(book)
        setReadingList(newList);                

        setBookIsSaved(true)
    }        

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
                {bookIsSaved ? 
                    <button onClick={removeToReadingList} className="book-btn-addToList">Remove to List</button>
                    :
                    <button onClick={addToReadingList} className="book-btn-addToList">Add to List</button>
                }
            </div>
        </li>
    );
};

export default Book;