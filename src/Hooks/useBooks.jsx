import React, { useEffect, useState } from 'react';
import useFetch from './useFetch';

const useBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        getBooks();
    }, []);

    const getBooks = async ()=>{
        const newBooks = await useFetch();
        setBooks(newBooks);
    }

    return books;
};

export default useBooks;