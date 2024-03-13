import React from 'react';
import iphoneimg from "../assets/iphoneimage.png";
import SignUpForm from "./SignUpForm";
import badgePercent from "../assets/badge-percent.png";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center mt-20">
      <div className="md:w-1/3">
        <img src={iphoneimg} className="hidden md:block" alt=""  />
      </div>
      <div className="md:w-1/3 px-4">
      <h3 className="flex blue font-medium">
            <span>
              <img src={badgePercent} className='pr-1' alt="badgepercent" />
            </span>{" "}
            Investment made easy
          </h3>
        <p className="text-4xl md:text-6xl sm:text-4xl font-light mb-5">Crowdfunding real estate investment made easy</p>
        <p className="text-xl md:text-xl sm:text-4xl mb-10">Your capital has the potential to earn up to 23% in annual returns—far beyond the S&P 500's average and substantially exceeding the modest 1% to 4% offered by traditional banks for savings and fixed deposits.</p>
        <SignUpForm/>
        <img src={iphoneimg} alt="iPhone" className="sm:hidden "/> 
      </div>
     </div>
  );
};

export default Hero;


