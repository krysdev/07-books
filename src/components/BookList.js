import BookShow from './BookShow';

// import { useContext } from 'react';
// import BooksContext from '../context/books';
import useBooksContext from '../hooks/use-books-context';

function BookList() {
  // const { books } = useContext(BooksContext);

  // CUSTOM HOOK
  const { books } = useBooksContext();

  const renderedBooks = books.map((el) => {
    return <BookShow key={el.id} book={el} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
