import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ReadingListContext } from '../../Context/ReadingListContext';
import useFilters from '../../Hooks/useFilters';
import HighestNumberOfPages from '../Utils/HighestNumberOfPages';
import debounce from 'just-debounce-it';
import './HeaderFilters.css';

const HeaderFilters = ({books}) => {
    const [minPages, setMinPages] = useState(0);    
    const [filters, setFilters] = useState({search: '', minPages: 0, genre: 'All'});
    const {setFilteredBooks} = useContext(ReadingListContext);        
    const maxPage = HighestNumberOfPages(books);    

    useEffect(()=>{
        const newFiltereBooks = useFilters(filters, books);
        setFilteredBooks(newFiltereBooks);        
    }, [filters])
    
    const applyFiltersSearch = debounce((e)=>{        
        setFilters(prevFilters=>(
            {...prevFilters,
                search: e.target.value
            }
        ))                        
    }, 300);

    const applyFiltersMinPages = useCallback(debounce((e)=>{                                        
        setFilters(prevFilters=>({
            ...prevFilters,
            minPages: e.target.value
        }))
    }, 200), []);

    const applyFiltersGenre = (e)=>{        
        setFilters(prevFilters=>({
            ...prevFilters,
            genre: e.target.value
        }))        
    }
    
    const changeValue = (e)=>{
        setMinPages(e.target.value);        
    }
    
    return (
        <ul className='headerFilters'>
           <li className="headerFilters-filter">
                <h3 className='headerFilters-filter-name'>Search:</h3>
                <div className='headerFilters-search'>
                    <input onChange={applyFiltersSearch} type="text" placeholder='Search by author, title or ISBN'/>
                    <svg className='headerFilters-search-svg' viewBox="-2 -2 30 30" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <path id="search-a" d="M11.7099609,0.572509766 C9.46940104,1.29012044 7.99951172,3.05419922 7.30029297,5.86474609 C6.25146484,10.0805664 4.95166016,10.6181641 0.719970703,9.11865234 C2.23974609,11.9257813 5.32006836,13.0512695 7.30029297,13.0512695 C9.28051758,13.0512695 14.4091797,10.2941895 13.8215332,5.0534668 C13.3114421,3.52709961 12.6075846,2.03344727 11.7099609,0.572509766 Z"></path> <path id="search-c" d="M14.1791377,12.7701494 L19.7100661,18.3101411 C20.0966446,18.6967197 20.0966446,19.3234875 19.7100661,19.7100661 C19.3234875,20.0966446 18.6967197,20.0966446 18.3101411,19.7100661 L12.7803471,14.1712106 C11.4385246,15.2160226 9.75152329,15.8383427 7.91917136,15.8383427 C3.54553379,15.8383427 0,12.2928089 0,7.91917136 C0,3.54553379 3.54553379,0 7.91917136,0 C12.2928089,0 15.8383427,3.54553379 15.8383427,7.91917136 C15.8383427,9.74688445 15.2191696,11.4299819 14.1791377,12.7701494 Z M7.91917136,13.8585499 C11.1993995,13.8585499 13.8585499,11.1993995 13.8585499,7.91917136 C13.8585499,4.63894318 11.1993995,1.97979284 7.91917136,1.97979284 C4.63894318,1.97979284 1.97979284,4.63894318 1.97979284,7.91917136 C1.97979284,11.1993995 4.63894318,13.8585499 7.91917136,13.8585499 Z"></path> </defs> <g fill="none" fillRule="evenodd" transform="translate(2 2)"> <g transform="translate(1 2)"> <mask id="search-b" fill="#ffffff"> <use xlinkHref="#search-a"></use> </mask> <use fill="#D8D8D8" xlinkHref="#search-a"></use> <g fill="#FFA0A0" mask="url(#search-b)"> <rect width="24" height="24" transform="translate(-3 -4)"></rect> </g> </g> <mask id="search-d" fill="#ffffff"> <use xlinkHref="#search-c"></use> </mask> <use fill="#000000" fillRule="nonzero" xlinkHref="#search-c"></use> <g fill="#ffffff" mask="url(#search-d)"> <rect width="24" height="24" transform="translate(-2 -2)"></rect> </g> </g> </g></svg>
                </div>
           </li>
           <li className="headerFilters-filter">
                <h3 className='headerFilters-filter-name'>Min Pages:</h3>                                
                <input onChange={(e)=>{applyFiltersMinPages(e);changeValue(e);}} className='headerFilters-filter-minPages' value={minPages}  max={maxPage} type='range'/>
                <span>{minPages} pags.</span>
           </li>
           <li className="headerFilters-filter">
                <h3 className='headerFilters-filter-name'>Genre:</h3>
                <select onChange={applyFiltersGenre} className='headerFilters-filter-genre'>
                    <option>All</option>
                    <option>Horror</option>
                    <option>Fantasy</option>
                    <option>Science Fiction</option>
                    <option>Zombies</option>
                </select>
           </li>
        </ul>
    );
};

export default HeaderFilters;