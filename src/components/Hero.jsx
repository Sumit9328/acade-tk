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
    <section className="relative min-h-[525px] overflow-hidden">

      {/* Background Image */}
      <img
        src="/images/hero-bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-[#172f73]/80"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1050px] mx-auto px-0 pt-[45px]">

        <div className="flex justify-between">

          {/* ================= LEFT CONTENT ================= */}
          <div className="w-[570px] text-white">

            <h1 className="text-[24px] leading-[27px] font-bold">
              Applied{" "}
              <span className="text-[#fca311]">Data Science &</span>
              <br />
              <span className="text-[#fca311]">
                Machine Learning Program
              </span>
            </h1>

            <p className="mt-[15px] text-[14px] italic font-semibold">
              Online · 6 Months · Designed & Delivered by E&ICT Academy, IIT Roorkee
            </p>

            <p className="mt-[14px] text-[14px] leading-[17px] w-[550px]">
              Accelerate your career with an industry-based course on Data Science,
              Machine Learning, AI, and Gen AI through a expertly designed program
              by E&ICT Academy, IIT Roorkee for Data Science & Artificial
              Intelligence enthusiasts. Learn in-demand skills such as Data
              Analysis, Data Visualization, Data Science, Machine Learning, Gen AI,
              Agentic AI and more.
            </p>

            {/* Expertise Bar */}
            <div className="mt-[23px] w-[545px] h-[33px] border border-white/60 flex items-center px-0">
              <div className="w-full h-full bg-white/10 flex items-center px-[0px]">
                <span className="text-[13px] pl-0">
                  Gain Expertise In Advanced Gen AI, Agentic AI & LLMs
                </span>
              </div>
            </div>

            {/* Ratings */}
            <div className="mt-[18px] flex items-center gap-[7px]">

              <div className="flex gap-[2px] text-[#fca311]">
                <Star size={19} fill="currentColor" />
                <Star size={19} fill="currentColor" />
                <Star size={19} fill="currentColor" />
                <Star size={19} fill="currentColor" />
                <Star size={19} fill="currentColor" />
              </div>

              <span className="text-[11px]">
                4.8 / 4522 votes
              </span>

              <span className="text-[11px]">🟢 4.8/5</span>
              <span className="text-[11px]">
                <b className="text-[#f15a24]">▾d</b> 4.9/5
              </span>
              <span className="text-[11px]">🔵 4.7/5</span>
            </div>

            {/* Buttons */}
            <div className="mt-[14px] flex items-center gap-[7px]">

              <button className="h-[40px] px-[23px] rounded-full bg-[#8ca7ff] text-white font-semibold text-[15px]">
                Download Brochure
              </button>

              <button className="w-[40px] h-[40px] rounded-full bg-[#8ca7ff] flex items-center justify-center">
                <span className="text-white text-[20px]">♟</span>
              </button>

              <button className="h-[40px] px-[27px] rounded-full bg-[#fca311] text-white font-semibold text-[15px]">
                Apply Now
              </button>

              <button className="w-[40px] h-[40px] rounded-full bg-[#fca311] flex items-center justify-center">
                <ArrowUpRight size={20} />
              </button>

            </div>
          </div>


          {/* ================= RIGHT FORM ================= */}
          <div className="w-[298px] bg-white rounded-[15px] px-[23px] pt-[22px] pb-[23px] shadow-lg">

            <h2 className="text-center text-[16px] font-bold text-black mb-[22px]">
              Book Your <span className="text-[#fca311]">Slot</span>
            </h2>

            <div className="flex gap-[8px]">
              <input
                type="text"
                placeholder="First Name*"
                className="w-1/2 h-[31px] border border-gray-300 rounded-[7px] px-[11px] text-[12px] outline-none"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 h-[31px] border border-gray-300 rounded-[7px] px-[11px] text-[12px] outline-none"
              />
            </div>

            <input
              type="text"
              placeholder="Mobile*"
              className="w-full h-[31px] mt-[7px] border border-gray-300 rounded-[7px] px-[11px] text-[12px] outline-none"
            />

            <input
              type="email"
              placeholder="Email*"
              className="w-full h-[31px] mt-[7px] border border-gray-300 rounded-[7px] px-[11px] text-[12px] outline-none"
            />

            {/* Select */}
            <div className="relative mt-[7px]">
              <select className="appearance-none w-full h-[31px] border border-gray-300 rounded-[7px] px-[11px] text-[12px] text-gray-400 outline-none">
                <option>Select Work Experience*</option>
                <option>Fresher</option>
                <option>1-2 Years</option>
                <option>3-5 Years</option>
                <option>5+ Years</option>
              </select>

              <ChevronDown
                size={17}
                className="absolute right-[10px] top-[7px] text-[#0086bd] pointer-events-none"
              />
            </div>

            <div className="relative mt-[7px]">
              <select className="appearance-none w-full h-[31px] border border-gray-300 rounded-[7px] px-[11px] text-[12px] text-gray-400 outline-none">
                <option>Select Best Time To Call*</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>

              <ChevronDown
                size={17}
                className="absolute right-[10px] top-[7px] text-[#0086bd] pointer-events-none"
              />
            </div>

            <div className="relative mt-[7px]">
              <select className="appearance-none w-full h-[31px] border border-gray-300 rounded-[7px] px-[11px] text-[12px] text-gray-400 outline-none">
                <option>For Myself</option>
                <option>For Someone Else</option>
              </select>

              <ChevronDown
                size={17}
                className="absolute right-[10px] top-[7px] text-[#0086bd] pointer-events-none"
              />
            </div>

            {/* Submit */}
            <div className="flex items-center mt-[25px]">

              <button className="h-[40px] w-[98px] rounded-full bg-[#273b87] text-white font-semibold text-[15px]">
                Submit
              </button>

              <button className="ml-[-1px] w-[40px] h-[40px] rounded-full bg-[#273b87] text-white flex items-center justify-center">
                <ArrowUpRight size={19} />
              </button>

            </div>
          </div>
        </div>
      </div>


      {/* ================= BOTTOM INFO ================= */}

      <div className="absolute z-20 bottom-[20px] left-1/2 -translate-x-1/2 w-[1050px] flex justify-between items-end">

        {/* IIT + EICT CARD */}
        {/* IIT + EICT IMAGE */}
<div className="w-[498px] h-[89px] rounded-[16px] overflow-hidden shadow-lg">
  <img
    src="/images/iit-eict.png"
    alt="IIT Roorkee and EICT Academy"
    className="w-full h-full object-contain"
  />
</div>


        {/* DATES */}
        <div className="flex gap-[35px] text-white mb-[8px]">

          <div className="flex items-center gap-[9px]">
            <div className="w-[32px] h-[32px] rounded-[8px] bg-white flex items-center justify-center">
              <CalendarDays size={19} className="text-[#273b87]" />
            </div>

            <div>
              <p className="text-[12px]">Next Cohort</p>
              <p className="text-[13px] font-bold">10 Apr 2025</p>
            </div>
          </div>

          <div className="flex items-center gap-[9px]">
            <div className="w-[32px] h-[32px] rounded-[8px] bg-white flex items-center justify-center">
              <Hourglass size={18} className="text-[#273b87]" />
            </div>

            <div>
              <p className="text-[12px]">Admission Deadline</p>
              <p className="text-[13px] font-bold">10 Apr 2025</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;