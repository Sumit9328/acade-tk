import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
} from "lucide-react";

const ProgramValue = () => {
  return (
    <section className="w-full bg-white py-[40px] sm:py-[45px]">
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
          items-center
          lg:items-center
          gap-[30px]
          lg:gap-[45px]
        "
      >
        {/* ================= LEFT IMAGE ================= */}

        <div
          className="
            w-full
            max-w-[380px]
            h-[260px]
            sm:h-[300px]
            lg:h-[330px]
            flex
            items-center
            justify-center
            shrink-0
          "
        >
          <img
            src="/images/program-value.png"
            alt="Program Benefits"
            className="w-full h-full object-contain"
          />
        </div>

        {/* ================= RIGHT CONTENT ================= */}

        <div className="w-full flex-1">
          {/* Heading */}

          <h2
            className="
              font-yantra
              text-[22px]
              sm:text-[24px]
              leading-[29px]
              sm:leading-[32px]
              font-bold
              text-[#111b78]
              text-center
              lg:text-left
            "
          >
            The unparalleled distinction and transformative
            <br className="hidden lg:block" />
            <span className="text-[#fca311]">value of this program</span>
          </h2>

          {/* Cards */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-[14px]
              mt-[22px]
              sm:mt-[25px]
            "
          >
            {/* Card 1 */}

            <div
              className="
                min-h-[169px]
                rounded-[8px]
                bg-white
                shadow-[0_3px_12px_rgba(0,0,0,0.10)]
                p-[15px]
              "
            >
              <div className="flex items-center gap-[12px]">
                <div className="w-[34px] h-[34px] flex items-center justify-center shrink-0">
                  <BriefcaseBusiness size={30} className="text-[#5b74d1]" />
                </div>

                <h3 className="font-yantra text-[14px] font-bold text-[#273878]">
                  Live Interaction Sessions
                </h3>
              </div>

              <p className="font-yantra mt-[20px] sm:mt-[25px] text-[12px] leading-[17px] text-[#222]">
                Join live sessions with industry experts to learn real
                problem-solving skills.
              </p>
            </div>

            {/* Card 2 */}

            <div
              className="
                min-h-[169px]
                rounded-[8px]
                bg-[#e5eaff]
                shadow-[0_3px_12px_rgba(0,0,0,0.08)]
                p-[15px]
              "
            >
              <div className="flex items-center gap-[12px]">
                <div className="w-[34px] h-[34px] flex items-center justify-center shrink-0">
                  <BadgeCheck size={30} className="text-[#5b74d1]" />
                </div>

                <h3 className="font-yantra text-[14px] font-bold text-[#273878]">
                  Prestigious Certification
                </h3>
              </div>

              <p className="font-yantra mt-[20px] text-[12px] leading-[17px] text-[#222]">
                Earn an Advanced Data Science and Machine Learning certificate
                from E&ICT IIT Roorkee and an Industrial Training Certificate
                for real-world experience.
              </p>
            </div>
          </div>

          {/* ================= BOTTOM BUTTONS ================= */}

          <div
            className="
              flex
              items-center
              justify-center
              lg:justify-start
              flex-wrap
              gap-[8px]
              mt-[22px]
            "
          >
            {/* Previous */}

            <button
              className="
                w-[40px]
                h-[40px]
                rounded-full
                bg-white
                shadow-[0_3px_12px_rgba(0,0,0,0.10)]
                flex
                items-center
                justify-center
                hover:shadow-[0_4px_15px_rgba(0,0,0,0.15)]
                transition
              "
            >
              <ArrowLeft size={18} className="text-[#333]" />
            </button>

            {/* Next */}

            <button
              className="
                w-[40px]
                h-[40px]
                rounded-full
                bg-[#31448d]
                flex
                items-center
                justify-center
                hover:bg-[#263775]
                transition
              "
            >
              <ArrowRight size={18} className="text-white" />
            </button>

            {/* Enquire Now */}

            <button
              className="
                h-[40px]
                w-[138px]
                rounded-full
                bg-gradient-to-r
                from-[#273878]
                to-[#5c75d1]
                text-white
                font-yantra
                font-semibold
                text-[14px]
                hover:opacity-90
                transition
              "
            >
              Enquire Now
            </button>

            {/* Arrow */}

            <button
              className="
                w-[40px]
                h-[40px]
                rounded-full
                bg-[#536dca]
                flex
                items-center
                justify-center
                hover:bg-[#425bb3]
                transition
              "
            >
              <ArrowUpRight size={19} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramValue;
