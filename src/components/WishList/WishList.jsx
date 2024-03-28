import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../../utility/localStorage";

const WishList = () => {
  const books = useLoaderData();

  const [wishListedBooks, setWishListedBooks] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);
  const [sortBy, setSortBy] = useState("");

  // const handleBooksFilter = (filter) => {
  //   if (filter === 'all') {
  //     setDisplayBooks(wishListedBooks);
  //   } else if(filter === 'rating') {
  //     setDisplayBooks(wishListedBooks);
  //     // Handle other filters
  //   }
  //    else if(filter === 'pages') {
  //     setDisplayBooks(wishListedBooks);
  //     // Handle other filters
  //   }
  //   else if(filter === 'year') {
  //     setDisplayBooks(wishListedBooks);
  //     // Handle other filters
  //   }
  // };

  useEffect(() => {
    const storedBookIds = getStoredBooks();
    if (books.length > 0) {
      const booksListed = [];
      for (const id of storedBookIds) {
        const book = books.find((book) => book.bookId === id);
        if (book) {
          booksListed.push(book);
        }
      }
      setWishListedBooks(booksListed);
      setDisplayBooks(booksListed);
    }
  }, [books]);

  useEffect(() => {
    // Sort books based on selected option
    if (sortBy === "rating") {
      const sortedBooks = [...wishListedBooks].sort((a, b) => b.rating - a.rating);
      setDisplayBooks(sortedBooks);
    } else if (sortBy === "pages") {
      const sortedBooks = [...wishListedBooks].sort((a, b) => a.totalPages - b.totalPages);
      setDisplayBooks(sortedBooks);
    } else if (sortBy === "year") {
      const sortedBooks = [...wishListedBooks].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
      setDisplayBooks(sortedBooks);
    }
  }, [sortBy, wishListedBooks]);

  return (
    <div>
      <h2 className="text-2xl">Here is the book list: {wishListedBooks.length}</h2>
      <details className="dropdown">
        <summary className="m-1 btn">Sort by</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li><a onClick={() => setSortBy("rating")}>Rating</a></li>
          <li><a onClick={() => setSortBy("pages")}>Number of Pages</a></li>
          <li><a onClick={() => setSortBy("year")}>Published Year</a></li>
        </ul>
      </details>
      <ul>
        {displayBooks.map((book) => (
          <li key={book.bookId}>
            <img src={book.image} alt={book.bookName} />
            <span>{book.bookName}</span>: {book.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WishList;
