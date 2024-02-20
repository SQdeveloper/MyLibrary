import React, { useContext } from 'react';
import { ReadingListContext } from '../../Context/ReadingListContext';

const ReadingList = () => {
    const {readingList} = useContext(ReadingListContext);

    return (
        <>
            <button>Reading List</button>
            <ul>
                {readingList.map((book,index)=>(
                    <li key={index}>{book.book.title}</li>
                ))}
            </ul>
        </>
    );
};

export default ReadingList;