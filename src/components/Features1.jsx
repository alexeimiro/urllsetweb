import iphoneimage2 from "../assets/Iphoneimage2.png";

const Features1 = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center">
      <div className="md:w-1/3 ">
        <img src={iphoneimage2} alt="" />
      </div>
      <div className="md:w-1/3 px-4 mb-5">
        <p className="text-4xl md:text-6xl sm:text-4xl font-light mb-5">Elevate your investment strategy</p>
        <p className="text-xl md:text-xl sm:text-4xl">Property crowdfunding offers a chance to invest in real estate and earn passive income, presenting a more secure alternative to the higher risks associated with trading money on forex and other platforms.</p>
      </div>
    </div>
  );
};

export default Features1;
