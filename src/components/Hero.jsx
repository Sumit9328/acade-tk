import React from "react";
import {
  ChevronDown,
  ArrowUpRight,
  Star,
  CalendarDays,
  Hourglass,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[525px] lg:min-h-[525px] overflow-hidden">
      {/* ================= BACKGROUND IMAGE ================= */}

      <img
        src="/images/hero-bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-[#172f73]/80"></div>

      {/* ================= MAIN CONTENT ================= */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-[1050px]
          mx-auto
          px-5
          sm:px-8
          lg:px-0
          pt-[35px]
          sm:pt-[40px]
          lg:pt-[45px]
          pb-[190px]
          lg:pb-[145px]
        "
      >
        <div
          className="
            flex
            flex-col
            lg:flex-row
            justify-between
            items-center
            lg:items-start
            gap-[35px]
            lg:gap-[45px]
          "
        >
          {/* ================= LEFT CONTENT ================= */}

          <div className="w-full lg:w-[570px] text-white">
            {/* Heading */}

            <h1
              className="
                font-yantra
                text-[24px]
                sm:text-[28px]
                lg:text-[24px]
                leading-[28px]
                sm:leading-[32px]
                lg:leading-[27px]
                font-bold
                text-center
                lg:text-left
              "
            >
              Applied <span className="text-[#fca311]">Data Science &</span>
              <br />
              <span className="text-[#fca311]">Machine Learning Program</span>
            </h1>

            {/* Subtitle */}

            <p
              className="
                font-yantra
                mt-[15px]
                text-[13px]
                sm:text-[14px]
                italic
                font-semibold
                text-center
                lg:text-left
              "
            >
              Online · 6 Months · Designed & Delivered by E&ICT Academy, IIT
              Roorkee
            </p>

            {/* Description */}

            <p
              className="
                font-yantra
                mt-[14px]
                text-[12px]
                sm:text-[13px]
                lg:text-[14px]
                leading-[17px]
                w-full
                max-w-[550px]
                mx-auto
                lg:mx-0
                text-center
                lg:text-left
              "
            >
              Accelerate your career with an industry-based course on Data
              Science, Machine Learning, AI, and Gen AI through a expertly
              designed program by E&ICT Academy, IIT Roorkee for Data Science &
              Artificial Intelligence enthusiasts. Learn in-demand skills such
              as Data Analysis, Data Visualization, Data Science, Machine
              Learning, Gen AI, Agentic AI and more.
            </p>

            {/* ================= EXPERTISE BAR ================= */}

            <div
              className="
                mt-[23px]
                w-full
                max-w-[545px]
                h-[38px]
                sm:h-[33px]
                border
                border-white/60
                mx-auto
                lg:mx-0
              "
            >
              <div
                className="
                  w-full
                  h-full
                  bg-white/10
                  flex
                  items-center
                  px-[10px]
                  sm:px-[12px]
                "
              >
                <span
                  className="
                    font-yantra
                    text-[11px]
                    sm:text-[13px]
                    leading-[15px]
                  "
                >
                  Gain Expertise In Advanced Gen AI, Agentic AI & LLMs
                </span>
              </div>
            </div>

            {/* ================= RATINGS ================= */}

            <div
              className="
                mt-[18px]
                flex
                items-center
                justify-center
                lg:justify-start
                gap-[7px]
                flex-wrap
              "
            >
              <div className="flex gap-[2px] text-[#fca311]">
                <Star size={17} fill="currentColor" />
                <Star size={17} fill="currentColor" />
                <Star size={17} fill="currentColor" />
                <Star size={17} fill="currentColor" />
                <Star size={17} fill="currentColor" />
              </div>

              <span className="font-yantra text-[11px]">4.8 / 4522 votes</span>

              <span className="font-yantra text-[11px]">🟢 4.8/5</span>

              <span className="font-yantra text-[11px]">
                <b className="text-[#f15a24]">▾d</b> 4.9/5
              </span>

              <span className="font-yantra text-[11px]">🔵 4.7/5</span>
            </div>

            {/* ================= BUTTONS ================= */}

            <div
              className="
                mt-[14px]
                flex
                items-center
                justify-center
                lg:justify-start
                gap-[7px]
                flex-wrap
              "
            >
              {/* Download Brochure */}

              <button
                className="
                  h-[40px]
                  px-[18px]
                  sm:px-[23px]
                  rounded-full
                  bg-[#8ca7ff]
                  text-white
                  font-yantra
                  font-semibold
                  text-[13px]
                  sm:text-[15px]
                  hover:bg-[#7896f5]
                  transition
                "
              >
                Download Brochure
              </button>

              {/* Brochure Arrow */}

              <button
                className="
                  w-[40px]
                  h-[40px]
                  rounded-full
                  bg-[#8ca7ff]
                  flex
                  items-center
                  justify-center
                  hover:bg-[#7896f5]
                  transition
                "
              >
                <span className="text-white text-[20px]">♟</span>
              </button>

              {/* Apply Now */}

              <button
                className="
                  h-[40px]
                  px-[22px]
                  sm:px-[27px]
                  rounded-full
                  bg-[#fca311]
                  text-white
                  font-yantra
                  font-semibold
                  text-[13px]
                  sm:text-[15px]
                  hover:bg-[#ed9400]
                  transition
                "
              >
                Apply Now
              </button>

              {/* Apply Arrow */}

              <button
                className="
                  w-[40px]
                  h-[40px]
                  rounded-full
                  bg-[#fca311]
                  flex
                  items-center
                  justify-center
                  hover:bg-[#ed9400]
                  transition
                "
              >
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>

          {/* ================= RIGHT FORM ================= */}

          <div
            className="
              w-full
              max-w-[360px]
              lg:w-[298px]
              bg-white
              rounded-[15px]
              px-[20px]
              sm:px-[23px]
              pt-[22px]
              pb-[23px]
              shadow-lg
              shrink-0
            "
          >
            <h2
              className="
                font-yantra
                text-center
                text-[16px]
                font-bold
                text-black
                mb-[22px]
              "
            >
              Book Your <span className="text-[#fca311]">Slot</span>
            </h2>

            {/* First + Last Name */}

            <div className="flex gap-[8px]">
              <input
                type="text"
                placeholder="First Name*"
                className="
                  font-yantra
                  w-1/2
                  h-[34px]
                  border
                  border-gray-300
                  rounded-[7px]
                  px-[11px]
                  text-[12px]
                  outline-none
                  focus:border-[#273b87]
                "
              />

              <input
                type="text"
                placeholder="Last Name"
                className="
                  font-yantra
                  w-1/2
                  h-[34px]
                  border
                  border-gray-300
                  rounded-[7px]
                  px-[11px]
                  text-[12px]
                  outline-none
                  focus:border-[#273b87]
                "
              />
            </div>

            {/* Mobile */}

            <input
              type="text"
              placeholder="Mobile*"
              className="
                font-yantra
                w-full
                h-[34px]
                mt-[7px]
                border
                border-gray-300
                rounded-[7px]
                px-[11px]
                text-[12px]
                outline-none
                focus:border-[#273b87]
              "
            />

            {/* Email */}

            <input
              type="email"
              placeholder="Email*"
              className="
                font-yantra
                w-full
                h-[34px]
                mt-[7px]
                border
                border-gray-300
                rounded-[7px]
                px-[11px]
                text-[12px]
                outline-none
                focus:border-[#273b87]
              "
            />

            {/* Work Experience */}

            <div className="relative mt-[7px]">
              <select
                className="
                  appearance-none
                  font-yantra
                  w-full
                  h-[34px]
                  border
                  border-gray-300
                  rounded-[7px]
                  px-[11px]
                  text-[12px]
                  text-gray-400
                  outline-none
                  bg-white
                "
              >
                <option>Select Work Experience*</option>
                <option>Fresher</option>
                <option>1-2 Years</option>
                <option>3-5 Years</option>
                <option>5+ Years</option>
              </select>

              <ChevronDown
                size={17}
                className="
                  absolute
                  right-[10px]
                  top-[8px]
                  text-[#0086bd]
                  pointer-events-none
                "
              />
            </div>

            {/* Best Time */}

            <div className="relative mt-[7px]">
              <select
                className="
                  appearance-none
                  font-yantra
                  w-full
                  h-[34px]
                  border
                  border-gray-300
                  rounded-[7px]
                  px-[11px]
                  text-[12px]
                  text-gray-400
                  outline-none
                  bg-white
                "
              >
                <option>Select Best Time To Call*</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>

              <ChevronDown
                size={17}
                className="
                  absolute
                  right-[10px]
                  top-[8px]
                  text-[#0086bd]
                  pointer-events-none
                "
              />
            </div>

            {/* For Myself */}

            <div className="relative mt-[7px]">
              <select
                className="
                  appearance-none
                  font-yantra
                  w-full
                  h-[34px]
                  border
                  border-gray-300
                  rounded-[7px]
                  px-[11px]
                  text-[12px]
                  text-gray-400
                  outline-none
                  bg-white
                "
              >
                <option>For Myself</option>
                <option>For Someone Else</option>
              </select>

              <ChevronDown
                size={17}
                className="
                  absolute
                  right-[10px]
                  top-[8px]
                  text-[#0086bd]
                  pointer-events-none
                "
              />
            </div>

            {/* Submit */}

            <div className="flex items-center mt-[25px]">
              <button
                className="
                  h-[40px]
                  w-[98px]
                  rounded-full
                  bg-[#273b87]
                  text-white
                  font-yantra
                  font-semibold
                  text-[15px]
                  hover:bg-[#1e2e72]
                  transition
                "
              >
                Submit
              </button>

              <button
                className="
                  ml-[-1px]
                  w-[40px]
                  h-[40px]
                  rounded-full
                  bg-[#273b87]
                  text-white
                  flex
                  items-center
                  justify-center
                  hover:bg-[#1e2e72]
                  transition
                "
              >
                <ArrowUpRight size={19} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM INFO ================= */}

      <div
        className="
          absolute
          z-20
          bottom-[15px]
          sm:bottom-[20px]
          left-0
          w-full
        "
      >
        <div
          className="
            w-full
            max-w-[1050px]
            mx-auto
            px-5
            sm:px-8
            lg:px-0
            flex
            flex-col
            lg:flex-row
            justify-between
            items-center
            lg:items-end
            gap-[15px]
          "
        >
          {/* IIT + EICT IMAGE */}

          <div
            className="
              w-full
              max-w-[498px]
              h-[70px]
              sm:h-[80px]
              lg:h-[89px]
              rounded-[16px]
              overflow-hidden
              shadow-lg
            "
          >
            <img
              src="/images/iit-eict.png"
              alt="IIT Roorkee and EICT Academy"
              className="w-full h-full object-contain"
            />
          </div>

          {/* DATES */}

          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-[12px]
              sm:gap-[25px]
              lg:gap-[35px]
              text-white
              mb-0
              lg:mb-[8px]
              w-full
              lg:w-auto
              justify-center
              lg:justify-end
            "
          >
            {/* Next Cohort */}

            <div className="flex items-center gap-[9px]">
              <div
                className="
                  w-[32px]
                  h-[32px]
                  rounded-[8px]
                  bg-white
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <CalendarDays size={19} className="text-[#273b87]" />
              </div>

              <div>
                <p className="font-yantra text-[12px]">Next Cohort</p>

                <p className="font-yantra text-[13px] font-bold">10 Apr 2025</p>
              </div>
            </div>

            {/* Admission Deadline */}

            <div className="flex items-center gap-[9px]">
              <div
                className="
                  w-[32px]
                  h-[32px]
                  rounded-[8px]
                  bg-white
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <Hourglass size={18} className="text-[#273b87]" />
              </div>

              <div>
                <p className="font-yantra text-[12px]">Admission Deadline</p>

                <p className="font-yantra text-[13px] font-bold">10 Apr 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
