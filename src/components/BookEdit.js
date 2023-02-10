import { useContext, useState } from 'react';
import BooksContext from '../context/books';

function BookEdit({ book, onSave }) {
  const {onEdit} = useContext(BooksContext)

  const [updatedTitle, setUpdatedTitle] = useState(book.title);

  const handleChange = (e) => {
    setUpdatedTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(); // close the form
    onEdit(book.id, updatedTitle);
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <input
        className="input"
        value={updatedTitle}
        onChange={handleChange}
        type="text"
      />
      <button className="button" onClick={handleSubmit}>
        Save
      </button>
    </form>
  );
}

export default BookEdit;
