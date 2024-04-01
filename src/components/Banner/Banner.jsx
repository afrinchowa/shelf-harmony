import { Link } from "react-router-dom";

const Banner = () => {
  return (
    // <div className="w-[78rem] h-[34rem] bg-[#1313130D] mx-auto rounded-xl" >
    //     <div>
    //         <div>
    //             <h2 className="text-4xl">Books to freshen up your bookshelf</h2>
    //            <Link to='/listed'> <button className="bg-[#23BE0A] text-white w-[11rem] h-[4rem] font-bold work-sans rounded-xl mt-4">View The List</button></Link>
    //         </div>
    //         <div>
    //             <img src="" alt="" />
    //         </div>
    //     </div>

    // </div>
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/JCgj31Z/kelly-sikkema-AOGo3-DHi3s-I-unsplash.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Explore Your Inner World Through Books</h1>
          <p className="mb-5">
          Welcome to SelfHarmony, where the journey of self-discovery begins with the turn of a page. Immerse yourself in a sanctuary of words, where every book is a gateway to understanding, growth, and harmony. 
          </p>
          <Link to="/listed">
            {" "}
            <button className="bg-[#23BE0A] text-white w-[11rem] h-[4rem] font-bold work-sans rounded-xl mt-4">
              View The List
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
