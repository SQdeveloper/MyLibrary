import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import ReadingListContextProvider from './Context/ReadingListContext';
import useBooks from './Hooks/useBooks';

function App() {
  const books = useBooks();
  
  return (
    <>      
      <ReadingListContextProvider>
        <Header amountBooks={books.length}/>
        {books.length > 0 && <Hero books={books}/>}
      </ReadingListContextProvider>
    </>
  )
}

export default App
