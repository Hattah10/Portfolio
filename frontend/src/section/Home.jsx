import React from "react";

export default function Home() {
  return (
    <section className=" flex items-center lg:px-48 pt-[80px]">
      {/* wave */}
      <div className="w-full absolute lg:-top-5 -top-5 left-0 right-0 -z-10">
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

        {/* <svg
          // width="375"
          // height="121"
          className="w-full"
          viewBox="0 0 375 121"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M118.5 80C52.4663 69.721 13.5 95 0.500014 107C-12.5 119 -11 80 -11 80C-11 14.9777 1.52588e-05 0 1.52588e-05 0H375.5C375.5 0 446.287 43.9092 396 80C364.013 102.956 328.5 127.32 285.5 119C238.085 109.825 166.219 87.4282 118.5 80Z"
            fill="url(#paint0_linear_1_17)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_17"
              x1="197.647"
              y1="0"
              x2="197.647"
              y2="171.833"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#437FC7" />
              <stop offset="1" stop-color="#6DAFFE" />
            </linearGradient>
          </defs>
        </svg> */}
      </div>
      {/* content */}
      <div className="flex flex-col gap-6 ">
        {" "}
        <div className="flex items-center gap-3">
          <hr className="w-10 h-1 rounded-xl bg-darkBrown" />{" "}
          <span className=" text-2xl font-montserrat font-medium text-darkBrown">
            Hi, my name is
          </span>
        </div>{" "}
        <div className=" ">
          <h1 className=" leading-tight lg:text-5xl 2xl:text-7xl font-bold">
            Norhata Sampaco.
          </h1>
          <h3 className=" lg:text-4xl 2xl:text-6xl font-semibold tracking-tighter text-normalBlue">
            I bring ideas to life on the web.
          </h3>
        </div>
        <p className="mt-4 pe-[140px] 2xl:pe-80">
          I am a passionate web developer who specializes in turning creative
          designs into functional, user-friendly websites and applications. With
          a focus on clean code and seamless user experiences.
        </p>
        <div className="mt-8">
          {" "}
          <button
            type="button"
            className="border-2 border-darkBlue text-darkBlue px-4 py-2 rounded-md text-lg font-semibold"
          >
            Checkout My Resume{" "}
          </button>
        </div>{" "}
      </div>
    </section>
  );
}
