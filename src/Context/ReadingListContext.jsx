import React, { createContext, useState } from 'react';
import ReadingList from '../Components/ReadingList/ReadingList';

export const ReadingListContext = createContext(null);

const ReadingListContextProvider = (props)=>{
    const [readingList, setReadingList] = useState([]);
    const contextValue = {readingList};

    return(
        <ReadingListContext.Provider value={contextValue}>
            {props.children}
        </ReadingListContext.Provider>
    )
}

export default ReadingListContextProvider;