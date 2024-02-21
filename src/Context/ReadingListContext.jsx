import React, { createContext } from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';

export const ReadingListContext = createContext(null);

const ReadingListContextProvider = (props)=>{    
    const [readingList, setReadingList] = useLocalStorage('readingList', [{book: {title: 'jeffe'}}]);
    const contextValue = {readingList, setReadingList};

    return(
        <ReadingListContext.Provider value={contextValue}>
            {props.children}
        </ReadingListContext.Provider>
    )
}

export default ReadingListContextProvider;