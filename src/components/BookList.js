import BookShow from './BookShow';

import { useContext } from 'react';
import BooksContext from '../context/books';

function BookList({ books, onDelete, onEdit }) {
  // destructurizing 'valueToShare' from 'books.js'
  const {count, incrementCount} = useContext(BooksContext);

  const renderedBooks = books.map((el) => {
    return (
      <BookShow key={el.id} book={el} onDelete={onDelete} onEdit={onEdit} />
    );
  });

  return (
    <div className="book-list">
      {count}
      <button onClick={incrementCount}>XX</button>
      {renderedBooks}
    </div>
  );
}

export default BookList;
