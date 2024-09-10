"use client";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  const Divide = () => {
    return <div className="h-6 min-w-[1px] w-[1px] bg-primary/50"></div>;
  };

  return (
    <div
      id="Social"
      className="w-screen h-[100px] flex justify-center border-dashed-top bg-white items-center"
    >
      <div className="flex justify-center text-primary text-[24px] gap-8">
        <FaXTwitter
          onClick={() => {
            window.open("https://x.com/rex_blitz");
          }}
          className="cursor-pointer"
        />
        <Divide /> <FaDiscord className="cursor-pointer" /> <Divide />
        <FaTelegram className="cursor-pointer" />
      </div>
    </div>
  );
};
export default Footer;
