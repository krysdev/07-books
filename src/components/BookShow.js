import { useContext, useState } from 'react';
import BooksContext from '../context/books';
import BookEdit from './BookEdit';

function BookShow({ book }) {
  const { onDelete } = useContext(BooksContext);

  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
    // console.log(showEdit)
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  return (
    <div className="book-show">
      <img
        className="picture"
        src={`https://picsum.photos/seed/${book.id}/150`}
        alt="picsum"
      />
      {showEdit ? (
        <BookEdit book={book} onSave={handleSubmit} />
      ) : (
        <h3>{book.title}</h3>
      )}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit (managed by css)
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          X (managed by css)
        </button>
      </div>
    </div>
  );
}

export default BookShow;
