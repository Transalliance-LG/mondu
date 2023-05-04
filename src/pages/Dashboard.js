import React, { useEffect, useState } from "react";
import background1 from "../assets/background1.png";
import background2 from "../assets/background2.png";
import background3 from "../assets/background3.png";
import background4 from "../assets/background4.png";
import background5 from "../assets/background5.png";
import background6 from "../assets/background6.png";
import background7 from "../assets/background7.png";
import background8 from "../assets/background8.png";
import logo1 from "../assets/logo1.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import advance from "../assets/advance.png";
import global from "../assets/global.png";
import user from "../assets/user.png";
import arrow from "../assets/arrow.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

const Dashboard = () => {
  const slide = [
    {
      header1: "Seamless",
      header2: "Global",
      header3: "Transactions for",
      header4: "SMBs, Startups, and",
      header5: "Scale-ups",
      header6:
        "Efficiently collect payments, send payouts, and manage your global treasury, all while saving on foreign exchange transactions. As a regulated financial services enterprise, we are leading the way in providing instant cross-border payment solutions.",
      header7: "3000+",
      header8: "Total clients served",
      image: background1,
    },
    {
      header1: "Digitalized",
      header2: "cross-",
      header3: "border payment",
      header4: "",
      header5: "",
      header6:
        "We make use of electronic international transactions that use digital platforms and technologies to transfer funds quickly, securely, and cost-effectively. They simplify the process of conducting international transactions, reducing the need for traditional banking channels and making cross-border payments more accessible and convenient.",
      header7: "500+",
      header8: "Emerging clients",
      image: background2,
    },
    {
      header1: "Multi-currency",
      header2: "wallet",
      header3: "and bankin platform.",
      header4: "",
      header5: "",
      header6:
        "a digital solution that enables users to manage different currencies in a single account. It allows users to store, send, and receive various currencies, and offers additional banking services such as debit cards, wire transfers, and financial management tools. This platform is especially useful for those who need to transact across multiple currencies and countries, providing a seamless and convenient way to manage their finances.",
      header7: "3000+",
      header8: "Total clients served",
      image: background3,
    },
  ];

  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 2) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentState]);

  const goToNext = (currentState) => {
    setCurrentState(currentState);
  };

  return (
    <div>
      <div className="container-style bg-white py-[58px] xl:px-[150px] 2xl:px-[150px] lg:px-[70px] px-[15px] md:px-[30px] lg:grid grid-cols-2 items-center  lg:gap-[50px] xl:gap-[80px]">
        <div className="mb-[22px] lg:mb-[0px]">
          <button className="text-primary text-[12px] md:text-[16px] bg-teal-50 py-[8px] px-[17px] rounded-[24px] mb-[18px] font-medium">
            Mondu's offering
          </button>
          <div>
            <div className="flex justify-start lg:justify-start">
              <h4 className="md:text-[35px] text-[30px] xl:text-[38px] 2xl:text-[50px] font-semibold  text-primary  mr-[10px]">
                {slide[currentState].header1}
              </h4>
              <h4 className="md:text-[35px] text-[30px] xl:text-[38px] 2xl:text-[50px] font-semibold   ">
                {slide[currentState].header2}
              </h4>
            </div>
            <h4 className="md:text-[35px] text-[30px] xl:text-[38px] 2xl:text-[50px] font-semibold text-left lg:text-start  ">
              {slide[currentState].header3}
            </h4>
            <h4 className="md:text-[35px] text-[30px] xl:text-[38px] 2xl:text-[50px] font-semibold   text-left lg:text-start  ">
              {slide[currentState].header4}
            </h4>
            <h4 className="md:text-[35px] text-[30px] xl:text-[38px] 2xl:text-[50px] font-semibold  text-left lg:text-start  ">
              {slide[currentState].header5}
            </h4>
          </div>
          <h4 className="mt-[16px] text-[12px] md:text-[16px] text-start text-gray-600">
            {slide[currentState].header6}
          </h4>
          <h4 className="text-[32px] font-semibold mt-[18px]">
            {slide[currentState].header7}
          </h4>
          <h4 className="text-[12px]  mt-[10px] font-medium">
            {slide[currentState].header8}
          </h4>
          <div className="mt-[21px] w-full relative">
            <input
              className=" w-full bg-teal-50 pl-[24px] py-[20px] rounded-full placeholder:text-gray-500 text-[12px] sm:text-[16px]"
              placeholder="Enter your email address"
              name="email"
              type="email"
            />
            <button className="absolute top-[5px] right-[5px] bg-primary py-[16px] text-white font-medium  px-[24px] rounded-[30px] text-[12px] sm:text-[15px]">
              Get an account
            </button>
          </div>
        </div>
        <div>
          <img src={slide[currentState].image} />
        </div>
      </div>

      <div className="carousal mb-[38px]">
        {slide.map((slide, currentState) => (
          <span
            className={currentState ? `bg-red-500` : `bg-black`}
            key={currentState}
            onClick={() => goToNext(currentState)}
          ></span>
        ))}
      </div>

      <div className="xl:px-[150px] 2xl:px-[150px] lg:px-[70px] px-[15px] md:px-[30px] py-[40px] bg-teal-50">
        <h4 className="mb-[32px] flex justify-center font-medium">
          The trusted way to pay and get paid globally
        </h4>
        <div className="slider flex whitespace-nowrap">
          <div className=" slide-track items-center bg-teal-50">
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
          <div className=" slide-track items-center bg-teal-50">
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

      <div className="bg-white py-[32px] md:py-[40px] xl:px-[150px] 2xl:px-[150px] lg:px-[70px] px-[15px] md:px-[30px]">
        <div>
          <h4 className="flex justify-center text-[14px] md:text-[18px] font-medium mb-[6px] sm:mb-[16px] text-primary">
            Features
          </h4>
          <h1 className="flex justify-center mx-auto text-center text-[25px] lg:text-[32px] font-semibold md:w-[500px]">
            Discover the Advantages of Using Mondu
          </h1>
          <div className="flex justify-center">
            <h4 className=" mt-[6px] lg:mt-[16px] text-[12px] md:text-[14px]  text-center font-medium lg:w-[600px] text-black ">
              Make informed decisions for your online business with our
              real-time analytics and insights. stay ahead of the competition in
              a fast-paced online marketplace with mondo
            </h4>
          </div>
        </div>
      </div>

      <div className="bg-white pb-[20px] md:py-[40px] xl:px-[150px] 2xl:px-[150px] lg:px-[70px] px-[15px] md:px-[30px] lg:grid lg:grid-cols-3 gap-[20px] lg:gap-[75px]">
        <div className="py-[40px] lg:py-[0px] ">
          <div className="flex justify-center">
            <img className="w-[52px] h-[52px]" src={advance} />
          </div>
          <h4 className="flex justify-center text-[18px] font-semibold mt-[22px]">
            Advance Cutting Edge Tech
          </h4>
          <h4 className="flex justify-center text-[15px] mt-[10px] text-gray-600 text-center">
            leveraging on the best and advanced information processing
            techniques to ensure Zero or no transactions timeouts with speed
          </h4>
        </div>

        <div className="py-[40px] lg:py-[0px] ">
          <div className="flex justify-center">
            <img className="w-[52px] h-[52px]" src={global} />
          </div>
          <h4 className="flex justify-center text-[18px] font-semibold mt-[22px]">
            Global reach and support
          </h4>
          <h4 className="flex justify-center text-[15px] mt-[10px] text-gray-600 text-center">
            Mondu supports over 100 different currencies, making it easy for
            users to send and receive payments from anywhere in the world,
            regardless of their location or currency.
          </h4>
        </div>

        <div className="py-[40px] lg:py-[0px]  ">
          <div className="flex justify-center">
            <img className="w-[52px] h-[52px]" src={user} />
          </div>
          <h4 className="flex justify-center text-[18px] font-semibold mt-[22px]">
            User-friendly interface
          </h4>
          <h4 className="flex justify-center text-[15px] mt-[10px] text-gray-600 text-center">
            Mondu has been designed to be extremely user-friendly, with a simple
            and intuitive interface that makes it easy for anyone to use.
          </h4>
        </div>
      </div>

      <div className="bg-white pb-[20px] md:py-[40px] xl:px-[150px] 2xl:px-[150px] lg:px-[90px] px-[15px] md:px-[30px]">
        <div className="md:grid md:grid-cols-2 md:grid-rows-1 md:grid-flow-col md:gap-[20px]  xl:gap-[70px] items-center">
          <div className="md:col-start-2 md:col-end-3">
            <h1 className=" text-[25px] lg:text-[32px] font-semibold ">
              Receive Payment
            </h1>
            <div className="">
              <h4 className=" text-[15px] md:mt-[10px] mt-[4px] text-gray-600 ">
                Make informed decisions for your online business with our
                real-time analytics and insights. stay ahead of the competition
                in a fast-paced online marketplace with mondo
              </h4>
            </div>
          </div>
          <div className="md:col-start-1 md:col-end-2 mt-[24px] md:mt-[0px] px-[15px] sm:px-[30px] md:px-[0px] mx-auto">
            <img src={background4} />
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 md:grid-rows-1 md:grid-flow-col md:gap-[20px]  xl:gap-[90px] items-center xl:mt-[128px] mt-[35px] md:mt-[60px]">
          <div className="">
            <h1 className=" text-[25px] lg:text-[32px] font-semibold ">
              Global Account
            </h1>
            <div className="">
              <h4 className=" text-[15px] md:mt-[10px] mt-[4px] text-gray-600 ">
                Expand Your Business Globally with One Account for Worldwide
                Payments - Collect Payments from Customers in Any Country,
                Currency or Language
              </h4>
            </div>
          </div>
          <div className=" mt-[24px] md:mt-[0px] px-[15px] sm:px-[30px] md:px-[0px] mx-auto">
            <img src={background5} />
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 md:grid-rows-1 md:grid-flow-col md:gap-[20px]  xl:gap-[70px] items-center xl:mt-[128px] mt-[35px] md:mt-[60px]">
          <div className="md:col-start-2 md:col-end-3">
            <h1 className=" text-[25px] lg:text-[32px] font-semibold ">Hold</h1>
            <div className="">
              <h4 className=" text-[15px] md:mt-[10px] mt-[4px] text-gray-600 ">
                Seamlessly hold 49 currencies and manage enterprise cross-border
                cash flows, transfers and liquidity on one intuitive platform.
              </h4>
            </div>
          </div>
          <div className="md:col-start-1 md:col-end-2 mt-[md:mt-[10px] mt-[4px]px] md:mt-[0px] px-[15px] sm:px-[30px] md:px-[0px] mx-auto">
            <img src={background6} />
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 md:grid-rows-1 md:grid-flow-col md:gap-[20px]  xl:gap-[90px] items-center xl:mt-[128px] mt-[35px] md:mt-[60px]">
          <div className="">
            <h1 className=" text-[25px] lg:text-[32px] font-semibold ">
              Convert
            </h1>
            <div className="">
              <h4 className=" text-[15px] mt-[10px] text-gray-600 ">
                Save Big on Currency Conversion Fees and Get More for Your Money
                with Our Bank-Beating FX Rates - Simplify Your Global
                Transactions Today
              </h4>
            </div>
          </div>
          <div className=" mt-[35px] md:mt-[0px] px-[15px] sm:px-[30px] md:px-[0px] mx-auto">
            <img src={background7} />
          </div>
        </div>
      </div>

      <div className="bg-teal-50  py-[40px] xl:px-[150px] 2xl:px-[150px] lg:px-[90px] px-[15px] md:px-[30px]">
        <div className="md:grid md:grid-cols-2 md:grid-rows-1 md:grid-flow-col md:gap-[25px]  xl:gap-[40px] items-center">
          <div className=" md:col-start-2 md:col-end-3 z-40 flex justify-center">
            <img src={background8} />
          </div>
          <div className="md:col-start-1 md:col-end-2 z-40 mt-[32px] mb-[0px]">
            <div className="">
              <div>
                <div className=" pt-[15px] pb-[7px] ">
                  <div className="flex ">
                    <h4 className="md:text-[35px] text-[22px] xl:text-[40px] font-semibold text-primary  mr-[10px]">
                      Build
                    </h4>
                    <h4 className="md:text-[35px] text-[22px] xl:text-[40px] font-semibold   z-40">
                      on our global
                    </h4>
                  </div>
                  <h4 className="md:text-[35px] text-[22px] xl:text-[40px] font-semibold  lg:text-start  z-40">
                    financial infrastructure
                  </h4>
                </div>

                <h4 className="mt-[10px] text-[12px] md:text-[16px]  ">
                  Build custom payments experiences with well-documented APIs
                </h4>

                <button className=" flex hover:bg-teal-600 text-white bg-primary  items-center text-[12px] md:text-[16px] font-semibold mt-[43px] z-40 px-[18px] py-[12px] rounded-[30px] md:px-[30px]">
                  Explore the Docs
                  <div className="w-[8px] md:w-[12px] ml-[10px] ">
                    <img src={arrow} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-[54px] lg:py-[72px] xl:px-[150px] 2xl:px-[150px] lg:px-[90px] px-[15px] md:px-[30px]">
        <h4 className="flex justify-center text-center text-[24px] md:text-[30px] font-bold md:font-semibold mb-[48px]">
          Why global brands choose us?
        </h4>
        <div className="grid grid-cols-1 gap-y-[30px] xl:gap-y-[0px] xl:grid-cols-4 sm:grid-cols-2 gap-[20px] sm:gap-x-[30px] xl:gap-[44px] mx-[30px] sm:mx-[0px]">
          <div className="bg-white p-[30px]">
            <div>
              <img className="w-[52px] h-[52px]" src={icon1} />
            </div>
            <h4 className="font-semibold text-[14px] mt-[20px] mb-[12px]">
              Protection
            </h4>
            <h4 className="text-[12px] text-gray-500">
              Robust security features and protocols to guarantee the safety of
              your funds and accounts.
            </h4>
          </div>
          <div className="bg-white p-[30px]">
            <div>
              <img className="w-[52px] h-[52px]" src={icon2} />
            </div>
            <h4 className="font-semibold text-[14px] mt-[20px] mb-[12px]">
              Security
            </h4>
            <h4 className="text-[12px] text-gray-500">
              Our security systems and procedures are based on the highest
              international standards including PCI Level 1 compliance.
            </h4>
          </div>
          <div className="bg-white p-[30px]">
            <div>
              <img className="w-[52px] h-[52px]" src={icon3} />
            </div>
            <h4 className="font-semibold text-[14px] mt-[20px] mb-[12px]">
              Seamless integration
            </h4>
            <h4 className="text-[12px] text-gray-500">
              Our systems can be seamlessly integrated with existing payment
              systems and workflows.
            </h4>
          </div>
          <div className="bg-white p-[30px]">
            <div>
              <img className="w-[52px] h-[52px]" src={icon4} />
            </div>
            <h4 className="font-semibold text-[14px] mt-[20px] mb-[12px]">
              Compliance
            </h4>
            <h4 className="text-[12px] text-gray-500">
              We have our Financial Transactions and Reports Analysis Centre of
              Canada (Fintrac) licence.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
