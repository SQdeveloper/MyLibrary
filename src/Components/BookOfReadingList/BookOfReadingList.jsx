import React, { useContext } from 'react';
import './BookOfReadingList.css';
import { ReadingListContext } from '../../Context/ReadingListContext';

const BookOfReadingList = ({book}) => {
    const {readingList, setReadingList} = useContext(ReadingListContext);

    const removeToReadingList = ()=>{
        const newList = [...readingList];
        const index = readingList.findIndex(bookOfList=> bookOfList.book.ISBN == book.ISBN);
        newList.splice(index,1);
        setReadingList(newList);        
    }

    return (
        <li className='bookOfList'>
            <img className='bookOfList-img' src={book.cover} alt="image of book" />
            <h3 className='bookOfList-title'>{book.title}</h3>
            <button onClick={removeToReadingList} className="bookOfList-btn-remove">x</button>
        </li>
    );
};

export default BookOfReadingList;