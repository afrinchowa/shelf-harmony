import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="w-[78rem] h-[34rem] bg-[#1313130D] mx-auto rounded-xl" >
            <div>
                <div>
                    <h2 className="text-4xl">Books to freshen up your bookshelf</h2>
                   <Link to='/listed'> <button className="bg-[#23BE0A] text-white w-[11rem] h-[4rem] font-bold work-sans rounded-xl mt-4">View The List</button></Link>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Banner;