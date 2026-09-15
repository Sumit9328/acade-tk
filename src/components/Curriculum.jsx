import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  CirclePlay,
  ArrowUpRight,
  Download,
} from "lucide-react";

const Curriculum = () => {
  const [openModule, setOpenModule] = useState(null);

  const modules = [
    {
      number: "01",
      title:
        "Data Analytics, Data Science & Visualization with Python (48 hours)",
      content: (
        <>
          <p className="font-inter font-[700] mb-[4px]">Python Basics</p>

          <ul className="list-disc pl-[18px] space-y-[3px]">
            <li>What is Python</li>
            <li>Application of Python</li>
            <li>Why use Python for AIML Installation</li>
            <li>Anaconda/Other Idle</li>
            <li>Python Tokens</li>
            <li>Data Types in Python</li>
            <li>Conditional Statement</li>
            <li>Loops in Python</li>
            <li>Functions in Python</li>
            <li>Advance Functions</li>
            <li>File Handling</li>
            <li className="font-inter font-[700]">Mini Project</li>
          </ul>
        </>
      ),
    },
    {
      number: "02",
      title: "Applied Maths, Statistics and Probability for ML & AI (21 Hours)",
      content: (
        <>
          <p className="font-inter font-[700] mb-[4px]">Applied Mathematics</p>
          <ul className="list-disc pl-[18px] space-y-[3px]">
            <li>Basic Mathematics for Machine Learning</li>
            <li>Statistics Fundamentals</li>
            <li>Probability Concepts</li>
            <li>Data Distribution</li>
            <li>Mean, Median and Mode</li>
          </ul>
        </>
      ),
    },
    {
      number: "03",
      title: "Applied Maths, Statistics and Probability for ML & AI (60 Hours)",
      content: (
        <>
          <p className="font-inter font-[700] mb-[4px]">
            Statistics &amp; Probability
          </p>
          <ul className="list-disc pl-[18px] space-y-[3px]">
            <li>Descriptive Statistics</li>
            <li>Inferential Statistics</li>
            <li>Probability Distribution</li>
            <li>Correlation and Regression</li>
            <li>Statistical Analysis</li>
          </ul>
        </>
      ),
    },
    {
      number: "04",
      title: "Applied Maths, Statistics and Probability for ML & AI (57 Hours)",
      content: (
        <>
          <p className="font-inter font-[700] mb-[4px]">
            Machine Learning Mathematics
          </p>
          <ul className="list-disc pl-[18px] space-y-[3px]">
            <li>Linear Algebra</li>
            <li>Vectors and Matrices</li>
            <li>Calculus Fundamentals</li>
            <li>Optimization Techniques</li>
            <li>Mathematical Concepts for ML</li>
          </ul>
        </>
      ),
    },
    {
      number: "05",
      title: "Applied Maths, Statistics and Probability for ML & AI (54 Hours)",
      content: (
        <>
          <p className="font-inter font-[700] mb-[4px]">Advanced Concepts</p>
          <ul className="list-disc pl-[18px] space-y-[3px]">
            <li>Advanced Statistical Methods</li>
            <li>Probability Models</li>
            <li>Data Interpretation</li>
            <li>Machine Learning Applications</li>
            <li>Mini Project</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#f0f2ff] py-[30px] sm:py-[40px] lg:py-[35px]">
      <div className="w-full max-w-[1050px] mx-auto px-5 sm:px-8 lg:px-5 xl:px-0">

        {/* ================= HEADING ================= */}
        <h2 className="font-inter font-[700] text-center text-[28px] leading-[34px] text-[#273878]">
          Data Science &amp; Machine Learning{" "}
          <span className="text-[#fca311]">Course Curriculum</span>
        </h2>

        {/* ================= MAIN AREA ================= */}
        <div className="mt-[28px] sm:mt-[38px] lg:mt-[42px] flex flex-col lg:flex-row gap-[20px] lg:gap-[15px]">

          {/* ================= LEFT MODULES ================= */}
          <div className="hidden lg:block w-[240px] shrink-0">
            {modules.map((module, index) => {
              const isOpen = openModule === index;

              return (
                <div
                  key={module.number}
                  className={`relative transition-all duration-300 ${
                    isOpen ? "h-[307px]" : "h-[69px]"
                  }`}
                >
                  <div
                    className="absolute left-0 top-[15px] flex items-center cursor-pointer"
                    onClick={() => setOpenModule(isOpen ? null : index)}
                  >
                    <div className="w-[60px] h-[23px] rounded-l-full bg-[#5871ce] flex items-center justify-center">
                      <span className="font-inter font-[700] text-[15px] text-white">
                        Module
                      </span>
                    </div>

                    <div className="w-[53px] h-[53px] -ml-[1px] rounded-full bg-white shadow-sm flex items-center justify-center z-10">
                      <span className="font-inter font-[700] text-[15px] text-black">
                        {module.number}
                      </span>
                    </div>

                    <div className="ml-[-1px] w-[77px] h-[23px] rounded-r-full bg-[#5871ce] flex items-center justify-center gap-[3px]">
                      <CirclePlay size={13} strokeWidth={2} className="text-white" />
                      <span className="font-inter font-[700] text-[15px] text-white">
                        Preview
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-[39px] left-[190px] w-[50px] border-t-2 border-dotted border-black" />
                </div>
              );
            })}
          </div>

          {/* ================= CURRICULUM CARDS ================= */}
          <div className="w-full lg:w-[360px]">
            {modules.map((module, index) => {
              const isOpen = openModule === index;

              return (
                <div
                  key={module.number}
                  className={`bg-white rounded-[7px] shadow-[0_2px_7px_rgba(0,0,0,0.08)] mb-[14px] overflow-hidden transition-all duration-300 ${
                    isOpen ? "min-h-[307px]" : "min-h-[58px]"
                  }`}
                >
                  <div
                    onClick={() => setOpenModule(isOpen ? null : index)}
                    className={`px-[13px] sm:px-[15px] py-[10px] min-h-[58px] flex items-center justify-between cursor-pointer ${
                      isOpen ? "border-b border-gray-200" : ""
                    }`}
                  >
                    <p className="font-inter font-[700] text-[15px] leading-[20px] text-black pr-[10px]">
                      {module.title}
                    </p>

                    {isOpen ? (
                      <ChevronUp
                        size={19}
                        className="text-[#0086bd] shrink-0"
                        strokeWidth={3}
                      />
                    ) : (
                      <ChevronDown
                        size={19}
                        className="text-[#0086bd] shrink-0"
                        strokeWidth={3}
                      />
                    )}
                  </div>

                  {isOpen && (
                    <div className="font-inter font-[400] px-[15px] pt-[10px] pb-[15px] text-[15px] leading-[21px] text-[#333]">
                      {module.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ================= RIGHT FORM ================= */}
          <div className="w-full lg:w-[295px] lg:shrink-0">
            <div className="relative overflow-hidden rounded-[8px] bg-[#263e83] min-h-[400px]">
              {/* Orange Header */}
              <div className="relative h-[88px] bg-[#fca311]">
                <div className="absolute left-[20px] sm:left-[50px] lg:left-[95px] top-[8px]">
                  <h3 className="font-inter font-[700] text-[15px] leading-[20px] text-black">
                    Limited Seats Available!
                  </h3>

                  <div className="mt-[7px] bg-[#17376e] w-[200px] py-[5px]">
                    <p className="font-inter font-[700] text-[15px] leading-[19px] text-white pl-[8px]">
                      New Batch Starts
                    </p>
                    <p className="font-inter font-[700] text-[15px] leading-[19px] text-white pl-[8px]">
                      on 30th September 2025
                    </p>
                  </div>
                </div>
              </div>

              {/* Building Background */}
              <div className="absolute bottom-0 left-0 right-0 h-[315px] bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-35" />

              {/* Form Content */}
              <div className="relative z-10 p-[15px]">
                {/* Countdown */}
                <div className="h-[45px] border border-white/20 rounded-[8px] flex items-center justify-center text-white">
                  <div className="text-center">
                    <p className="font-inter font-[700] text-[15px]">24</p>
                    <p className="font-inter font-[400] text-[15px]">Days</p>
                  </div>

                  <span className="mx-[7px] sm:mx-[12px] text-[15px] font-[700]">:</span>

                  <div className="text-center">
                    <p className="font-inter font-[700] text-[15px]">17</p>
                    <p className="font-inter font-[400] text-[15px]">Hours</p>
                  </div>

                  <span className="mx-[7px] sm:mx-[12px] text-[15px] font-[700]">:</span>

                  <div className="text-center">
                    <p className="font-inter font-[700] text-[15px]">59</p>
                    <p className="font-inter font-[400] text-[15px]">Minutes</p>
                  </div>

                  <span className="mx-[7px] sm:mx-[12px] text-[15px] font-[700]">:</span>

                  <div className="text-center">
                    <p className="font-inter font-[700] text-[15px]">56</p>
                    <p className="font-inter font-[400] text-[15px]">Seconds</p>
                  </div>
                </div>

                {/* Inputs */}
                <input
                  type="text"
                  placeholder="*Full Name"
                  className="font-inter font-[400] w-full h-[38px] mt-[15px] rounded-[8px] bg-white/40 px-[12px] text-[15px] text-white placeholder-white/60 outline-none"
                />

                <input
                  type="text"
                  placeholder="*Phone No."
                  className="font-inter font-[400] w-full h-[38px] mt-[8px] rounded-[8px] bg-white/40 px-[12px] text-[15px] text-white placeholder-white/60 outline-none"
                />

                <input
                  type="email"
                  placeholder="*Email"
                  className="font-inter font-[400] w-full h-[38px] mt-[8px] rounded-[8px] bg-white/40 px-[12px] text-[15px] text-white placeholder-white/60 outline-none"
                />

                {/* Work Experience */}
                <div className="relative mt-[8px]">
                  <select className="appearance-none font-inter font-[400] w-full h-[38px] rounded-[8px] bg-white/40 px-[12px] text-[15px] text-white outline-none">
                    <option className="text-black">*Work Experience</option>
                    <option className="text-black">Fresher</option>
                    <option className="text-black">1-2 Years</option>
                    <option className="text-black">3-5 Years</option>
                    <option className="text-black">5+ Years</option>
                  </select>

                  <ChevronDown
                    size={17}
                    className="absolute right-[10px] top-[10px] text-white pointer-events-none"
                  />
                </div>

                {/* Submit */}
                <div className="flex items-center mt-[22px]">
                  <button className="h-[40px] w-[98px] rounded-full bg-[#fca311] text-white font-inter font-[400] text-[15px] hover:bg-[#ed9400] transition">
                    Submit
                  </button>

                  <button className="w-[40px] h-[40px] rounded-full bg-[#fca311] flex items-center justify-center">
                    <ArrowUpRight size={19} className="text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* ================= DOWNLOAD ================= */}
            <div className="flex items-center mt-[22px] w-full">
              <button className="h-[41px] flex-1 max-w-[205px] rounded-full bg-[#273878] text-white font-inter font-[700] text-[15px] hover:bg-[#1e2f70] transition">
                Download Curriculum
              </button>

              <button className="w-[40px] h-[40px] rounded-full bg-[#526bc5] flex items-center justify-center shrink-0">
                <Download size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
