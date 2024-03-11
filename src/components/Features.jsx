import iphoneimg from "../assets/iphoneimage.png";
import iphonehand from "../assets/iphonehand.jpg";

const Features = () => {
  return (
    <div className="bg-gray-800 flex flex-col items-center justify-center sm:flex-row">
      <img src={iphoneimg} alt="iPhone" className="block sm:hidden mx-40 w-full sm:w-1/3 mb-5 sm:mb-0" />
      <div className="mx-5 sm:ml-5 sm:text-left">
        <p className="mb-5 text-white text-3xl">
          Your investment directly correlates with your share of profits.
        </p>
        <p className="text-white">Experience round-the-clock P2P trading with our platform, where buying and selling stakes is accessible 24/7.</p>
        <a href="https://urllset.onrender.com/register"
          className="button bg-white text-black hover:bg-slate-50 mx-5">
          Sign up now
        </a>
      </div>
      <img src={iphonehand} className="mt-5 block sm:hidden  w-full sm:w-1/3 sm:mb-0" alt="iphonehand" />
    </div>
  );
};

export default Features;