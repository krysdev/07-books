import BookShow from './BookShow';

import { useContext } from 'react';
import BooksContext from '../context/books';

function BookList({ books, onDelete, onEdit }) {
  const contextValue = useContext(BooksContext);

  const renderedBooks = books.map((el) => {
    return (
      <BookShow key={el.id} book={el} onDelete={onDelete} onEdit={onEdit} />
    );
  });

  return (
    <div className="book-list">
      {renderedBooks} - {contextValue}
    </div>
  );
}

export default BookList;
