import { createContext, useCallback, useState } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  // const stableFetchBooks = useCallback ( fetchBooks, [] );

  const fetchBooks = useCallback(async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  }, []);

  // receives title from BookCreate.js (it is called 'word' there)
  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title: title,
    });
    // response > data  is the object returned by the JSON server: { id : given by server, title: SomeTitle }
    const updatedBooksArrayState = [...books, response.data];
    setBooks(updatedBooksArrayState);
  };

  const deleteBookByID = async (idToRemove) => {
    await axios.delete(`http://localhost:3001/books/${idToRemove}`);
    const updatedBooks = books.filter((booksArrayElement, index) => {
      return booksArrayElement.id !== idToRemove;
    });
    setBooks(updatedBooks);
  };

  const editBookByID = async (idToEdit, titleToBeChanged) => {
    const response = await axios.put(
      `http://localhost:3001/books/${idToEdit}`,
      {
        title: titleToBeChanged,
      }
    );

    const updatedBooks = books.map((el) => {
      if (el.id === idToEdit) {
        // just in case other properties could change in the meantime (i.e. title AND pages) we update all propertise that changed (...response.data)
        // 'response.data' is the returned by the server updated record (an element of the array -> an object { id, title })
        return { ...el, ...response.data };
      }
      // else
      return el;
    });
    setBooks(updatedBooks);
    // console.log(idToEdit, titleToBeChanged)
  };

  const valueToShare = {
    books, // array of objects
    onCreate: createBook,
    onDelete: deleteBookByID,
    onEdit: editBookByID,
    fetchBooks,
    // stableFetchBooks
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;

// import BooksContext, {Provider} from './some/books.js'
