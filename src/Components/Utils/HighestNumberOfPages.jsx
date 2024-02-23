import React, { useState } from 'react';

const HighestNumberOfPages = (books) => {    
    let maxPage = 0;

    books.forEach(book=>{        
        if(book.book.pages > maxPage ) {
            maxPage = book.book.pages;
        }
    }
    )

    return maxPage;
};

export default HighestNumberOfPages;