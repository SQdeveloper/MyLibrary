import React, { useContext } from 'react';
import { ReadingListContext } from '../../Context/ReadingListContext';
import './ReadingList.css';
import BookOfReadingList from '../BookOfReadingList/BookOfReadingList';

const ReadingList = () => {
    const {readingList} = useContext(ReadingListContext);

    const activeAnimation = ()=>{
        const ulReadingList = document.querySelector('.readingList');
        ulReadingList.classList.toggle('active');
    }

    return (
        <>
            <button onClick={activeAnimation} className='btn-readingList'>
                <svg aria-label="Imagen de marcador" viewBox="-5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#b36443" stroke="#784134" role="img"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.16"></g><g id="SVGRepo_iconCarrier"><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-305.000000, -2679.000000)" fill="#784134"><g id="icons" transform="translate(56.000000, 160.000000)"><polygon id="bookmark_fill-[#784134]" points="259 2519 259 2539 254 2534 249 2539 249 2519"></polygon></g></g></g></g></svg>
                <span>Reading List</span>
            </button>
            <ul className='readingList'>
                {readingList.map((book,index)=>(
                    <BookOfReadingList/>
                ))}
            </ul>
        </>
    );
};

export default ReadingList;