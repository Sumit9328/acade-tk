import React from "react";
import {
  UsersRound,
  GraduationCap,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  MessageSquareCode,
  ArrowUpRight,
} from "lucide-react";

const WhoShould = () => {
  const audience = [
    {
      title: "Freshers",
      icon: UsersRound,
      dark: true,
    },
    {
      title: (
        <>
          Graduates/
          <br />
          Post Graduates / PhD
        </>
      ),
      icon: GraduationCap,
      dark: false,
    },
    {
      title: "Working Professionals",
      icon: BriefcaseBusiness,
      dark: true,
    },
    {
      title: "Entrepreneurs",
      icon: Building2,
      dark: false,
    },
    {
      title: "DS/ML/AI Enthusiasts",
      icon: ChartNoAxesCombined,
      dark: true,
    },
    {
      title: "Tech Innovators",
      icon: MessageSquareCode,
      dark: false,
    },
  ];

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f0f2ff]
        py-[35px]
        sm:py-[45px]
        lg:py-[45px]
      "
    >
      {/* ================= BACKGROUND DECORATION ================= */}

      {/* Right Lines */}
      <div className="absolute top-0 right-[5px] sm:right-[10px] flex gap-[5px] sm:gap-[8px] opacity-60">
        <div className="w-[7px] sm:w-[12px] h-[80px] sm:h-[105px] rounded-b-full bg-[#dce3ff]" />
        <div className="w-[7px] sm:w-[12px] h-[105px] sm:h-[138px] rounded-b-full bg-[#dce3ff]" />
        <div className="w-[7px] sm:w-[12px] h-[125px] sm:h-[165px] rounded-b-full bg-[#dce3ff]" />
        <div className="w-[7px] sm:w-[12px] h-[105px] sm:h-[140px] rounded-b-full bg-[#dce3ff]" />
      </div>

      {/* Bottom Left Lines */}
      <div className="absolute bottom-[18px] left-0 flex flex-col gap-[6px] sm:gap-[8px] opacity-70">
        <div className="w-[180px] sm:w-[300px] lg:w-[348px] h-[9px] sm:h-[13px] rounded-r-full bg-[#dce3ff]" />
        <div className="w-[150px] sm:w-[250px] lg:w-[292px] h-[9px] sm:h-[13px] rounded-r-full bg-[#dce3ff]" />
        <div className="w-[115px] sm:w-[190px] lg:w-[222px] h-[9px] sm:h-[13px] rounded-r-full bg-[#dce3ff]" />
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
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-[30px]
          sm:gap-[35px]
          lg:gap-0
        "
      >
        {/* ================= LEFT ================= */}

        <div className="w-full lg:w-[385px] text-center lg:text-left">
          <h2
            className="
              font-inter
              font-[700]
              text-[28px]
              leading-[34px]
              sm:leading-[36px]
              text-[#263675]
            "
          >
            Who Should
            <br />
            <span className="text-[#fca311]">Do This Program?</span>
          </h2>

          <p
            className="
              font-inter
              font-[400]
              mt-[12px]
              w-full
              max-w-[345px]
              mx-auto
              lg:mx-0
              text-[15px]
              leading-[21px]
              text-[#222]
            "
          >
            This program helps anyone learn and grow in data science and
            artificial intelligence, no matter their background.
          </p>

          {/* Download Button */}

          <div className="flex items-center justify-center lg:justify-start mt-[20px]">
            <button
              className="
                h-[40px]
                w-[190px]
                rounded-full
                bg-[#273878]
                text-white
                font-inter
                font-[700]
                text-[15px]
                hover:bg-[#1e2d65]
                transition
              "
            >
              Download Brochure
            </button>

            <button
              className="
                w-[40px]
                h-[40px]
                rounded-full
                bg-[#273878]
                flex
                items-center
                justify-center
                -ml-[1px]
                hover:bg-[#1e2d65]
                transition
              "
            >
              <ArrowUpRight size={19} className="text-white" />
            </button>
          </div>
        </div>

        {/* ================= RIGHT GRID ================= */}

        <div
          className="
            w-full
            max-w-[500px]
            grid
            grid-cols-2
            lg:grid-cols-3
            gap-[12px]
            sm:gap-[15px]
          "
        >
          {audience.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`
                  w-full
                  min-h-[130px]
                  sm:min-h-[141px]
                  rounded-[9px]
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  shadow-[0_3px_8px_rgba(0,0,0,0.08)]
                  transition-transform
                  duration-200
                  hover:-translate-y-[3px]
                  ${
                    item.dark
                      ? "bg-[#253477] text-white"
                      : "bg-[#5b74d1] text-white"
                  }
                `}
              >
                {/* Icon */}

                <div className="mb-[8px]">
                  <Icon
                    size={30}
                    strokeWidth={2.2}
                    className="text-white sm:w-[32px] sm:h-[32px]"
                  />
                </div>

                {/* Title */}

                <p
                  className="
                    font-inter
                    font-[700]
                    text-[15px]
                    leading-[20px]
                    px-[8px]
                  "
                >
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoShould;
