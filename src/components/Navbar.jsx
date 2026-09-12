import React from "react";
import { ChevronDown, Pencil } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full py-3 bg-white border border-gray-200">
      <div className="max-w-[1050px] h-full mx-auto flex items-center">

        {/* Logo */}
        <div className="w-[230px] flex items-center">
          <img
            src="/assets/images/Vector.svg"
            alt="The IoT Academy"
            className="w-[109px] object-contain"
          />
        </div>

        {/* Navigation */}
        <div className="h-full flex items-center gap-[30px] text-[14px] text-black">

          {/* Home */}
          <a
            href="#"
            className="font-yantra text-[20px] h-full flex items-center font-bold relative
            after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px]
            after:bg-black after:transition-all after:duration-200
            hover:after:w-full"
          >
            Home
          </a>

          {/* Programs */}
          <a
            href="#"
            className="font-yantra text-[20px] font-bold flex items-center gap-1 whitespace-nowrap relative
            after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px]
            after:bg-black after:transition-all after:duration-200
            hover:after:w-full"
          >
            Programs
            <ChevronDown size={16} strokeWidth={2} />
          </a>

          {/* Summer Training */}
          <a
            href="#"
            className="font-yantra text-[20px] font-bold whitespace-nowrap relative
            after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px]
            after:bg-black after:transition-all after:duration-200
            hover:after:w-full"
          >
            Summer Training Programs
          </a>

          {/* Career */}
          <a
            href="#"
            className="font-yantra text-[20px] font-bold flex items-center gap-1 relative
            after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px]
            after:bg-black after:transition-all after:duration-200
            hover:after:w-full"
          >
            Career
            <ChevronDown size={16} strokeWidth={2} />
          </a>

          {/* Placements */}
          <a
            href="#"
            className="font-yantra text-[20px] font-bold whitespace-nowrap relative
            after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px]
            after:bg-black after:transition-all after:duration-200
            hover:after:w-full"
          >
            Placements
          </a>

          {/* Blogs */}
          <a
            href="#"
            className="font-yantra text-[20px] font-bold relative
            after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px]
            after:bg-black after:transition-all after:duration-200
            hover:after:w-full"
          >
            Blogs
          </a>

          {/* Login */}
          <button
            className="ml-[0px] w-[98px] h-[41px]
            rounded-full bg-[#fca311] text-white
            font-yantra text-[20px] font-bold flex items-center justify-center gap-2
            hover:bg-[#ed9400] transition"
          >
            <Pencil size={14} fill="white" />
            LogIn
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;