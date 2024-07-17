import PropTypes from "prop-types";
import { SlLocationPin } from "react-icons/sl";
import { PiUsers } from "react-icons/pi";
import { PiNotebook } from "react-icons/pi";
import { Link } from "react-router-dom";



const TabCard = ({ book }) => {
  const { bookId, image, tags, bookName, author, category, rating, totalPages, publisher, yearOfPublishing } = book;

  return (
    <div className="border border-[#13131326] rounded-2xl p-3 md:p-6 flex flex-col md:flex-row mb-6 gap-6">
      <div className="bg-[#F3F3F3] rounded-2xl px-12 py-7">
        <img className="max-w-[130px] mx-auto" src={image} alt={bookName} />
      </div>
      <div className="w-full">
        <h2 className="mb-2 md:mb-4 text-[#131313] font-playfair font-bold text-2xl">{bookName}</h2>
        <p className="text-[#131313CC] text-base font-medium mb-3 md:mb-5">By: {author}</p>
        <div className="flex flex-col md:flex-row md:items-center mb-2 md:mb-4 gap-4">
          <p className="text-[#131313] font-bold ">Tag
            {
              tags.map((tag, index) => <span key={index} className="bg-[#23BE0A0D] rounded-full px-4 py-2 ml-3 text-[#23BE0A] text-xs md:text-base font-medium inline-block whitespace-nowrap">#{tag}</span>)
            }
          </p>
          <div className="flex items-center gap-2">
            <SlLocationPin />
            <p className="text-[#131313CC]">Year of Publishing: {yearOfPublishing}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center mb-2 md:mb-4 gap-4" >
          <div className="flex justify-center items-center gap-2 text-[#13131399]">
            <PiUsers />
            <p>Publisher: {publisher}</p>
          </div>
          <div className="flex justify-center items-center gap-2 text-[#13131399]">
            <PiNotebook />
            <p>Page {totalPages}</p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row items-center mt-4 gap-3">
          <button className="bg-[#328EFF26] rounded-full px-5 py-3 ml-3 text-[#328EFF] text-sm md:text-base">Rating: {rating}</button>
          <button className="bg-[#FFAC3326] rounded-full px-5 py-3 ml-3 text-[#FFAC33] text-sm md:text-base">Category: {category}</button>
          <Link to={`/book-details/${bookId}`} className="bg-[#23BE0A] rounded-full px-5 py-3 ml-3 text-white text-sm md:text-base font-medium">View Details</Link>
        </div>
      </div >
    </div >
  );
};
TabCard.propTypes = {
  book: PropTypes.object
}
export default TabCard;