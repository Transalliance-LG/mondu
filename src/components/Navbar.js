import React, { useState } from "react";
import logo from "../assets/logo.png";

import down from "../assets/down.png";
import burger from "../assets/burger.png";
import cancel from "../assets/cancel.png";
import { NavLink } from "react-router-dom";

const Navbar = ({ show, setShow }) => {
  return (
    <div className="">
      <div className=" bg-white lg:py-[16px] py-[20px] flex justify-between items-center border-b-[3px] xl:border-b-[0px] border-gray-100 xl:px-[150px] 2xl:px-[150px] lg:px-[70px] px-[15px] md:px-[30px]">
        <div className="w-[153px]">
          <NavLink to="#">
            <img src={logo} />
          </NavLink>
        </div>
        <div className="xl:flex hidden">
          <div className=" flex items-center px-[16px]">
            <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] ">
              <NavLink
                to="/"
                style={({ isActive }) => {
                  return { color: isActive ? "#06B3A8" : "black" };
                }}
              >
                Home
              </NavLink>
            </h4>
            <div>
              <img className="w-[10px]" src={down} />
            </div>
          </div>
          <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] px-[16px]">
            <NavLink
              to="/about"
              style={({ isActive }) => {
                return { color: isActive ? "#06B3A8" : "black" };
              }}
            >
              About us
            </NavLink>
          </h4>

          <div className=" flex items-center px-[16px]">
            <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] ">
              <NavLink
                to="/documentation"
                style={({ isActive }) => {
                  return { color: isActive ? "#06B3A8" : "black" };
                }}
              >
                Documentation
              </NavLink>
            </h4>
            <div>
              <img className="w-[10px]" src={down} />
            </div>
          </div>
          <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] px-[16px]">
            <NavLink
              to="/contactus"
              style={({ isActive }) => {
                return { color: isActive ? "#06B3A8" : "black" };
              }}
            >
              Contact us
            </NavLink>
          </h4>
        </div>
        <div className="xl:flex hidden items-center">
          <h4 className="mr-[44px] text-[12px] md:text-[16px] lg:text-[16px] font-medium">
            <NavLink to="#">Log in</NavLink>
          </h4>
          <button className="bg-primary hover:bg-blue-800 flex items-center px-[24px] py-[11px] rounded-[30px]">
            <h4 className="text-white text-[12px] md:text-[16px] lg:text-[16px] font-medium">
              <NavLink to="#">Get started</NavLink>
            </h4>
          </button>
        </div>
        <div className="xl:hidden hover:cursor-pointer">
          <img
            className="w-[25px]"
            onClick={() => setShow(!show)}
            src={burger}
          />
        </div>
      </div>

      <div className="xl:px-[150px] 2xl:px-[150px] lg:px-[70px] px-[15px] md:px-[30px]">
        <div
          className={`top-0 left-0 z-40 absolute bg-white w-full h-screen lg:px-[70px] px-[15px] md:px-[30px] xl:hidden ${
            show ? "translate-y-0" : "-translate-y-[1300px]"
          } ease-in-out duration-500`}
        >
          <div className="bg-white lg:py-[16px] py-[20px] flex justify-between items-center xl:hidden ">
            <div className="invisible w-[153px]">
              <img className="w-[153px]" src={logo} />
            </div>
            <div className="hover:cursor-pointer">
              <img
                className="w-[25px]"
                onClick={() => setShow(!show)}
                src={cancel}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className=" xl:hidden">
              <div className="  lg:px-[16px] h-[70px] min-h-fit">
                <h4
                  onClick={() => setShow(!show)}
                  className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] hover:cursor-pointer flex justify-center"
                >
                  <NavLink
                    to="/"
                    style={({ isActive }) => {
                      return { color: isActive ? "#06B3A8" : "black" };
                    }}
                  >
                    Home
                  </NavLink>
                </h4>
              </div>
              <div className="h-[70px] min-h-fit">
                <h4
                  onClick={() => setShow(!show)}
                  className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] lg:px-[16px] flex justify-center hover:cursor-pointer"
                >
                  <NavLink
                    to="/about"
                    style={({ isActive }) => {
                      return { color: isActive ? "#06B3A8" : "black" };
                    }}
                  >
                    About us
                  </NavLink>
                </h4>
              </div>

              <div className="  lg:px-[16px] h-[70px] min-h-fit">
                <h4
                  onClick={() => setShow(!show)}
                  className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] hover:cursor-pointer flex justify-center"
                >
                  <NavLink
                    to="/documentation"
                    style={({ isActive }) => {
                      return { color: isActive ? "#06B3A8" : "black" };
                    }}
                  >
                    Documentation
                  </NavLink>
                </h4>
              </div>
              <div className="h-[70px] min-h-fit">
                <h4
                  onClick={() => setShow(!show)}
                  className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] lg:px-[16px] flex justify-center  hover:cursor-pointer"
                >
                  <NavLink
                    to="/contactus"
                    style={({ isActive }) => {
                      return { color: isActive ? "#06B3A8" : "black" };
                    }}
                  >
                    Contact us
                  </NavLink>
                </h4>
              </div>
              <div className="h-[70px] min-h-fit">
                <h4
                  onClick={() => setShow(!show)}
                  className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] lg:px-[16px] flex justify-center  hover:cursor-pointer"
                >
                  <NavLink to="#">Log in</NavLink>
                </h4>
              </div>

              <div className="flex justify-center">
                <div className="h-[70px] min-h-fit ">
                  <button
                    onClick={() => setShow(!show)}
                    className="bg-primary hover:bg-blue-800 justify-center flex items-center px-[24px] py-[11px] rounded-[30px]"
                  >
                    <h4 className="text-white text-[12px] md:text-[16px] lg:text-[16px] font-medium ">
                      <NavLink to="#">Get started</NavLink>
                    </h4>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
