import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    }, [])
    return (
        <div>
            <div className="flex-col justify-center items-center w-full   md:grid md:grid-cols-3 gap-x-36 gap-y-12 mt-4 mb-10 ">
            
            {
                books.map(book => <Book key={book.bookId} book={book}></Book>)
            }
            </div>
        </div>
    );
};

export default Books;