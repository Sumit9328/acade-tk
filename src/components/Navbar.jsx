import React, { useState } from "react";
import { ChevronDown, Pencil, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border border-gray-200 relative z-50">
      <div
        className="
          max-w-[1050px]
          mx-auto
          min-h-[65px]
          px-5
          sm:px-8
          lg:px-0
          flex
          items-center
          justify-between
        "
      >
        {/* ================= LOGO ================= */}

        <div className="flex items-center shrink-0">
          <img
            src="/assets/images/Vector.svg"
            alt="The IoT Academy"
            className="w-[100px] sm:w-[109px] object-contain"
          />
        </div>

        {/* ================= DESKTOP NAVIGATION ================= */}

        <div className="hidden lg:flex items-center gap-[25px] xl:gap-[30px] text-black">
          {/* Home */}
          <a
            href="#"
            className="
              font-yantra
              text-[18px]
              xl:text-[20px]
              h-full
              flex
              items-center
              font-bold
              relative
              after:absolute
              after:left-0
              after:bottom-[-4px]
              after:w-0
              after:h-[2px]
              after:bg-black
              after:transition-all
              after:duration-200
              hover:after:w-full
            "
          >
            Home
          </a>

          {/* Programs */}
          <a
            href="#"
            className="
              font-yantra
              text-[18px]
              xl:text-[20px]
              font-bold
              flex
              items-center
              gap-1
              whitespace-nowrap
              relative
              after:absolute
              after:left-0
              after:bottom-[-4px]
              after:w-0
              after:h-[2px]
              after:bg-black
              after:transition-all
              after:duration-200
              hover:after:w-full
            "
          >
            Programs
            <ChevronDown size={16} strokeWidth={2} />
          </a>

          {/* Summer Training */}
          <a
            href="#"
            className="
              font-yantra
              text-[18px]
              xl:text-[20px]
              font-bold
              whitespace-nowrap
              relative
              after:absolute
              after:left-0
              after:bottom-[-4px]
              after:w-0
              after:h-[2px]
              after:bg-black
              after:transition-all
              after:duration-200
              hover:after:w-full
            "
          >
            Summer Training Programs
          </a>

          {/* Career */}
          <a
            href="#"
            className="
              font-yantra
              text-[18px]
              xl:text-[20px]
              font-bold
              flex
              items-center
              gap-1
              relative
              after:absolute
              after:left-0
              after:bottom-[-4px]
              after:w-0
              after:h-[2px]
              after:bg-black
              after:transition-all
              after:duration-200
              hover:after:w-full
            "
          >
            Career
            <ChevronDown size={16} strokeWidth={2} />
          </a>

          {/* Placements */}
          <a
            href="#"
            className="
              font-yantra
              text-[18px]
              xl:text-[20px]
              font-bold
              whitespace-nowrap
              relative
              after:absolute
              after:left-0
              after:bottom-[-4px]
              after:w-0
              after:h-[2px]
              after:bg-black
              after:transition-all
              after:duration-200
              hover:after:w-full
            "
          >
            Placements
          </a>

          {/* Blogs */}
          <a
            href="#"
            className="
              font-yantra
              text-[18px]
              xl:text-[20px]
              font-bold
              relative
              after:absolute
              after:left-0
              after:bottom-[-4px]
              after:w-0
              after:h-[2px]
              after:bg-black
              after:transition-all
              after:duration-200
              hover:after:w-full
            "
          >
            Blogs
          </a>

          {/* Login */}
          <button
            className="
              w-[98px]
              h-[41px]
              rounded-full
              bg-[#fca311]
              text-white
              font-yantra
              text-[18px]
              xl:text-[20px]
              font-bold
              flex
              items-center
              justify-center
              gap-2
              hover:bg-[#ed9400]
              transition
              shrink-0
            "
          >
            <Pencil size={14} fill="white" />
            LogIn
          </button>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            lg:hidden
            w-[42px]
            h-[42px]
            flex
            items-center
            justify-center
            rounded-full
            bg-[#273878]
            text-white
          "
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}

      {menuOpen && (
        <div
          className="
            lg:hidden
            absolute
            top-full
            left-0
            w-full
            bg-white
            border-t
            border-gray-200
            shadow-lg
            px-5
            sm:px-8
            py-5
          "
        >
          <div className="flex flex-col gap-4">
            {/* Home */}
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="
                font-yantra
                text-[19px]
                font-bold
                text-black
                w-fit
                relative
                after:absolute
                after:left-0
                after:bottom-[-3px]
                after:w-0
                after:h-[2px]
                after:bg-black
                hover:after:w-full
                after:transition-all
              "
            >
              Home
            </a>

            {/* Programs */}
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="
                font-yantra
                text-[19px]
                font-bold
                text-black
                flex
                items-center
                gap-1
                w-fit
              "
            >
              Programs
              <ChevronDown size={16} />
            </a>

            {/* Summer Training */}
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="
                font-yantra
                text-[19px]
                font-bold
                text-black
                w-fit
              "
            >
              Summer Training Programs
            </a>

            {/* Career */}
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="
                font-yantra
                text-[19px]
                font-bold
                text-black
                flex
                items-center
                gap-1
                w-fit
              "
            >
              Career
              <ChevronDown size={16} />
            </a>

            {/* Placements */}
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="
                font-yantra
                text-[19px]
                font-bold
                text-black
                w-fit
              "
            >
              Placements
            </a>

            {/* Blogs */}
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="
                font-yantra
                text-[19px]
                font-bold
                text-black
                w-fit
              "
            >
              Blogs
            </a>

            {/* Login */}
            <button
              className="
                mt-1
                w-[110px]
                h-[42px]
                rounded-full
                bg-[#fca311]
                text-white
                font-yantra
                text-[18px]
                font-bold
                flex
                items-center
                justify-center
                gap-2
              "
            >
              <Pencil size={14} fill="white" />
              LogIn
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
