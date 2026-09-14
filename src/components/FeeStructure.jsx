import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const FeeStructure = () => {
  const [paymentType, setPaymentType] = useState("oneTime");

  return (
    <section className="w-full bg-white py-[40px] sm:py-[48px]">
      <div className="w-full max-w-[1050px] mx-auto px-5 sm:px-8 lg:px-0">
        {/* ================= HEADING ================= */}

        <h2
          className="
            font-yantra
            text-center
            text-[21px]
            sm:text-[24px]
            leading-[27px]
            sm:leading-[30px]
            font-bold
            text-[#273878]
          "
        >
          Data Science, Machine Learning & AI{" "}
          <span className="text-[#fca311]">Course Fee Structure</span>
        </h2>

        {/* ================= MAIN BOX ================= */}

        <div
          className="
            mt-[30px]
            sm:mt-[43px]
            bg-[#e3e8ff]
            rounded-[15px]
            p-[12px]
            sm:p-[23px]
          "
        >
          <div className="bg-[#f0f2ff] rounded-[14px] overflow-hidden">
            {/* ================= MAIN CONTENT ================= */}

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* ================================================= */}
              {/* LEFT SIDE */}
              {/* ================================================= */}

              <div className="px-[15px] sm:px-[18px] pt-[20px] sm:pt-[27px] pb-[25px] sm:pb-[30px]">
                {/* Fee Box */}

                <div className="rounded-[14px] overflow-hidden bg-[#dfe5ff]">
                  {/* Tabs */}

                  <div className="flex pt-[18px] sm:pt-[22px] px-[18px] sm:px-[23px]">
                    <button
                      onClick={() => setPaymentType("oneTime")}
                      className={`
                        h-[38px]
                        px-[14px]
                        sm:px-[17px]
                        text-[13px]
                        sm:text-[14px]
                        font-yantra
                        font-bold
                        transition
                        ${
                          paymentType === "oneTime"
                            ? "bg-[#273878] text-white rounded-l-[8px]"
                            : "bg-[#e9edff] text-[#273878]"
                        }
                      `}
                    >
                      One Time
                    </button>

                    <button
                      onClick={() => setPaymentType("emi")}
                      className={`
                        h-[38px]
                        px-[18px]
                        sm:px-[20px]
                        text-[13px]
                        sm:text-[14px]
                        font-yantra
                        font-bold
                        transition
                        ${
                          paymentType === "emi"
                            ? "bg-[#273878] text-white rounded-r-[8px]"
                            : "bg-[#e9edff] text-[#273878]"
                        }
                      `}
                    >
                      EMI
                    </button>
                  </div>

                  {/* Price */}

                  <div className="px-[18px] sm:px-[24px] pt-[13px] pb-[13px]">
                    <p
                      className="
                        font-yantra
                        text-[19px]
                        sm:text-[23px]
                        font-bold
                        text-[#273878]
                      "
                    >
                      {paymentType === "oneTime"
                        ? "₹ 90,000 + 18% GST"
                        : "₹ 8,850 / Month"}
                    </p>
                  </div>

                  {/* More Info */}

                  <div className="h-[46px] bg-[#273878] px-[18px] sm:px-[24px] flex items-center">
                    <button
                      className="
                        h-[30px]
                        w-[115px]
                        rounded-full
                        bg-[#fca311]
                        text-white
                        text-[13px]
                        font-yantra
                        font-semibold
                        hover:bg-[#ed9400]
                        transition
                      "
                    >
                      More Info
                    </button>
                  </div>
                </div>

                {/* ================= PROGRAM DESCRIPTION ================= */}

                <h3
                  className="
                    font-yantra
                    mt-[19px]
                    text-[17px]
                    sm:text-[18px]
                    leading-[23px]
                    sm:leading-[24px]
                    font-bold
                    text-[#1e4c61]
                  "
                >
                  Professional Program In{" "}
                  <span className="text-[#fca311]">
                    Data Science,
                    <br />
                    Machine Learning, AI & GenAI
                  </span>
                </h3>

                {/* Corporate Text */}

                <p
                  className="
                    font-yantra
                    mt-[9px]
                    text-[12px]
                    leading-[17px]
                    text-black
                  "
                >
                  Special Corporate Enrolment Pricing Enroll before{" "}
                  <span className="font-bold">22 November</span>
                  <br />
                  <span className="font-bold">2025</span> to avail additional
                  10% early bird <span className="font-bold">discount.</span>
                </p>

                {/* Book Slot */}

                <div className="flex items-center mt-[22px]">
                  <button
                    className="
                      h-[40px]
                      w-[153px]
                      rounded-full
                      bg-[#273878]
                      text-white
                      font-yantra
                      font-semibold
                      text-[14px]
                      hover:bg-[#1e2f70]
                      transition
                    "
                  >
                    Book Your Slot
                  </button>

                  <button
                    className="
                      w-[40px]
                      h-[40px]
                      rounded-full
                      bg-[#526bc5]
                      flex
                      items-center
                      justify-center
                      hover:bg-[#455eb8]
                      transition
                    "
                  >
                    <ArrowUpRight size={19} className="text-white" />
                  </button>
                </div>

                {/* Pay Full Fees */}

                <div className="flex items-center mt-[15px]">
                  <button
                    className="
                      h-[40px]
                      w-full
                      max-w-[290px]
                      rounded-full
                      bg-[#fca311]
                      text-white
                      font-yantra
                      font-semibold
                      text-[13px]
                      sm:text-[14px]
                      hover:bg-[#ed9400]
                      transition
                    "
                  >
                    Pay Full Fees (Early-Bid Discount)
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
                      shrink-0
                    "
                  >
                    <ArrowUpRight size={19} className="text-white" />
                  </button>
                </div>
              </div>

              {/* ================================================= */}
              {/* RIGHT SIDE */}
              {/* ================================================= */}

              <div
                className="
                  border-t
                  lg:border-t-0
                  lg:border-l
                  border-[#d3d8ef]
                  px-[15px]
                  sm:px-[23px]
                  pt-[20px]
                  pb-[25px]
                  sm:pb-[30px]
                "
              >
                {/* IIT + EICT Logos */}

                <div className="h-[62px] flex items-center justify-center lg:justify-between px-[3px]">
                  <img
                    src="/images/iit-roorkee-eict.png"
                    alt="IIT Roorkee and EICT"
                    className="
                      w-full
                      max-w-[370px]
                      max-h-[58px]
                      object-contain
                    "
                  />
                </div>

                {/* Scholarship */}

                <div className="mt-[18px] rounded-[14px] overflow-hidden">
                  <div
                    className="
                      min-h-[57px]
                      bg-[#e1e7ff]
                      flex
                      items-center
                      justify-center
                      px-3
                    "
                  >
                    <p
                      className="
                        font-yantra
                        text-[20px]
                        sm:text-[23px]
                        font-bold
                        text-[#273878]
                        text-center
                      "
                    >
                      Avail Scholarship
                    </p>
                  </div>

                  <div
                    className="
                      min-h-[46px]
                      bg-[#273878]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <p
                      className="
                        font-yantra
                        text-[20px]
                        sm:text-[23px]
                        italic
                        font-bold
                        text-white
                      "
                    >
                      Up To 30%
                    </p>
                  </div>
                </div>

                {/* What's Included */}

                <div className="mt-[24px]">
                  <h4 className="font-yantra text-[12px] font-bold text-black">
                    What’s Included in the Fee
                  </h4>

                  <ul
                    className="
                      font-yantra
                      mt-[7px]
                      list-disc
                      pl-[18px]
                      text-[12px]
                      leading-[19px]
                      text-black
                    "
                  >
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
                  <h4 className="font-yantra text-[12px] font-bold text-black">
                    Additional Benefits
                  </h4>

                  <ul
                    className="
                      font-yantra
                      mt-[5px]
                      list-disc
                      pl-[18px]
                      text-[12px]
                      leading-[19px]
                      text-black
                    "
                  >
                    <li>Lifetime Access to Live Recorded Sessions</li>

                    <li>Complimentary Career Guidance or Resume-building</li>

                    <li>
                      Three Months Internship Experience By Industry Partners
                    </li>

                    <li>1:1 Doubt Resolution In Live Sessions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* FINANCIAL PARTNER */}
            {/* ================================================= */}

            <div
              className="
                min-h-[93px]
                bg-[#273878]
                px-[18px]
                sm:px-[23px]
                py-[18px]
                flex
                flex-col
                sm:flex-row
                items-center
                justify-between
                gap-[18px]
              "
            >
              {/* Text */}

              <div className="text-white w-full sm:w-auto">
                <h4 className="font-yantra text-[12px] font-bold">
                  Financial Partner
                </h4>

                <p
                  className="
                    font-yantra
                    mt-[8px]
                    text-[11px]
                    sm:text-[12px]
                    leading-[17px]
                    sm:leading-[18px]
                  "
                >
                  Candidates can pay the course fee through Netbanking and
                  credit/Debit cards. Also,
                  <br className="hidden sm:block" />
                  with our corporate financial partnerships avail education
                  loans at 0% interest rate*
                </p>
              </div>

              {/* Razorpay */}

              <div
                className="
                  w-full
                  sm:w-[247px]
                  h-[55px]
                  sm:h-[64px]
                  bg-[#e5eaff]
                  rounded-[8px]
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <img
                  src="/images/razorpay.png"
                  alt="Razorpay"
                  className="w-[130px] sm:w-[145px] object-contain"
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
