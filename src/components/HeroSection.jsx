import heroCover from '../assets/images/heroCover.png'
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return (
    <header className="hero bg-[#1313130D] md:py-20 mt-3 md:px-[120px] md:mt-6 rounded-3xl mb-10 md:mb-24">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={heroCover} />
        <div>
          <h1 className="font-playfair text-4xl md:text-[56px] font-bold mb-5 md:mb-12 text-center md:text-left md:leading-[84px]">Books to freshen up your bookshelf</h1>
          <div className='w-full flex justify-center md:justify-start'>
            <Link to="/listed-books" className="font-work-sans btn bg-[#23BE0A] hover:bg-success text-white">Listed Books</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;