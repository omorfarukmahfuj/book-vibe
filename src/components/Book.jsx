import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Book = ({ item }) => {
  const { bookId, image, tags, bookName, author, category, rating } = item;

  return (
    <Link to={`book-details/${bookId}`} className="border border-[#13131326] rounded-2xl p-6">
      <div className="bg-[#F3F3F3] rounded-2xl mb-6">
        <img className="max-w-[166px] p-8 mx-auto" src={image} alt={bookName} />
      </div>
      {
        tags.map((tag, index) => <span key={index} className="bg-[#23BE0A0D] rounded-full px-4 py-2 mr-3 text-[#23BE0A] text-base font-medium inline-block whitespace-nowrap mb-4">{tag}</span>)
      }
      <h3 className="mb-4 text-[#131313] font-playfair font-bold text-2xl">{bookName}</h3>
      <p className="text-[#131313CC] text-base font-medium mb-5">By: {author}</p>
      <hr className="border-dashed mb-5" />
      <div className="font-medium text-base text-[#131313CC] flex justify-between">
        <span>{category}</span>
        <span className="flex items-center gap-2">
          {rating}
          <FaRegStar />
        </span>
      </div>
    </Link>
  );
};

Book.propTypes = {
  item: PropTypes.object
}
export default Book;