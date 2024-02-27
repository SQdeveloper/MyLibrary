import React, { useEffect, useState } from 'react';
import {library} from '../DB/books.json';

const useBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        getBooks();
    }, []);

    const getBooks = async ()=>{
        const newBooks = library;
        setBooks(newBooks);
    }

    return books;
};

export default useBooks;