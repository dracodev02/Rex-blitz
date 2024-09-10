import Image from "next/image";
import Phone from "@/public/assets/images/phone_gameplay.png";
import IconStrkTelegram from "@/public/assets/images/strk_telegram.png";

const About = () => {
  return (
    <div
      id="About"
      className="pt-[92px] md:mt-[170px] flex flex-1 items-center justify-center lg:px-[124px] lg:gap-[112px] md:px-14 md:gap-14 px-6 gap-6 max-md:flex-col"
    >
      <Image
        className="lg:w-[390px] animate-fade-up lg:h-[810px] "
        alt="background"
        src={Phone}
      />
      <div className="flex-1 animate-fade-up lg:pt-[110px] lg:max-w-[690px] sm:min-w-[450px]">
        <div className="relative w-fit mx-auto lg:mx-0">
          <p className="lg:text-[72px] md:text-[52px] text-[32px] text-yellow mt-7 mb-[42px] border-welcome">
            About
          </p>
          <Image
            className="lg:w-[205px] lg:h-[165px] w-[130px] h-[100px] absolute lg:-top-28 -top-16 lg:-right-36 -right-24"
            alt="background"
            src={IconStrkTelegram}
          />
        </div>

        <div className="space-y-6 md:text-base text-[12px]">
          <p className="text-white border-text ">
            REX Blitz is the top pixel game on StarkNet, played right on
            Telegram!
          </p>
          <p className="text-white border-text">
            Embark on a fun, adventurous journey, collecting keys for exciting
            rewards.
          </p>
          <p className="text-white border-text">
            With every quest, you&apos;re not just having a blast—you&apos;re
            also connecting with the StarkNet ecosystem. Ready for the
            adventure? Let the journey begin!
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
