import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const FeeStructure = () => {
  const [paymentType, setPaymentType] = useState("oneTime");

  return (
    <section className="w-full bg-white py-[48px]">

      <div className="max-w-[1050px] mx-auto">

        {/* ================= HEADING ================= */}

        <h2 className="text-center text-[24px] leading-[30px] font-bold text-[#273878]">
          Data Science, Machine Learning & AI{" "}
          <span className="text-[#fca311]">
            Course Fee Structure
          </span>
        </h2>


        {/* ================= MAIN BOX ================= */}

        <div className="mt-[43px] bg-[#e3e8ff] rounded-[15px] p-[23px]">

          <div className="bg-[#f0f2ff] rounded-[14px] overflow-hidden">

            <div className="grid grid-cols-2">


              {/* ================================================= */}
              {/* LEFT SIDE */}
              {/* ================================================= */}

              <div className="px-[18px] pt-[27px] pb-[30px]">

                {/* Fee Box */}

                <div className="rounded-[14px] overflow-hidden bg-[#dfe5ff]">

                  {/* Tabs */}

                  <div className="flex pt-[22px] px-[23px]">

                    <button
                      onClick={() => setPaymentType("oneTime")}
                      className={`h-[38px] px-[17px] text-[14px] font-bold
                      ${
                        paymentType === "oneTime"
                          ? "bg-[#273878] text-white rounded-l-[8px]"
                          : "bg-[#e9edff] text-[#273878]"
                      }`}
                    >
                      One Time
                    </button>

                    <button
                      onClick={() => setPaymentType("emi")}
                      className={`h-[38px] px-[20px] text-[14px] font-bold
                      ${
                        paymentType === "emi"
                          ? "bg-[#273878] text-white rounded-r-[8px]"
                          : "bg-[#e9edff] text-[#273878]"
                      }`}
                    >
                      EMI
                    </button>

                  </div>


                  {/* Price */}

                  <div className="px-[24px] pt-[13px] pb-[13px]">

                    <p className="text-[23px] font-bold text-[#273878]">
                      {paymentType === "oneTime"
                        ? "₹ 90,000 + 18% GST"
                        : "₹ 8,850 / Month"}
                    </p>

                  </div>


                  {/* More Info */}

                  <div className="h-[46px] bg-[#273878] px-[24px] flex items-center">

                    <button
                      className="h-[30px] w-[115px] rounded-full
                      bg-[#fca311] text-white text-[13px] font-semibold"
                    >
                      More Info
                    </button>

                  </div>

                </div>


                {/* Program Description */}

                <h3 className="mt-[19px] text-[18px] leading-[24px] font-bold text-[#1e4c61]">
                  Professional Program In{" "}
                  <span className="text-[#fca311]">
                    Data Science,
                    <br />
                    Machine Learning, AI & GenAI
                  </span>
                </h3>


                {/* Corporate Text */}

                <p className="mt-[9px] text-[12px] leading-[17px] text-black">
                  Special Corporate Enrolment Pricing Enroll before{" "}
                  <span className="font-bold">
                    22 November
                  </span>
                  <br />
                  <span className="font-bold">
                    2025
                  </span>{" "}
                  to avail additional 10% early bird{" "}
                  <span className="font-bold">
                    discount.
                  </span>
                </p>


                {/* Book Slot */}

                <div className="flex items-center mt-[22px]">

                  <button
                    className="h-[40px] w-[153px]
                    rounded-full bg-[#273878]
                    text-white font-semibold text-[14px]"
                  >
                    Book Your Slot
                  </button>

                  <button
                    className="w-[40px] h-[40px]
                    rounded-full bg-[#526bc5]
                    flex items-center justify-center"
                  >
                    <ArrowUpRight
                      size={19}
                      className="text-white"
                    />
                  </button>

                </div>


                {/* Pay Full Fees */}

                <div className="flex items-center mt-[15px]">

                  <button
                    className="h-[40px] w-[290px]
                    rounded-full bg-[#fca311]
                    text-white font-semibold text-[14px]"
                  >
                    Pay Full Fees (Early-Bid Discount)
                  </button>

                  <button
                    className="w-[40px] h-[40px]
                    rounded-full bg-[#fca311]
                    flex items-center justify-center"
                  >
                    <ArrowUpRight
                      size={19}
                      className="text-white"
                    />
                  </button>

                </div>

              </div>


              {/* ================================================= */}
              {/* RIGHT SIDE */}
              {/* ================================================= */}

              <div className="border-l border-[#d3d8ef] px-[23px] pt-[20px] pb-[30px]">

                {/* IIT + EICT Logos */}

                <div className="h-[62px] flex items-center justify-between px-[3px]">

                  <img
                    src="/images/iit-roorkee-eict.png"
                    alt="IIT Roorkee and EICT"
                    className="max-w-[370px] max-h-[58px] object-contain"
                  />

                </div>


                {/* Scholarship */}

                <div className="mt-[18px] rounded-[14px] overflow-hidden">

                  <div className="h-[57px] bg-[#e1e7ff] flex items-center justify-center">

                    <p className="text-[23px] font-bold text-[#273878]">
                      Avail Scholarship
                    </p>

                  </div>

                  <div className="h-[46px] bg-[#273878] flex items-center justify-center">

                    <p className="text-[23px] italic font-bold text-white">
                      Up To 30%
                    </p>

                  </div>

                </div>


                {/* What's Included */}

                <div className="mt-[24px]">

                  <h4 className="text-[12px] font-bold text-black">
                    What’s Included in the Fee
                  </h4>

                  <ul className="mt-[7px] list-disc pl-[18px] text-[12px] leading-[19px] text-black">

                    <li>250+ Hours of Instructor Led Live Training</li>

                    <li>Certification from E&ICT Academy, IIT Roorkee</li>

                    <li>Learn From IIT Professors and the Industry Experts</li>

                    <li>Access to Course Materials and Resources</li>

                    <li>Hands-on Projects and Case Studies</li>

                    <li>100% Placement Support By Dedicated Team*</li>

                  </ul>

                </div>


                {/* Additional Benefits */}

                <div className="mt-[12px]">

                  <h4 className="text-[12px] font-bold text-black">
                    Additional Benefits
                  </h4>

                  <ul className="mt-[5px] list-disc pl-[18px] text-[12px] leading-[19px] text-black">

                    <li>Lifetime Access to Live Recorded Sessions</li>

                    <li>
                      Complimentary Career Guidance or Resume-building
                    </li>

                    <li>
                      Three Months Internship Experience By Industry Partners
                    </li>

                    <li>
                      1:1 Doubt Resolution In Live Sessions
                    </li>

                  </ul>

                </div>

              </div>

            </div>


            {/* ================================================= */}
            {/* FINANCIAL PARTNER */}
            {/* ================================================= */}

            <div className="h-[93px] bg-[#273878] px-[23px] flex items-center justify-between">

              <div className="text-white">

                <h4 className="text-[12px] font-bold">
                  Financial Partner
                </h4>

                <p className="mt-[8px] text-[12px] leading-[18px]">
                  Candidates can pay the course fee through Netbanking and credit/Debit cards. Also,
                  <br />
                  with our corporate financial partnerships avail education loans at 0% interest rate*
                </p>

              </div>


              {/* Razorpay */}

              <div className="w-[247px] h-[64px] bg-[#e5eaff] rounded-[8px] flex items-center justify-center">

                <img
                  src="/images/razorpay.png"
                  alt="Razorpay"
                  className="w-[145px] object-contain"
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default FeeStructure;