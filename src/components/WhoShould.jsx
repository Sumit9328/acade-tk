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
    <section className="relative w-full overflow-hidden bg-[#f0f2ff] py-[45px]">
      {/* ================= BACKGROUND DECORATION ================= */}

      {/* Right Lines */}
      <div className="absolute top-0 right-[10px] flex gap-[8px] opacity-60">
        <div className="w-[12px] h-[105px] rounded-b-full bg-[#dce3ff]" />
        <div className="w-[12px] h-[138px] rounded-b-full bg-[#dce3ff]" />
        <div className="w-[12px] h-[165px] rounded-b-full bg-[#dce3ff]" />
        <div className="w-[12px] h-[140px] rounded-b-full bg-[#dce3ff]" />
      </div>

      {/* Bottom Left Lines */}
      <div className="absolute bottom-[18px] left-0 flex flex-col gap-[8px] opacity-70">
        <div className="w-[348px] h-[13px] rounded-r-full bg-[#dce3ff]" />
        <div className="w-[292px] h-[13px] rounded-r-full bg-[#dce3ff]" />
        <div className="w-[222px] h-[13px] rounded-r-full bg-[#dce3ff]" />
      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 max-w-[1050px] mx-auto flex items-center justify-between">
        {/* ================= LEFT ================= */}

        <div className="w-[385px]">
          <h2 className="text-[40px] leading-[44px] font-bold text-[#263675]">
            Who Should
            <br />
            <span className="text-[#fca311]">Do This Program?</span>
          </h2>

          <p className="mt-[12px] w-[345px] text-[11px] leading-[15px] text-[#222]">
            This program helps anyone learn and grow in data science and
            artificial intelligence, no matter their background.
          </p>

          {/* Download Button */}

          <div className="flex items-center mt-[20px]">
            <button
              className="h-[40px] w-[190px] rounded-full
              bg-[#273878] text-white
              font-semibold text-[14px]"
            >
              Download Brochure
            </button>

            <button
              className="w-[40px] h-[40px] rounded-full
              bg-[#273878] flex items-center justify-center
              -ml-[1px]"
            >
              <ArrowUpRight size={19} className="text-white" />
            </button>
          </div>
        </div>

        {/* ================= RIGHT GRID ================= */}

        <div className="w-[500px] grid grid-cols-3 gap-[15px]">
          {audience.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`h-[141px] rounded-[9px]
                flex flex-col items-center justify-center
                text-center shadow-[0_3px_8px_rgba(0,0,0,0.08)]
                ${
                  item.dark
                    ? "bg-[#253477] text-white"
                    : "bg-[#5b74d1] text-white"
                }`}
              >
                {/* Icon */}

                <div className="mb-[8px]">
                  <Icon size={32} strokeWidth={2.2} className="text-white" />
                </div>

                {/* Title */}

                <p className="text-[12px] leading-[15px] font-semibold px-[8px]">
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
