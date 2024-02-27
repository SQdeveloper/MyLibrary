import React from 'react';

const useFetch = async () => {
    try {
        const response = await fetch('https://github.com/SQdeveloper/MyLibrary/blob/main/src/DB/books.json');
        const data = await response.json();
        return data.library;
    }
    catch(err){
        console.log(err)
    }
};

export default useFetch;