import React, { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(()=>{
        try {
            const item = localStorage.getItem(key);

            return item ? JSON.parse(item) : initialValue;
        }
        catch{
            return initialValue;
        }
    });

    const setValue = (value)=>{
        try {
            setStoredValue(value);
            localStorage.setItem(key, JSON.stringify(value));
        }
        catch(error){
            console.lor(error);
        }
    }

    return [storedValue, setValue];
};

export default useLocalStorage;