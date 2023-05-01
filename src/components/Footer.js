import React from "react";
import logo2 from "../assets/logo2.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import whatsapp from "../assets/whatsapp.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <div className="xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px] py-[40px] bg-secondary">
      <div
        className="lg:flex grid grid-cols-2 justify-between md:gap-[20px]
      lg:gap-[30px] xl:gap-[40px]"
      >
        <div>
          <h1 className="text-white text-[12px] md:text-[16px] lg:text-[16px] mb-[24px] font-semibold">
            Products
          </h1>
          <h4 className="text-gray-400 text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Global Account
          </h4>
          <h4 className="text-gray-400 text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Multi-Currency Wallet
          </h4>
          <h4 className="text-gray-400 text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Payment Links - Payins
          </h4>
          <h4 className="text-gray-400 text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            FX
          </h4>
        </div>
        <div>
          <h1 className="text-white text-[12px] md:text-[16px] lg:text-[16px] mb-[24px] font-semibold">
            Products
          </h1>
          <h4 className="text-gray-400 text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Wallet-to-wallet
          </h4>
          <h4 className="text-gray-400 text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Corporate Cards
          </h4>
          <h4 className="text-gray-400 text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Treasury Management
          </h4>
          <h4 className="text-gray-400 text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            API
          </h4>
        </div>

        <div>
          <h1 className="text-white text-[12px] md:text-[16px] lg:text-[16px] mb-[24px] font-semibold">
            Resources
          </h1>
          <h4 className="text-gray-400 text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Partners
          </h4>
          <h4 className="text-gray-400 text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Developers
          </h4>
          <h4 className="text-gray-400 text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Community
          </h4>
        </div>
        <div>
          <h1 className="text-white text-[12px] md:text-[16px] lg:text-[16px] mb-[24px] font-semibold">
            Company
          </h1>
          <h4 className="text-gray-400 text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            FAQ
          </h4>
          <h4 className="text-gray-400 text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Privacy policy
          </h4>
        </div>
      </div>

      <div className="md:flex md:justify-between items-center mt-[64px]">
        <div className="w-[128px]  mx-auto md:mx-[0px]">
          <img src={logo2} />
        </div>
        <h4 className=" flex justify-center text-gray-400  text-[12px] md:text-[16px] lg:text-[16px] mt-[16px] md:mt-[0px]">
          © 2023 Mondu. All Rights Reserved.
        </h4>

        <div className=" md:w-[200px] sm:w-[300px] flex justify-between mt-[16px] md:mt-[0px] sm:mx-auto md:mx-[0px]">
          <div>
            <img className="w-[24px] h-[24px]" src={facebook} />
          </div>
          <div>
            <img className="w-[24px] h-[24px]" src={twitter} />
          </div>
          <div>
            <img className="w-[24px] h-[24px]" src={whatsapp} />
          </div>
          <div>
            <img className="w-[24px] h-[24px]" src={instagram} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
