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
    <section className="w-full bg-[#f0f2ff] py-[45px]">

      <div className="max-w-[1050px] mx-auto flex gap-[25px]">

        {/* ================= LEFT IMAGE ================= */}

        <div className="relative w-[298px] h-[423px] shrink-0">

          <img
            src="/images/career-services.png"
            alt="Career Services"
            className="w-full h-full object-cover rounded-[22px]"
          />

          {/* Floating Icon */}

          <div
            className="absolute bottom-[0px] right-[-1px]
            w-[78px] h-[78px] rounded-[16px]
            bg-[#293b86] border-[10px] border-[#f0f2ff]
            flex items-center justify-center shadow-lg"
          >
            <UsersRound
              size={38}
              strokeWidth={2}
              className="text-white"
            />
          </div>

        </div>


        {/* ================= RIGHT CONTENT ================= */}

        <div className="flex-1">

          {/* Heading */}

          <h2 className="text-[25px] leading-[32px] font-bold text-[#273878]">
            Career{" "}
            <span className="text-[#fca311]">
              Services
            </span>
          </h2>


          {/* ================= TABS ================= */}

          <div
            className="relative mt-[40px] h-[90px]
            bg-[#273878] rounded-l-[50px] rounded-r-[50px]
            flex items-center justify-between px-[20px]"
          >

            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = activeTab === index;

              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className="relative h-full flex-1 flex flex-col
                  items-center justify-center text-white
                  cursor-pointer"
                >

                  {/* Active Circle */}

                  {isActive && (
                    <div
                      className="absolute -top-[43px] left-1/2
                      -translate-x-1/2 w-[82px] h-[82px]
                      rounded-full bg-[#e9edff]
                      flex items-center justify-center"
                    >
                      <div
                        className="w-[48px] h-[48px]
                        rounded-full bg-[#273878]
                        flex items-center justify-center"
                      >
                        <Icon
                          size={25}
                          className="text-[#fca311]"
                        />
                      </div>
                    </div>
                  )}

                  {/* Normal Icon */}

                  {!isActive && (
                    <Icon
                      size={24}
                      className="text-white mb-[7px]"
                    />
                  )}

                  <span
                    className={`text-[12px] leading-[15px] font-semibold ${
                      isActive ? "mt-[35px]" : ""
                    }`}
                  >
                    {tab.title}
                  </span>

                </button>
              );
            })}

          </div>


          {/* ================= SERVICE CARDS ================= */}

          <div className="grid grid-cols-2 gap-[15px] mt-[22px]">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className={`h-[239px] ${service.bg}
                  border border-[#c9c9c9] rounded-[7px]
                  p-[22px]`}
                >

                  {/* Icon Circle */}

                  <div
                    className="w-[58px] h-[58px] rounded-full
                    bg-white shadow-[0_3px_10px_rgba(0,0,0,0.10)]
                    flex items-center justify-center"
                  >
                    <Icon
                      size={27}
                      className="text-[#5d74d0]"
                    />
                  </div>


                  {/* Title */}

                  <h3
                    className="mt-[18px] text-[16px]
                    leading-[19px] font-bold text-black"
                  >
                    {service.title}
                  </h3>


                  {/* Description */}

                  <p
                    className="mt-[11px] text-[12px]
                    leading-[17px] text-black"
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