import iphonehand from "../assets/iphonehand.jpg";

const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row bg-gray-800 pt-10">
      <div className="mx-5 sm:ml-5 sm:text-left text-white">
        <p className="mb-5 text-3xl">
          Your investment directly correlates with your share of profits.
        </p>
        <p>Experience round-the-clock P2P trading with our platform, where buying and selling stakes is accessible 24/7.</p>
        <div className="flex justify-center mt-10"> {/* Centering the button */}
          <a href="https://urllset.onrender.com/register"
            className="button bg-white text-black hover:bg-gray-100">
            Create account
          </a>
        </div>
        <div className="flex justify-center my-10"><p className="text-6xl ">23% ROI</p></div>
        
      </div>
      <img src={iphonehand} className="mt-5 block sm:hidden  w-full sm:w-1/3 sm:mb-0" alt="iphonehand" />
    </div>
  );
};

export default Features;