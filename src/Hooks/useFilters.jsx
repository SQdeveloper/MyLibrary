import React from 'react';
import { Genres } from '../Components/Genres/Genres';

const useFilters = (filters, books) => {         
    return books.filter(book=>{
     return (book.book.pages >= filters.minPages && 
        (
            filters.genre === 'All' ||
            book.book.genre === Genres[filters.genre]
        ) &&
        (            
            book.book.title.toLowerCase().includes(filters.search.toLowerCase()) ||
            book.book.author.name.toLowerCase().includes(filters.search.toLowerCase()) ||
            book.book.ISBN.toLowerCase().includes(filters.search.toLowerCase())
        ))
    })    
};

export default useFilters;