import React from "react";
import logo1 from "../assets/logo1.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import aboutpic from "../assets/aboutpic.png";
import advance from "../assets/advance.png";
import global from "../assets/global.png";
import champion from "../assets/champion.png";
import best from "../assets/best.png";
import run from "../assets/run.png";
import star from "../assets/star.png";
import love from "../assets/love.png";
import mile from "../assets/mile.png";
import sketch from "../assets/sketch.png";
import slack from "../assets/slack.png";
import proton from "../assets/proton.png";
import verge from "../assets/verge.png";
import wall from "../assets/wall.png";
import moff from "../assets/moff.png";
import google from "../assets/google.png";
import face from "../assets/face.png";

const About = () => {
  return (
    <div>
      <div className="bg-white md:py-[58px] py-[30px] xl:px-[150px] 2xl:px-[150px] lg:px-[70px] px-[15px] md:px-[30px]">
        <div>
          <h1 className="flex justify-center text-center text-[32px] lg:text-[48px] font-semibold">
            About Mondu
          </h1>
          <div className="flex justify-center">
            <h4 className=" mt-[16px] lg:mt-[32px] text-[16px] lg:text-[18px]  text-center  text-gray-600 ">
              Mondu is a financial technology company that provides
              enterprise-level cross-border payment solutions, foreign exchange
              services, and banking solutions to businesses worldwide. With our
              advanced platform or API, businesses of all sizes can easily
              accept payments and make payouts on a global scale. Mondu offers a
              single platform for global payment acceptance and payouts,
              allowing businesses to connect and transact seamlessly anywhere in
              the world.
            </h4>
          </div>
        </div>
        <div className="flex justify-center mt-[16px] md:mt-[32px] ">
          <button className=" px-[23px] py-[16px] rounded-[12px] text-white bg-primary hover:bg-teal-600 text-[15px] font-semibold mr-[6px]">
            Meet the team
          </button>
          <button className=" px-[23px] py-[16px] rounded-[12px] text-primary bg-white hover:bg-teal-100 border-primary border-[2px] text-[15px] font-semibold ml-[6px]">
            Our investors
          </button>
        </div>
      </div>

      <div className="xl:px-[150px] 2xl:px-[150px] lg:px-[70px] px-[15px] md:px-[30px] py-[40px] bg-white">
        <div className="slider flex whitespace-nowrap">
          <div className=" slide-track items-center bg-white">
            <div className="slide">
              <img className="w-[160px]" src={logo1} />
            </div>
            <div className="slide">
              <img className="w-[160px]" src={logo3} />
            </div>
            <div className="slide">
              <img className="w-[160px]" src={logo4} />
            </div>
            <div className="slide">
              <img className="w-[160px]" src={logo5} />
            </div>
            <div className="slide">
              <img className="w-[160px]" src={logo6} />
            </div>
          </div>
          <div className=" slide-track items-center bg-white">
            <div className="slide">
              <img className="w-[160px]" src={logo1} />
            </div>
            <div className="slide">
              <img className="w-[160px]" src={logo3} />
            </div>
            <div className="slide">
              <img className="w-[160px]" src={logo4} />
            </div>
            <div className="slide">
              <img className="w-[160px]" src={logo5} />
            </div>
            <div className="slide">
              <img className="w-[160px]" src={logo6} />
            </div>
          </div>
        </div>
      </div>

      <div className="xl:px-[150px] 2xl:px-[150px] lg:px-[70px] px-[15px] md:px-[30px] md:py-[40px] py-[32px] bg-white ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[28px] md:gap-[20px]">
          <div>
            <h4 className="font-bold text-[40px] flex justify-center">
              2,000+
            </h4>
            <h4 className="text-[18px] flex justify-center text-gray-600">
              Clients globally
            </h4>
          </div>
          <div>
            <h4 className="font-bold text-[40px] flex justify-center">190+</h4>
            <h4 className="text-[18px] flex justify-center text-gray-600">
              Payout countries
            </h4>
          </div>
          <div>
            <h4 className="font-bold text-[40px] flex justify-center">20+</h4>
            <h4 className="text-[18px] flex justify-center text-gray-600">
              Exotic currencies
            </h4>
          </div>
          <div>
            <h4 className="font-bold text-[40px] flex justify-center">£1b+</h4>
            <h4 className="text-[18px] flex justify-center text-gray-600">
              Processed per annum
            </h4>
          </div>
        </div>
        <div className="flex justify-center">
          <h4 className=" mt-[32px] md:mt-[49px] text-[16px] md:text-[18px]  text-center  text-gray-600 ">
            Mondu has been catering to thousands of businesses globally since
            the introduction of our MVP in October 2018. Every year, we process
            billions of dollars worth of payments and offer companies a range of
            solutions such as payment processing, foreign exchange, and
            multi-currency accounts, while simultaneously assisting them in
            cost-saving and hassle-free growth.
          </h4>
        </div>
      </div>

      <div className="xl:px-[150px] 2xl:px-[150px] lg:px-[70px] px-[15px] md:px-[30px] md:py-[40px] py-[32px] bg-white ">
        <div className="md:grid md:grid-cols-2 md:grid-rows-1 md:grid-flow-col md:gap-[20px]  xl:gap-[70px] items-center">
          <div className="md:col-start-2 md:col-end-3">
            <h1 className=" text-[25px] lg:text-[32px] text-center md:text-left font-semibold ">
              How Mondu came to be.
            </h1>
            <div className="">
              <h4 className=" text-[15px] md:mt-[10px] mt-[4px] text-gray-600 text-center md:text-left">
                Say Goodbye to Late Payments and Long Processing Times - Our
                Streamlined Payment System Makes Getting Paid Faster and Easier
                Than Ever Before
              </h4>
            </div>
          </div>
          <div className="md:col-start-1 md:col-end-2 mt-[24px] md:mt-[0px] px-[15px] sm:px-[30px] md:px-[0px] mx-auto">
            <img src={aboutpic} />
          </div>
        </div>
      </div>

      <div className="bg-white pb-[20px] md:py-[40px] xl:px-[150px] 2xl:px-[150px] lg:px-[70px] px-[15px] md:px-[30px] ">
        <h1 className="flex justify-center text-center text-[32px] lg:text-[42px] font-semibold lg:mb-[83px] mb-[24px]">
          We're driven by our values
        </h1>
        <div className="md:grid lg:grid-cols-3 md:grid-cols-2 gap-[20px] lg:gap-[75px] mx-[40px] md:mx-[0px]">
          <div className="py-[40px] lg:py-[0px] ">
            <div className="">
              <img className="w-[52px] h-[52px]" src={champion} />
            </div>
            <h4 className=" text-[18px] font-semibold mt-[22px]">
              Champion the mission
            </h4>
            <h4 className=" text-[15px] mt-[10px] text-gray-600">
              We are driven by curiosity and belief to solve cross-border
              payments pain points globally.
            </h4>
          </div>

          <div className="py-[40px] lg:py-[0px] ">
            <div className="">
              <img className="w-[52px] h-[52px]" src={best} />
            </div>
            <h4 className=" text-[18px] font-semibold mt-[22px]">
              Be the best
            </h4>
            <h4 className=" text-[15px] mt-[10px] text-gray-600">
              We are open, take appropriate risks, adopt a results-driven
              approach, and are the best at what we do.
            </h4>
          </div>

          <div className="py-[40px] lg:py-[0px]  ">
            <div className="">
              <img className="w-[52px] h-[52px]" src={run} />
            </div>
            <h4 className=" text-[18px] font-semibold mt-[22px]">
              Run with it
            </h4>
            <h4 className=" text-[15px] mt-[10px] text-gray-600">
              We are determined, seek challenges, take ownership of tasks, act
              fast and deliver results.
            </h4>
          </div>

          <div className="py-[40px] lg:py-[0px] ">
            <div className="">
              <img className="w-[52px] h-[52px]" src={mile} />
            </div>
            <h4 className=" text-[18px] font-semibold mt-[22px]">
              Go the extra mile
            </h4>
            <h4 className=" text-[15px] mt-[10px] text-gray-600">
              We deliver beyond what is possible. We make impossible possible.
            </h4>
          </div>

          <div className="py-[40px] lg:py-[0px] ">
            <div className="">
              <img className="w-[52px] h-[52px]" src={star} />
            </div>
            <h4 className=" text-[18px] font-semibold mt-[22px]">
              Customer first
            </h4>
            <h4 className=" text-[15px] mt-[10px] text-gray-600">
              We are creative in solving existing problems and bold in designing
              a new and better experience for customers.
            </h4>
          </div>

          <div className="py-[40px] lg:py-[0px]  ">
            <div className="">
              <img className="w-[52px] h-[52px]" src={love} />
            </div>
            <h4 className=" text-[18px] font-semibold mt-[22px]">
              We work as one
            </h4>
            <h4 className=" text-[15px] mt-[10px] text-gray-600">
              We value transparency, we share information, mistakes and
              successes.
            </h4>
          </div>
        </div>
      </div>

      <div className="bg-white pb-[20px] md:py-[40px] xl:px-[150px] 2xl:px-[150px] lg:px-[70px] px-[15px] md:px-[30px] hidden lg:block">
        <div className="">
          <h1 className=" text-[25px] lg:text-[32px] flex justify-center font-semibold ">
            Our Investors
          </h1>
          <div className="mt-[64px]">
            <div className="grid grid-cols-4 bg-teal-50 px-[100px] py-[28px] items-center mb-[8px]">
              <div className="mx-auto">
                <img className="w-[150px]" src={slack} />
              </div>
              <div className="mx-auto">
                <img className="w-[150px]" src={sketch} />
              </div>
              <div className="mx-auto">
                <img className="w-[150px]" src={moff} />
              </div>
              <div className="mx-auto">
                <img className="w-[150px]" src={google} />
              </div>
            </div>
            <div className="grid grid-cols-4 bg-teal-50 px-[100px] py-[28px] items-center mb-[8px]">
              <div className="mx-auto">
                <img className="w-[150px]" src={verge} />
              </div>
              <div className="mx-auto">
                <img className="w-[150px]" src={wall} />
              </div>
              <div className="mx-auto">
                <img className="w-[150px]" src={proton} />
              </div>
              <div className="mx-auto">
                <img className="w-[150px]" src={face} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
