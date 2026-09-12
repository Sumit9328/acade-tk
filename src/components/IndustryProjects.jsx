import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Download,
} from "lucide-react";

const IndustryProjects = () => {
  const projects = [
    {
      image: "/images/covid-analysis.png",
      title: "COVID Analysis in India",
      description:
        "Web Scrape the data from the official government website and find various insights by comparing the trend of COVID in India as compared to the world.",
    },
    {
      image: "/images/twitter-analysis.png",
      title: "Twitter Sentiment Analysis Via Tweepy",
      description:
        "Analyzing the tweets for understanding the sentiments of users",
    },
    {
      image: "/images/air-passenger.png",
      title: "Forecast Air Passenger Traffic",
      description:
        "To Build a model to forecast the demand (passenger traffic) in Airplanes",
    },
    {
      image: "/images/kidney-disease.png",
      title: "Chronic Kidney Disease Prediction",
      description:
        "Accurate prediction of CKD progression over time for reducing its costs and the mortality rates",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#202f78] to-[#5c73d0] py-[42px]">

      {/* ================= BACKGROUND DESIGN ================= */}
      <div className="absolute top-0 right-0 pointer-events-none">
        <div className="w-[400px] h-[170px] border-l-[100px] border-r-[100px] border-t-[70px] border-transparent border-t-[#6d82d5]/30 rotate-[30deg]"></div>
      </div>

      <div className="relative z-10 max-w-[1050px] mx-auto">

        {/* ================= HEADING ================= */}
        <h2 className="text-center text-[24px] leading-[30px] font-bold text-white">
          Live Industry{" "}
          <span className="text-[#fca311]">Projects</span>
        </h2>

        <p className="text-center text-[12px] leading-[16px] text-white mt-[12px] max-w-[600px] mx-auto">
          Industry projects are a part of online data science machine learning
          training. Such projects will ensure
          <br />
          exposure to real-world experience for starting a career in DS & ML.
        </p>


        {/* ================= PROJECT CARDS ================= */}
        <div className="grid grid-cols-4 gap-[15px] mt-[44px]">

          {projects.map((project, index) => (
            <div
              key={index}
              className="h-[252px] bg-white rounded-[8px] p-[15px] shadow-sm"
            >

              {/* Image */}
              <div className="w-full h-[105px] overflow-hidden rounded-[8px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="mt-[12px] text-[13px] leading-[17px] font-bold text-black">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-[7px] text-[11px] leading-[15px] text-[#222]">
                {project.description}
              </p>

            </div>
          ))}

        </div>


        {/* ================= BOTTOM CONTROLS ================= */}
        <div className="flex items-center justify-between mt-[19px]">

          {/* Download */}
          <div className="flex items-center">

            <button
              className="h-[40px] px-[24px] rounded-full
              bg-[#fca311] text-white font-semibold text-[14px]"
            >
              Download Projects
            </button>

            <button
              className="w-[40px] h-[40px] rounded-full
              bg-[#fca311] flex items-center justify-center"
            >
              <Download size={18} className="text-white" />
            </button>

          </div>


          {/* Slider */}
          <div className="flex items-center gap-[12px] mr-[280px]">

            <button
              className="w-[30px] h-[30px] rounded-full bg-[#fca311]
              flex items-center justify-center"
            >
              <ArrowLeft size={17} className="text-white" />
            </button>

            {/* Line */}
            <div className="relative w-[245px] h-[2px] bg-white/60">

              <div className="absolute left-0 top-0 w-[90px] h-[2px] bg-[#fca311]"></div>

            </div>

            <button
              className="w-[30px] h-[30px] rounded-full bg-[#fca311]
              flex items-center justify-center"
            >
              <ArrowRight size={17} className="text-white" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default IndustryProjects;