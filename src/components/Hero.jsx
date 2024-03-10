import React from 'react';
import iphoneimg from "../assets/iphoneimage.png";
import SignUpForm from "./SignUpForm";
import badgePercent from "../assets/badge-percent.png";

const Hero = () => {
  return (
    <div className="mt-40 mb-20 mx-5 flex flex-col justify-center sm:flex-row ">
      <img src={iphoneimg} alt="iPhone" className="mx-40 shadow-4xl rounded-3xl w-full lg:w-1/3 mb-5 hidden sm:block xl:inline" />


      <div className="mx-auto md:pr-40 max-w-[800px]">
        <div>
          <h3 className="flex blue font-medium">
            <span>
              <img src={badgePercent} className='pr-1' alt="badgepercent" />
            </span>{" "}
            Investment made easy
          </h3> 
        </div>
        <h1 className="text-6xl leading-tight">
          Crowdfunding real estate investment made easy
        </h1>
        <p className="mb-12 text-2xl">
          Your capital has the potential to earn up to 23% in annual returns—far beyond the S&P 500's average and substantially exceeding the modest 1% to 4% offered by traditional banks for savings and fixed deposits.
        </p>
        <div className="flex flex-col  space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <SignUpForm/>
        </div>
      </div>
      <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
        <svg
          width="450"
          height="556"
          viewBox="0 0 450 556"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG Content */}
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
        <svg
          width="364"
          height="201"
          viewBox="0 0 364 201"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
        </svg>
      </div>
    </div>
  );
};

export default Hero;
