import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const book = books.find(book => book.bookId === id)
  const { bookName, image, tags, author, review, totalPages, publisher, yearOfPublishing, category, rating } = book;
  return (
    <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between gap-6 md:gap-12 my-6 md:my-12 md:h-screen">
      {/* Component Left */}
      <div className="p-10 md:p-20 bg-[#1313130D] rounded-2xl w-full md:w-2/4 flex justify-center items-center">
        <img className="h-5/6" src={image} alt={bookName} />
      </div>
      {/* Component Right */}
      <div className="md:w-2/4">
        <h1 className="font-playfair font-bold text-[40px] text-[#131313] mb-5">{bookName}</h1>
        <p className="font-medium text-xl text-[#131313CC] mb-5">By: {author}</p>
        <hr />
        <p className="font-medium text-xl text-[#131313CC] my-5">{category}</p>
        <hr />
        <p className="text-[#131313] font-bold my-5">Review: <span className="text-[#131313B3] font-normal">{review}</span></p>

        <p className="my-7 text-[#131313] font-bold">Tag
          {
            tags.map((tag, index) => <span key={index} className="bg-[#23BE0A0D] rounded-full px-4 py-2 ml-3 text-[#23BE0A] text-base font-medium inline-block whitespace-nowrap">{tag}</span>)
          }</p>
        <hr />
        <div className="mt-6 flex gap-12">
          <div className="text-[#131313B3] flex flex-col gap-3">
            <p>Number of Pages:</p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p>Rating:</p>
          </div>

          <div className="text-[#131313] font-semibold flex flex-col gap-3">
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>

        </div>
        <button className="btn bg-transparent hover:bg-success text-[#131313] hover:text-white mr-4 shadow-none border-[#1313134D] hover:border-none mt-8">Read</button>
        <button className="btn bg-[#59C6D2] hover:bg-info text-white">Wishlist</button>
      </div>
    </div>
  );
};

export default BookDetails;