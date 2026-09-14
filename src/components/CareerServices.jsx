import React, { useState } from "react";
import {
  Building2,
  UsersRound,
  BriefcaseBusiness,
  Award,
  Handshake,
  UserRoundCheck,
} from "lucide-react";

const CareerServices = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Guaranteed Internship",
      icon: Building2,
    },
    {
      title: "Placement Support",
      icon: Handshake,
    },
    {
      title: "Interview Preparation",
      icon: UserRoundCheck,
    },
    {
      title: "Profile Building",
      icon: Award,
    },
  ];

  const services = [
    {
      title: (
        <>
          3-Month Guaranteed
          <br />
          Internship
        </>
      ),
      description:
        "Get a sure 3-month internship with our partner companies. It helps you use what you learn in class in real work and understand how companies operate.",
      icon: BriefcaseBusiness,
      bg: "bg-[#f6e9dc]",
    },
    {
      title: (
        <>
          Hands-On Industry
          <br />
          Experience
        </>
      ),
      description:
        "Work on real industry projects to build your confidence, improve skills, and make your portfolio strong for placements.",
      icon: UsersRound,
      bg: "bg-[#dce2fa]",
    },
  ];

  return (
    <section className="w-full bg-[#f0f2ff] py-[40px] sm:py-[45px]">
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
          gap-[25px]
        "
      >
        {/* ================= LEFT IMAGE ================= */}

        <div
          className="
            relative
            w-full
            max-w-[298px]
            h-[360px]
            sm:h-[423px]
            shrink-0
            mx-auto
            lg:mx-0
          "
        >
          <img
            src="/images/career-services.png"
            alt="Career Services"
            className="
              w-full
              h-full
              object-cover
              rounded-[22px]
            "
          />

          {/* Floating Icon */}

          <div
            className="
              absolute
              bottom-0
              right-[-1px]
              w-[70px]
              h-[70px]
              sm:w-[78px]
              sm:h-[78px]
              rounded-[16px]
              bg-[#293b86]
              border-[8px]
              sm:border-[10px]
              border-[#f0f2ff]
              flex
              items-center
              justify-center
              shadow-lg
            "
          >
            <UsersRound
              size={34}
              className="text-white sm:w-[38px] sm:h-[38px]"
              strokeWidth={2}
            />
          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}

        <div className="w-full flex-1">
          {/* Heading */}

          <h2
            className="
              font-yantra
              text-[23px]
              sm:text-[25px]
              leading-[30px]
              sm:leading-[32px]
              font-bold
              text-[#273878]
              text-center
              lg:text-left
            "
          >
            Career <span className="text-[#fca311]">Services</span>
          </h2>

          {/* ================= TABS ================= */}

          <div
            className="
              relative
              mt-[28px]
              sm:mt-[40px]
              min-h-[90px]
              bg-[#273878]
              rounded-[30px]
              sm:rounded-l-[50px]
              sm:rounded-r-[50px]
              grid
              grid-cols-2
              lg:flex
              lg:items-center
              lg:justify-between
              px-[10px]
              sm:px-[20px]
              py-[8px]
              sm:py-0
            "
          >
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = activeTab === index;

              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className="
                    relative
                    h-[75px]
                    sm:h-[80px]
                    lg:h-[90px]
                    lg:flex-1
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-white
                    cursor-pointer
                  "
                >
                  {/* Active Circle */}

                  {isActive && (
                    <div
                      className="
                        absolute
                        -top-[18px]
                        sm:-top-[30px]
                        lg:-top-[43px]
                        left-1/2
                        -translate-x-1/2
                        w-[65px]
                        h-[65px]
                        sm:w-[74px]
                        sm:h-[74px]
                        lg:w-[82px]
                        lg:h-[82px]
                        rounded-full
                        bg-[#e9edff]
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <div
                        className="
                          w-[42px]
                          h-[42px]
                          sm:w-[46px]
                          sm:h-[46px]
                          lg:w-[48px]
                          lg:h-[48px]
                          rounded-full
                          bg-[#273878]
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <Icon
                          size={22}
                          className="text-[#fca311] sm:w-[25px] sm:h-[25px]"
                        />
                      </div>
                    </div>
                  )}

                  {/* Normal Icon */}

                  {!isActive && (
                    <Icon
                      size={22}
                      className="text-white mb-[5px] sm:mb-[7px]"
                    />
                  )}

                  <span
                    className={`
                      font-yantra
                      text-[10px]
                      sm:text-[11px]
                      lg:text-[12px]
                      leading-[13px]
                      sm:leading-[15px]
                      font-semibold
                      text-center
                      px-[4px]
                      ${isActive ? "mt-[24px] sm:mt-[30px] lg:mt-[35px]" : ""}
                    `}
                  >
                    {tab.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ================= SERVICE CARDS ================= */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-[12px]
              sm:gap-[15px]
              mt-[18px]
              sm:mt-[22px]
            "
          >
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className={`
                    w-full
                    min-h-[220px]
                    sm:h-[239px]
                    ${service.bg}
                    border
                    border-[#c9c9c9]
                    rounded-[7px]
                    p-[18px]
                    sm:p-[22px]
                    transition-all
                    duration-200
                    hover:-translate-y-[3px]
                    hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]
                  `}
                >
                  {/* Icon Circle */}

                  <div
                    className="
                      w-[52px]
                      h-[52px]
                      sm:w-[58px]
                      sm:h-[58px]
                      rounded-full
                      bg-white
                      shadow-[0_3px_10px_rgba(0,0,0,0.10)]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Icon
                      size={24}
                      className="text-[#5d74d0] sm:w-[27px] sm:h-[27px]"
                    />
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      font-yantra
                      mt-[15px]
                      sm:mt-[18px]
                      text-[15px]
                      sm:text-[16px]
                      leading-[18px]
                      sm:leading-[19px]
                      font-bold
                      text-black
                    "
                  >
                    {service.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      font-yantra
                      mt-[9px]
                      sm:mt-[11px]
                      text-[11px]
                      sm:text-[12px]
                      leading-[16px]
                      sm:leading-[17px]
                      text-black
                    "
                  >
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerServices;
