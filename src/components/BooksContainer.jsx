import { useEffect, useState } from "react";
import Book from './Book';

const BooksContainer = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('books_data.json')
      .then(res => res.json())
      .then(data => setData(data));
  }, [])
  return (
    <div className="mb-10 md:mb-32">
      <h2 className="font-playfair text-center mb-5 md:mb-10 font-bold text-3xl md:text-5xl">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {
          data.map(item => <Book key={item.bookId} item={item}></Book>)
        }
      </div>
    </div>
  );
};

export default BooksContainer;