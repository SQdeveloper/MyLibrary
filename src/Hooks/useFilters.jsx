import React from 'react';

const useFilters = (filters, books) => {    
    return books.filter(book=>{
     return (book.book.pages >= filters.minPages && 
        (            
            book.book.title.toLowerCase().includes(filters.search.toLowerCase()) ||
            book.book.author.name.toLowerCase().includes(filters.search.toLowerCase()) ||
            book.book.ISBN.toLowerCase().includes(filters.search.toLowerCase())
        ))
    })    
};

export default useFilters;