import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import App from './App';

const Root = () => {
  return (
    <div className='container w-11/12 md:w-4/5 mx-auto mt-4 md:mt-6 font-work-sans'>
      <Nav />
      <Outlet>
        <App />
      </Outlet>
    </div>
  );
};

export default Root;