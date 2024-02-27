import React, { useContext, useEffect } from 'react';
import { ReadingListContext } from '../../Context/ReadingListContext';
import BookOfReadingList from '../BookOfReadingList/BookOfReadingList';
import './ReadingList.css';

const ReadingList = () => {
    const {readingList} = useContext(ReadingListContext);    

    const activeAnimation = ()=>{
        const ulReadingList = document.querySelector('.readingList');
        ulReadingList.classList.toggle('active');
    }

    useEffect(()=>{
        const buttonReadingList = document.querySelector('.btn-readingList svg');
        buttonReadingList.classList.add('active');

        setTimeout(()=>{
            buttonReadingList.classList.remove('active');
        }, 800)
    }, [readingList]);    

    return (
        <>
            <button onClick={activeAnimation} className='btn-readingList'>
                <svg aria-label="Imagen de marcador" viewBox="-5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#b36443" stroke="#784134" role="img"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.16"></g><g id="SVGRepo_iconCarrier"><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-305.000000, -2679.000000)" fill="#784134"><g id="icons" transform="translate(56.000000, 160.000000)"><polygon id="bookmark_fill-[#784134]" points="259 2519 259 2539 254 2534 249 2539 249 2519"></polygon></g></g></g></g></svg>
                <span>Reading List <br></br> {readingList.length}</span>
            </button>
            <ul className='readingList'>
                {readingList.length > 0 && 
                    readingList.map((book,index)=>(
                        <BookOfReadingList key={book.book.ISBN} i={index} book={book.book}/>
                ))}
            </ul>
        </>
    );
};

export default ReadingList;