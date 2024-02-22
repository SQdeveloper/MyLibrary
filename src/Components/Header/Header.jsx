import React, { useContext } from 'react';
import ReadingList from '../ReadingList/ReadingList';
import { ReadingListContext } from '../../Context/ReadingListContext';
import './Header.css';

const Header = () => {    
    const {readingList} = useContext(ReadingListContext);

    return (
        <header>
            <h1>MyLibrary</h1>
            <div className="available-books">
                <h3>Available Books: {readingList.length}</h3>                
            </div>
            <ReadingList/>
        </header>
    );
};

export default Header;