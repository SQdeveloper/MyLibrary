import './App.css'
import Books from './Components/Books/Books';
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import ReadingListContextProvider from './Context/ReadingListContext';
import useBooks from './Hooks/useBooks';

function App() {
  const books = useBooks();
  
  return (
    <>      
      <ReadingListContextProvider>
        <Header/>
        {books.length > 0 && <Hero books={books}/>}
        <Books books={books}/>
      </ReadingListContextProvider>
    </>
  )
}

export default App
