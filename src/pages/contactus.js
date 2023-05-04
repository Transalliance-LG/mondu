import React, { useState } from "react";
import { Link } from "react-router-dom";
import arrow2 from "../assets/arrow2.png";
import email from "../assets/email.png";
import phone from "../assets/phone.png";
import facebook1 from "../assets/facebook1.png";
import figma from "../assets/figma.png";
import twitter1 from "../assets/twitter1.png";
import linkedin from "../assets/linkedin.png";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xwkjypzy");
  const refresh = () => window.location.reload(true);

  if (state.succeeded) {
    return (
      <div className="bg-blue-50 rounded-[5px] py-[10px] px-[10px] md:px-[30px]">
        <h4 className=" text-[25px] font-semibold">Thanks!</h4>
        <h4 className=" w-full  mt-[10px]  text-[16px] ">
          The form was submitted successfully.
        </h4>
        <button
          onClick={refresh}
          className=" text-red-400  mt-[10px]  text-[16px] "
        >
          Go back to form
        </button>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="md:grid grid-cols-2 2xl:gap-[32px] gap-[15px]">
        <div className="mt-[24px]">
          <h4 className="mb-[6px] text-[16px] ">Full name</h4>
          <input
            className=" w-full border-[1px] border-gray-300 px-[16px] py-[12px]  rounded-[8px]"
            type="text"
            name="name"
            id="name"
            placeholder="Please input"
            Required
          />
        </div>
        <div className="mt-[24px]">
          <h4 className="mb-[6px] text-[16px] ">Email address</h4>
          <input
            className=" w-full border-[1px] border-gray-300 px-[16px] py-[12px]  rounded-[8px]"
            id="email"
            type="email"
            name="email"
            placeholder="Please input"
            Required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>
      <div className="md:grid grid-cols-2 2xl:gap-[32px] gap-[15px]">
        <div className="mt-[24px]">
          <h4 className="mb-[6px] text-[16px] ">Phone number</h4>
          <input
            className=" w-full border-[1px] border-gray-300 px-[16px] py-[12px]  rounded-[8px]"
            type="telephone"
            name="telephone"
            id="telephone"
            placeholder="+000"
            Required
          />
        </div>
        <div className="mt-[24px]">
          <h4 className="mb-[6px] text-[16px] ">Contact method</h4>
          <select className=" w-full border-[1px] border-gray-300 px-[16px] py-[12px]  rounded-[8px]">
            <option>Dropdown</option>
          </select>
        </div>
      </div>

      <div className="mt-[24px]">
        <h4 className="mb-[6px] text-[16px] ">Message</h4>
        <textarea
          className=" w-full border-[1px] border-gray-300 px-[16px] py-[12px]  rounded-[8px]"
          rows="5"
          id="message"
          name="message"
          placeholder="Hi! We are Mondu..."
          Required
        />
      </div>
      <div className="flex items-center mt-[24px]">
        <input
          className="w-[15px] h-[15px] cursor-pointer rounded "
          name="button"
          type="checkbox"
          placeholder=""
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <h4 className="text-[14px] ml-[8px] text-gray-600">
          I agree with Mondu{" "}
          <Link className="border-b-[2px] border-gray-400" to="#">
            privacy policy
          </Link>
          .
        </h4>
      </div>
      {/* {response && (
            <h4 className="flex justify-center w-full bg-blue-50 mt-[32px] rounded-[5px] text-[16px] py-[10px]">
              {response}
            </h4>
          )} */}

      <button
        type="submit"
        disabled={state.submitting}
        className="mt-[24px] flex justify-center px-[18px] w-full md:w-auto text-white bg-primary hover:bg-teal-600 lg:text-[16px] text-[14px] py-[12px] rounded-[8px]"
      >
        Submit
      </button>
    </form>
  );
}

const Contactus = () => {
  return (
    <div>
      <div className="bg-white md:py-[58px] py-[30px] xl:px-[150px] 2xl:px-[150px] lg:px-[70px] px-[15px] md:px-[30px]">
        <div>
          <h1 className="flex justify-center text-center text-[32px] lg:text-[48px] font-semibold">
            Contact Support
          </h1>
          <div className="flex justify-center">
            <h4 className=" mt-[16px] lg:mt-[32px] text-[16px] lg:text-[18px]  text-center  text-gray-600 ">
              For frequently asked questions and queries regarding onboarding,
              our range of payment solutions, and much more, check out our
              Support Hub to get your answers!<br></br> Can't find what you're
              looking for or interested to talk more about how we're innovating
              cross-border payments and global trade? We’re happy to hear from
              you. Simply fill in the form below and we’ll be in touch soon.
            </h4>
          </div>
        </div>
      </div>

      <div className="bg-white lg:py-[58px] py-[30px] xl:px-[150px] 2xl:px-[150px] lg:px-[70px] px-[15px] md:px-[30px] md:grid grid-cols-3 lg:gap-[48px] md:gap-[30px] xl:gap-[60px] items-start">
        <div className="col-start-1 col-end-3 lg:px-[32px]">
          <ContactForm />
        </div>

        <div className="col-start-3 col-end-4 mt-[48px] md:mt-[0px]">
          <h4 className="text-medium text-[18px] mb-[16px]">Get in touch</h4>
          <h4 className="text-[16px] text-gray-500 font-normal">
            Perferendis est inventore ratione. Et numquam cupiditate ut id
            delectus aut et. Aliquam ipsa ut beatae provident
          </h4>
          <div className="flex items-center mt-[8px]">
            <h4 className="mr-[10px] text-primary font-medium text-[15px]">
              Read more
            </h4>
            <div>
              <img className="w-[11px]" src={arrow2} />
            </div>
          </div>
          <h4 className="text-medium text-[18px] mb-[16px] mt-[32px]">
            Address
          </h4>
          <h4 className="text-[16px] text-gray-500 font-normal">
            63751 Reichel Island,
          </h4>
          <h4 className="text-[16px] text-gray-500 font-normal mt-[16px]">
            South Georgia and the South Sandwich Islands
          </h4>
          <div className="flex items-center mt-[8px]">
            <div>
              <img className="w-[16px]" src={email} />
            </div>
            <h4 className="ml-[7px] text-primary font-medium text-[15px]">
              Send an email
            </h4>
          </div>
          <div className="flex items-center mt-[8px]">
            <div>
              <img className="w-[16px]" src={phone} />
            </div>
            <h4 className="ml-[7px] text-primary font-medium text-[15px]">
              Make a phone call
            </h4>
          </div>
          <h4 className="font-medium text-[18px] mt-[32px]">Social media</h4>
          <div className="flex mt-[8px]">
            <div className="mr-[8px]">
              <img className="w-[36px]" src={facebook1} />
            </div>
            <div className="mr-[8px]">
              <img className="w-[36px]" src={figma} />
            </div>
            <div className="mr-[8px]">
              <img className="w-[36px]" src={twitter1} />
            </div>
            <div>
              <img className="w-[36px]" src={linkedin} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
