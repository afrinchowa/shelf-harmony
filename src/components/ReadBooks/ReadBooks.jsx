import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../../utility/localStorage";

const ReadBooks = () => {
  const books = useLoaderData();

  const [readListedBooks, setReadListedBooks] = useState([]);

  useEffect(() => {
    const storedBookIds = getStoredBooks();
    if (books.length > 0) {
      // const booksListed = books.filter (book => storedBookIds.includes(book.bookId))

      const booksListed = [];
      for (const id of storedBookIds) {
        const book = books.find((book) => book.bookId === id);
        if (book) {
          booksListed.push(book);
        }
      }
      setReadListedBooks(booksListed);
      //   console.log(books,  storedBookIds,booksListed);
    }
  }, []);
  return (
    <div>
      <h2 className="text-2xl">
        Here is the book list:{readListedBooks.length}
      </h2>

      <ul></ul>
      {readListedBooks.map((book) => (
        <li key={book.bookid}>
          <div
            key={book.bookid}
            className="card card-side bg-base-100 shadow-xl"
          >
            <figure>
              <img
                src={book.image}
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{book.bookName}</h2>
              <p>{book.review}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">See More</button>
              </div>
            </div>
          </div>
          <span></span>
        </li>
      ))}
    </div>
  );
};

export default ReadBooks;
{
  /* */
}
