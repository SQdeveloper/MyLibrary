import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const Hero = ({books}) => {
    const booksToShow = books.slice(0,5);    
    const [count, setCount] = useState(0);
    
    const action = ()=>{
        const interval = setInterval(()=>{                                           
            setCount(prevCount => {
                if(prevCount===4) return 0
                else return prevCount+1               
            });                                    
        }, 6000);        
        return ()=> clearInterval(interval);
    }
    
    useEffect(action, []);

    return (
        <section className='hero'>
            <div className="hero-slider">                
                <div className="hero-info">                    
                    <p>{booksToShow[count]?.book.synopsis}</p>
                    <h3>{booksToShow[count]?.book.title}</h3>
                </div>
                <div className="hero-contImage">
                    <img src={booksToShow[count]?.book.cover} alt="image-book" />
                </div>
            </div>
        </section>
    );
};

export default Hero;