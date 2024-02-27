import React, { useContext } from 'react';
import { ReadingListContext } from '../../Context/ReadingListContext';
import './BookOfReadingList.css';

const BookOfReadingList = ({book, i}) => {
    const {readingList, setReadingList} = useContext(ReadingListContext);
    
    const removeToReadingList = ()=>{
        const bookOfList = document.querySelectorAll('.bookOfList')[i];
        bookOfList.classList.remove('animating');
        bookOfList.classList.add('animatingReverse');    
        
        setTimeout(()=>{
            const newList = [...readingList];
            const index = readingList.findIndex(bookOfList=> bookOfList.book.ISBN == book.ISBN);            
            newList.splice(index,1);
            setReadingList(newList);                
        }, 1000);
    }    

    return (
        <li className='bookOfList animating'>
            <img className='bookOfList-img' src={book.cover} alt="image of book" />
            <h3 className='bookOfList-title'>{book.title}</h3>
            <button onClick={removeToReadingList} className="bookOfList-btn-remove"><img src="/x.svg" alt="image of remove" /></button>
        </li>
    );
};

export default BookOfReadingList;