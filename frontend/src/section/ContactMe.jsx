import React from "react";
import HeadingSection from "../component/HeadingSection";
import InputContainer from "../component/InputContainer";

export default function ContactMe() {
  return (
    <section className="bg-lightBlue px-6 md:px-16 lg:px-48  py-20 lg:pt-20 relative z-10 ">
      <div className="w-full h-auto flex justify-center ">
        <div className=" w-full max-w-2xl bg-white shadow-xl px-5 py-10 lg:p-10 border-t-8 border-darkBlue rounded-2xl">
          {/*  */}
          <div>
            {" "}
            <HeadingSection
              heading={"Let's work together"}
              style="text-3xl text-center"
            />
            <p className="text-center text-gray-600 my-4">
              You can also reach out to me directly via email at{" "}
              <a
                href="mailto:youremail@example.com"
                className="text-blue-600 hover:underline"
              >
                sampaconorhata@gmail.com
              </a>
              .
            </p>{" "}
          </div>
          <form
            action="post"
            className="w-full max-w-sm
           m-auto "
          >
            <div className="grid gap-3">
              {" "}
              <InputContainer
                placeholder={"Name"}
                id={"name"}
                type={"text"}
              />{" "}
              <InputContainer
                placeholder={"Email"}
                id={"email"}
                type={"text"}
              />
              <InputContainer
                placeholder={"Subject"}
                id={"name"}
                type={"text"}
              />
              <textarea
                name="message"
                id="message"
                rows={5}
                className="w-full resize-none rounded p-2 border-2 border-gray-200 focus:outline-none focus:shadow-blue "
                placeholder="Message"
              ></textarea>
              <div className="w-full">
                {" "}
                <button
                  type="submit"
                  className="w-full px-3 py-2 text-lg bg-button-gradient rounded-lg hover:ring-2 font-semibold text-white "
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>{" "}
      <div className="absolute bottom-0 right-0  font-inter text-white w-full overflow-hidden">
        <p className="text-center m-auto">
          {" "}
          Designed & Built By Norhata Sampaco.
        </p>
        <p className="text-center"> &copy; 2024.</p>
      </div>
      {/* wave */}
      <div className="w-full absolute lg:-bottom-5 -bottom-5 left-0 right-0 -z-20 rotate-180">
        {/*desktop  */}
        <svg
          // width="1024"
          // height="135"
          className="w-full hidden lg:block"
          viewBox="0 0 1024 135"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M218.408 102.849C94.809 74.9657 0 115.506 0 115.506V-8L1026 0.5C1026 0.5 1035.79 90.3803 1039.55 115.043C1040.52 116.58 1041 118.076 1041 119.5C1041 123.08 1040.45 120.901 1039.55 115.043C1027.88 96.4405 945.289 71.766 785.276 95.5696C712.058 106.462 711.315 102.849 599.63 124.744C487.944 146.639 342.007 130.732 218.408 102.849Z"
            fill="url(#paint0_linear_1_8)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_8"
              x1="0"
              y1="44.9523"
              x2="1016.59"
              y2="44.9523"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#437FC7" />
              <stop offset="1" stop-color="#6DAFFE" />
            </linearGradient>
          </defs>
        </svg>

        {/* mobile */}
        <svg
          // width="375"
          // height="111"
          className="w-full lg:hidden"
          viewBox="0 0 375 111"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M149.553 90.5C83.5189 80.221 13.5527 95 0.552718 107C-12.4473 119 -10.9473 80 -10.9473 80C-10.9473 14.9777 0.0527191 0 0.0527191 0H375.553C375.553 0 449.84 49.9092 399.553 86C367.566 108.956 291.5 114.82 248.5 106.5C201.085 97.3254 197.272 97.9282 149.553 90.5Z"
            fill="url(#paint0_linear_1_17)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_17"
              x1="197.7"
              y1="0"
              x2="197.7"
              y2="171.833"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#437FC7" />
              <stop offset="1" stop-color="#6DAFFE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
