import React from "react";

const Input = () => {
  return (
    <div>
      <div className="bg-primary py-[48px] lg:py-[64px] xl:px-[150px] 2xl:px-[150px] lg:px-[90px] px-[15px] md:px-[30px] xl:grid grid-cols-2 lg:gap-[30px] gap-[20px] items-center">
        <div>
          <h4 className="font-semibold text-[32px] text-white">
            Welcome to your new digital reality that will rock your world.
          </h4>
          <h4 className="font-normal text-[16px] text-white mt-[24px]">
            Let us help you take you from zero to serious business and beyond.
            Our no-strings attached free trial lets you test our product today.
          </h4>
        </div>
        <div className="sm:grid sm:grid-cols-3  2xl:mx-[70px] mt-[16px] xl:mt-[0px]">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-white py-[12px] px-[16px] col-start-1 col-end-3 rounded-l-[6px] w-full sm:w-auto rounded-r-[6px] sm:rounded-r-[0px]"
          />
          <button className="hover:bg-cyan-700 py-[12px] px-[16px] col-start-3 col-end-4 bg-cyan-600 text-white rounded-r-[6px] rounded-l-[6px] sm:rounded-l-[0px] w-full sm:w-auto mt-[16px] sm:mt-[0px]">
            Create an account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
