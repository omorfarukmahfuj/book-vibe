import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-2xl mb-8">Oops! Page not found.</p>
        <Link to="/" className="bg-[#23BE0A] text-white px-6 py-3 rounded-lg hover:bg-success transition duration-300">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
