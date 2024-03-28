import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveBooks } from "../../utility/localStorage";
const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const idInt = parseInt(bookId);
  const book = books.find((book) => book.bookId === idInt);
  console.log(book);
  const handleWishlist = () => {
    saveBooks(idInt);
    toast("You Have Added successfully to the Wishlist");
  };
  const handleRead = () => {
    saveBooks(idInt);
    toast("You Have Added successfully to the Reading");
  };

  return (
    <div className="hero h-Auto w-auto bg-slate-100">
      <div className="hero-content bg-slate-200 p-16 flex-col gap-12 lg:flex-row">
        <img src={book.image} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="">
          <h1 className="text-5xl font-bold mb-3">BookName:{book.bookName}</h1>
          <h2 className="p-2 border-y-2 border-slate-400">
            Author:{book.author}
          </h2>
          <h2 className="p-2 border-y-2 border-slate-400">
            Category:{book.category}
          </h2>
          <p className="py-6 px-2">Review:{book.review}</p>
          <div className="p-2">
            <h2>Tags:{book.tags}</h2>
            <h2>TotalPage:{book.totalPages}</h2>
            <h2>Publisher:{book.publisher}</h2>
            <h2>Year Of Publishing:{book.yearOfPublishing}</h2>
            <h2>Rating:{book.rating}</h2>
          </div>
          <button onClick={handleRead}  className=" mt-4 btn btn-accent mr-5">
            Read
          </button>
          <button onClick={handleWishlist} className=" btn btn-outline">
            WishList{" "}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
