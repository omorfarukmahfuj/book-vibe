import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar bg-base-100 p-0">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden px-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow flex-col">
            <li className={`btn bg-transparent border-none shadow-none hover:bg-transparent text-base font-normal pl-0`}><NavLink className={({ isActive }) => isActive ? 'font-semibold bg-[#23BE0A] text-white' : 'text-#[131313CC]'} to="/">Home</NavLink></li>
            <li className={`btn bg-transparent border-none shadow-none hover:bg-transparent text-base font-normal pl-0`}><NavLink className={({ isActive }) => isActive ? 'font-semibold bg-[#23BE0A] text-white' : 'text-#[131313CC]'} to="/listed-books">Listed Books</NavLink></li>
            <li className={`btn bg-transparent border-none shadow-none hover:bg-transparent text-base font-normal pl-0`}><NavLink className={({ isActive }) => isActive ? 'font-semibold bg-[#23BE0A] text-white' : 'text-#[131313CC]'} to="/pages-to-read">Pages to Read</NavLink></li>
            <li className={`btn bg-transparent border-none shadow-none hover:bg-transparent text-base font-normal pl-0`}><NavLink className={({ isActive }) => isActive ? 'font-semibold bg-[#23BE0A] text-white' : 'text-#[131313CC]'} to="/about">About</NavLink></li>
            <br />
            <li className={`btn bg-transparent border-none shadow-none hover:bg-transparent text-base font-normal pl-0`}><NavLink className={({ isActive }) => isActive ? 'font-semibold bg-[#23BE0A] text-white' : 'text-#[131313CC]'} to="/contacts">Contacts</NavLink></li>

          </ul>
        </div>
        <a className="text-[22px] md:text-[28px] font-bold break-normal mx-4 md:ml-0 whitespace-nowrap ">Book Vibe</a>
      </div>
      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1">
          <li className={`btn bg-transparent border-none shadow-none hover:bg-transparent text-base font-normal`}><NavLink className={({ isActive }) => isActive ? 'font-semibold px-5 py-3 text-[#23BE0A] border border-[#23BE0A] rounded-lg' : 'px-5 py-2 text-#[131313CC]'} to="/">Home</NavLink></li>
          <li className={`btn bg-transparent border-none shadow-none hover:bg-transparent text-base font-normal`}><NavLink className={({ isActive }) => isActive ? 'font-semibold px-5 py-3 text-[#23BE0A] border border-[#23BE0A] rounded-lg' : 'px-5 py-2 text-#[131313CC]'} to="/listed-books">Listed Books</NavLink></li>
          <li className={`btn bg-transparent border-none shadow-none hover:bg-transparent text-base font-normal`}><NavLink className={({ isActive }) => isActive ? 'font-semibold px-5 py-3 text-[#23BE0A] border border-[#23BE0A] rounded-lg' : 'px-5 py-2 text-#[131313CC]'} to="/pages-to-read">Pages to Read</NavLink></li>
          <li className={`btn bg-transparent border-none shadow-none hover:bg-transparent text-base font-normal`}><NavLink className={({ isActive }) => isActive ? 'font-semibold px-5 py-3 text-[#23BE0A] border border-[#23BE0A] rounded-lg' : 'px-5 py-2 text-#[131313CC]'} to="/about">About</NavLink></li>
          <li className={`btn bg-transparent border-none shadow-none hover:bg-transparent text-base font-normal`}><NavLink className={({ isActive }) => isActive ? 'font-semibold px-5 py-3 text-[#23BE0A] border border-[#23BE0A] rounded-lg' : 'px-5 py-2 text-#[131313CC]'} to="/contacts">Contacts</NavLink></li>
        </ul>
      </div>
      {/* Navbar End */}
      <div className="navbar-end gap-2 md:gap-4 ml-6">
        <a className="btn bg-[#23BE0A] hover:bg-success text-white">Sign In</a>
        <a className="btn bg-[#59C6D2] hover:bg-info text-white">Sign Up</a>
      </div>
    </nav>
  );
};

export default Nav;