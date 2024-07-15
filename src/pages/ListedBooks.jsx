import { IoChevronDown } from "react-icons/io5";

const ListedBooks = () => {
  return (
    <div>
      <div className="bg-[#1313130D] rounded-2xl "><h2 className="font-bold text-xl text-center py-8 my-4 md:my-8">Books</h2></div>
      <div className="flex justify-center mb-7 md:mb-10">
        <details className="dropdown">
          <summary className="btn m-1 bg-[#23BE0A] hover:bg-success text-white">Sort By <IoChevronDown />

          </summary>
          <ul className="menu dropdown-content bg-base-200 rounded-box z-[1] w-52 p-2 shadow">
            <li><a>Rating</a></li>
            <li><a>Number of pages</a></li>
            <li><a>Publisher year</a></li>
          </ul>
        </details>
      </div>

      <div role="tablist" className="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" className="tab " aria-label="Read Books" />
        <div role="tabpanel" className="tab-content bg-base-100 border-x-0 border-b-0 border-base-300 p-6">
          
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wishlist Books"
          defaultChecked />
        <div role="tabpanel" className="tab-content bg-base-100 border-x-0 border-b-0 border-base-300 p-6">
          Tab content 2
        </div>

      </div>

    </div>
  );
};

export default ListedBooks;