import iphoneimg from "../assets/iphoneimage.png";

const Features = () => {
  return (
    <div className="bg-slate-100 flex flex-col items-center justify-center sm:flex-row">
      <img src={iphoneimg} alt="iPhone" className="block sm:hidden mx-40 shadow-4xl w-full sm:w-1/3 mb-5 sm:mb-0" />
      <div className="ml-0 sm:ml-5 text-center sm:text-left">
        <p className="mb-5 text-3xl font-semibold">
          Your investment directly correlates with your share of profits.
        </p>
        <p>Experience round-the-clock P2P trading with our platform, where buying and selling stakes is accessible 24/7.</p>
        <button
          type="submit"
          className="button inline-block rounded-full bg-blue-600 font-semibold text-white duration-300 ease-in-out hover:bg-blue-700 "
          style={{ display: 'block', margin: '0 auto' }}
        >
          Sign up now
        </button>
      </div>
    </div>
  );
};

export default Features;