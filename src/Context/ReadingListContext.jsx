import React, { createContext, useState } from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';

export const ReadingListContext = createContext(null);

const ReadingListContextProvider = (props)=>{    
    const [readingList, setReadingList] = useLocalStorage('readingList', []);    
    const [filteredBooks, setFilteredBooks] = useState([]);
    const contextValue = {readingList, setReadingList, filteredBooks, setFilteredBooks};

    return(
        <ReadingListContext.Provider value={contextValue}>
            {props.children}
        </ReadingListContext.Provider>
    )
}

export default ReadingListContextProvider;