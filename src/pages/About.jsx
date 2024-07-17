import aboutImage from "../assets/images/about.png"
const About = () => {
  return (
    <div className="container mx-auto my-12 px-6">
      <h1 className="text-center font-bold text-5xl mb-10 text-gray-800">About Book Vibe</h1>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img src={aboutImage} className="w-3/5 mx-auto" />
        </div>
        <div className="md:w-1/2 md:pl-10 text-gray-700">
          <p className="text-lg mb-5 leading-relaxed">
            Welcome to Book Vibe, your number one source for all things books. We are dedicated to providing you the best of book reviews, with an emphasis on reliability, customer service, and uniqueness.
          </p>
          <p className="text-lg mb-5 leading-relaxed">
            Founded in 2024 by Omor Faruk, Book Vibe has come a long way from its beginnings in Dhaka, Bangladesh. When Omor Faruk first started out, their passion for books drove them to start their own business.
          </p>
          <p className="text-lg mb-5 leading-relaxed">
            We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please do not hesitate to contact us.
          </p>
          <p className="text-lg font-semibold leading-relaxed text-[#23BE0A]">
            Sincerely,<br />Omor Faruk
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
