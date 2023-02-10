import { useContext } from 'react';
import { useState } from 'react';
import BooksContext from '../context/books';

function BookCreate() {
  const { onCreate } = useContext(BooksContext);

  const [word, setWord] = useState('');
  // console.log(word)
  const doTheJob = (e) => {
    e.preventDefault();
    onCreate(word);
    setWord('');
  };

  return (
    <div className="book-create">
      <form onSubmit={doTheJob}>
        <label>Add a book</label>
        <input
          className="input"
          onChange={(e) => setWord(e.target.value)}
          value={word}
        />
        <button className="button">Add</button>
      </form>
      {/* <button onClick={doTheJob}>Create</button> */}
    </div>
  );
}

export default BookCreate;
