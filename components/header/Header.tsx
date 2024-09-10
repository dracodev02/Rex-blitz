"use client";
import { useState } from "react";

const Header = () => {
  const items = ["About", "Roadmap", "Social"];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="backdrop-blur-md h-[92px] border-dashed-bottom bg-[#F3FAFF80] w-screen fixed top-0 left-0 z-10 md:px-10">
      <div className="max-w-desktop h-full m-auto flex justify-between items-center px-4 md:px-0">
        {/* Logo */}
        <div>
          <p className="md:text-[32px] text-xl text-center cursor-pointer md:leading-8 leading-6 border-logo">
            <span className="text-green">Red</span> <br />
            <span className="text-yellow">Blitz</span>
          </p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {items.map((item) => (
            <p
              className="cursor-pointer hover:scale-110 transition-all text-stroke"
              key={item}
            >
              {item}
            </p>
          ))}
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            className="focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu (toggle based on menuOpen state) */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:hidden absolute top-[92px] left-0 w-full animate-fade  animate-duration-100 bg-white z-10 flex-col items-center gap-4 py-4 shadow-lg`}
        >
          {items.map((item) => (
            <p className="cursor-pointer text-stroke" key={item}>
              {item}
            </p>
          ))}
          <p
            className="cursor-pointer animate-bounce animate-infinite animate-duration-[1000ms] animate-ease-out animate-reverse animate-fill-both text-stroke"
            key={"nav-bar_play_button"}
          >
            {`Let's play`}{" "}
          </p>
        </div>

        {/* Play Button */}
        <div className="hidden md:flex bg-green cursor-pointer border-stroke border-[4px] py-3 px-8 rounded group">
          <p className="text-stroke leading-5 select-none group-hover:scale-105 transition-all">{`Let's play`}</p>
        </div>
      </div>

      {/* Mobile Play Button (shown inside mobile menu) */}
      {menuOpen && (
        <div className="md:hidden flex justify-center mt-4 ">
          <div className="bg-green cursor-pointer border-stroke border-[4px] py-3 px-8 rounded">
            <p className="text-stroke  leading-5 select-none">{`Let's play`}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
