import React from "react";

const Faculties = () => {
  const facultyData = [
    {
      image: "/images/faculty-1.png",
      name: "Kaushlendra Sisodia",
      line1: "Director at Uniconvergence Technologies",
      line2: "IIT Kanpur Alumnus",
      logo: "/images/iit-kanpur.png",
    },
    {
      image: "/images/faculty-2.png",
      name: "Prof. Sumit Kalra",
      line1: "Department of Computer Science &",
      line2: "Engineering, IIT Jodhpur",
      logo: "/images/iit-jodhpur.png",
    },
    {
      image: "/images/faculty-3.png",
      name: "Mr. Sanjay Aggarwal",
      line1: "Data Science With ML Expert",
      line2: "IMS BHU Alumni The IoT Academy",
      logo: "/images/iot-academy.png",
    },
    {
      image: "/images/faculty-4.png",
      name: "Ashwani Kumar",
      line1: "AI Expert 20+ Years of Experience",
      line2: "Alumni of University of Miami",
      logo: "/images/university-miami.png",
    },
  ];

  return (
    <section className="w-full bg-white py-[35px] sm:py-[45px] lg:py-[45px]">
      <div
        className="
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
            text-[#273878]
          "
        >
          Faculties Of This <span className="text-[#fca311]">Program</span>
        </h2>

        {/* ================= FACULTY CARDS ================= */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-[15px]
            mt-[28px]
            sm:mt-[38px]
            lg:mt-[43px]
          "
        >
          {facultyData.map((faculty, index) => (
            <div
              key={index}
              className="
                w-full
                min-h-[234px]
                rounded-[15px]
                bg-white
                border
                border-[#e8e8e8]
                shadow-[0_4px_10px_rgba(0,0,0,0.08)]
                flex
                flex-col
                items-center
                text-center
                px-[10px]
                pt-[20px]
                pb-[15px]
                transition-transform
                duration-200
                hover:-translate-y-[3px]
              "
            >
              {/* ================= FACULTY IMAGE ================= */}

              <div
                className="
                  w-[72px]
                  h-[72px]
                  rounded-full
                  overflow-hidden
                  border
                  border-[#273878]
                  shrink-0
                "
              >
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ================= NAME ================= */}

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
                {faculty.name}
              </h3>

              {/* ================= DESCRIPTION ================= */}

              <p
                className="
                  font-inter
                  font-[400]
                  mt-[2px]
                  text-[15px]
                  leading-[20px]
                  text-black
                "
              >
                {faculty.line1}
              </p>

              <p
                className="
                  font-inter
                  font-[700]
                  text-[15px]
                  leading-[20px]
                  text-black
                "
              >
                {faculty.line2}
              </p>

              {/* ================= LOGO ================= */}

              <div
                className="
                  mt-[14px]
                  h-[43px]
                  w-[110px]
                  flex
                  items-center
                  justify-center
                "
              >
                <img
                  src={faculty.logo}
                  alt=""
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculties;
