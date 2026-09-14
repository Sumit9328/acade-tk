import React from "react";
import {
  GraduationCap,
  Handshake,
  HardHat,
  UserRound,
  PenTool,
  BadgeDollarSign,
  Code2,
  MessageCircleQuestion,
} from "lucide-react";

const CoreUSPs = () => {
  const uspData = [
    {
      icon: GraduationCap,
      title: "IIT Designed Curriculum",
      highlight: "Certificate From IIT",
    },
    {
      icon: Handshake,
      title: "Placement Support",
      highlight: "100%",
    },
    {
      icon: HardHat,
      title: "Alumni Status",
      highlight: "E&ICT Academy, IIT Roorkee",
    },
    {
      icon: UserRound,
      title: "Corporate Internship",
      highlight: "3-Months Internship",
    },
    {
      icon: PenTool,
      title: "Industry Based Projects",
      highlight: "50+ Live Projects",
    },
    {
      icon: BadgeDollarSign,
      title: "Scholarship Available",
      highlight: "Get Upto 30%",
    },
    {
      icon: Code2,
      title: "No Coding Experience Needed",
      highlight: "Non-Tech Can Also Apply",
    },
    {
      icon: MessageCircleQuestion,
      title: "1:1 Live",
      highlight: "Doubt Resolution",
    },
  ];

  return (
    <section className="w-full bg-white py-[40px] sm:py-[48px]">
      <div
        className="
          w-full
          max-w-[1050px]
          mx-auto
          px-5
          sm:px-8
          lg:px-0
        "
      >
        {/* ================= HEADING ================= */}

        <h2
          className="
            font-yantra
            text-[26px]
            sm:text-[30px]
            leading-[31px]
            sm:leading-[36px]
            font-bold
            text-[#273878]
          "
        >
          Core USPs Of <span className="text-[#fca311]">This</span>
          <br />
          <span className="text-[#fca311]">Program</span>
        </h2>

        {/* ================= USP GRID ================= */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-[12px]
            sm:gap-[15px]
            mt-[22px]
          "
        >
          {uspData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  w-full
                  h-[190px]
                  sm:h-[205px]
                  lg:h-[217px]
                  border
                  border-[#e5e5e5]
                  rounded-[7px]
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  px-[15px]
                  transition-all
                  duration-200
                  hover:-translate-y-[3px]
                  hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]
                "
              >
                {/* ================= ICON ================= */}

                <div className="mb-[22px] sm:mb-[27px]">
                  <Icon
                    size={39}
                    strokeWidth={2.3}
                    className="text-[#5b74d1] sm:w-[43px] sm:h-[43px]"
                  />
                </div>

                {/* ================= TEXT ================= */}

                <p
                  className="
                    font-yantra
                    text-[13px]
                    leading-[18px]
                    text-[#273878]
                  "
                >
                  {item.title}
                </p>

                <p
                  className="
                    font-yantra
                    text-[13px]
                    leading-[18px]
                    font-bold
                    text-[#273878]
                  "
                >
                  {item.highlight}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreUSPs;
