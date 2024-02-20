import React from 'react';

const useFetch = async () => {
    try {
        const response = await fetch('http://localhost:5173/src/DB/books.json');
        const data = await response.json();
        return data.library;
    }
    catch(err){
        console.log(err)
    }
};

export default useFetch;