import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId,image, tags, bookName, author, category, rating } = book;
  return (
   <div>
    <Link to={`/book/${bookId}`}>
     <div >
        
      <div className=" p-6  mt-10 border-2 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
        <div className="">
            <img
          src={image}
          alt=""
          className="object-contain object-center p-6 w-full mx-auto rounded-md h-72 bg-gray-500 dark:bg-gray-500"
        />
        </div>
        <div className="text-[#23BE0A] text-xs font-semibold work-sans mt-3">
           {tags} 
        </div>
        <h2 className="text-sm font-bold mt-4">{bookName}</h2>
        <p className="font-light work-sans text-black text-sm mt-3 mb-2">By: {author}</p>
        <hr className="dashed-2" />
        <div className="flex justify-between work-sans mt-3 text-xs">
            {category}
            <div className="flex gap-2 text-center items-center work-sans">{rating} <FaRegStar /></div>
        </div>
      </div>
    </div>
    </Link>
   </div>
  );
};

export default Book;
