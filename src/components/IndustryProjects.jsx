import React from "react";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";

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
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-gradient-to-r
        from-[#202f78]
        to-[#5c73d0]
        py-[30px]
        sm:py-[38px]
        lg:py-[42px]
      "
    >
      {/* ================= BACKGROUND DESIGN ================= */}

      <div className="absolute top-0 right-0 pointer-events-none">
        <div
          className="
            w-[180px]
            sm:w-[280px]
            lg:w-[400px]
            h-[110px]
            sm:h-[140px]
            lg:h-[170px]
            border-l-[50px]
            sm:border-l-[70px]
            lg:border-l-[100px]
            border-r-[50px]
            sm:border-r-[70px]
            lg:border-r-[100px]
            border-t-[45px]
            sm:border-t-[55px]
            lg:border-t-[70px]
            border-transparent
            border-t-[#6d82d5]/30
            rotate-[30deg]
          "
        />
      </div>

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
          lg:px-5
          xl:px-0
        "
      >
        {/* ================= HEADING ================= */}

        <h2
          className="
            font-inter
            font-[700]
            text-center
            text-[28px]
            leading-[34px]
            text-white
          "
        >
          Live Industry <span className="text-[#fca311]">Projects</span>
        </h2>

        <p
          className="
            font-inter
            font-[400]
            text-center
            text-[15px]
            leading-[21px]
            text-white
            mt-[10px]
            sm:mt-[12px]
            max-w-[700px]
            mx-auto
          "
        >
          Industry projects are a part of online data science machine learning
          training. Such projects will ensure
          <br className="hidden sm:block" />
          exposure to real-world experience for starting a career in DS & ML.
        </p>

        {/* ================= PROJECT CARDS ================= */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-[15px]
            mt-[28px]
            sm:mt-[35px]
            lg:mt-[44px]
          "
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                w-full
                min-h-[252px]
                bg-white
                rounded-[8px]
                p-[15px]
                shadow-sm
                transition-transform
                duration-200
                hover:-translate-y-[3px]
              "
            >
              {/* Image */}

              <div
                className="
                  w-full
                  h-[180px]
                  sm:h-[145px]
                  lg:h-[105px]
                  overflow-hidden
                  rounded-[8px]
                "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}

              <h3
                className="
                  font-inter
                  font-[700]
                  mt-[12px]
                  text-[15px]
                  leading-[20px]
                  text-black
                "
              >
                {project.title}
              </h3>

              {/* Description */}

              <p
                className="
                  font-inter
                  font-[400]
                  mt-[7px]
                  text-[15px]
                  leading-[21px]
                  text-[#222]
                "
              >
                {project.description}
              </p>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM CONTROLS ================= */}

        <div
          className="
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-[18px]
            mt-[22px]
          "
        >
          {/* Download */}

          <div className="flex items-center">
            <button
              className="
                h-[40px]
                px-[20px]
                sm:px-[24px]
                rounded-full
                bg-[#fca311]
                text-white
                font-inter
                font-[700]
                text-[15px]
                hover:bg-[#ed9400]
                transition
              "
            >
              Download Projects
            </button>

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
              <Download size={18} className="text-white" />
            </button>
          </div>

          {/* Slider */}

          <div
            className="
              flex
              items-center
              gap-[8px]
              sm:gap-[12px]
              mr-0
              lg:mr-[280px]
              w-full
              sm:w-auto
              justify-center
            "
          >
            {/* Previous */}

            <button
              className="
                w-[30px]
                h-[30px]
                rounded-full
                bg-[#fca311]
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <ArrowLeft size={17} className="text-white" />
            </button>

            {/* Line */}

            <div
              className="
                relative
                w-[130px]
                sm:w-[190px]
                lg:w-[245px]
                h-[2px]
                bg-white/60
              "
            >
              <div
                className="
                  absolute
                  left-0
                  top-0
                  w-[48px]
                  sm:w-[65px]
                  lg:w-[90px]
                  h-[2px]
                  bg-[#fca311]
                "
              />
            </div>

            {/* Next */}

            <button
              className="
                w-[30px]
                h-[30px]
                rounded-full
                bg-[#fca311]
                flex
                items-center
                justify-center
                shrink-0
              "
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
