import Image from "next/image";
import PurpleDino from "@/public/assets/images/purple_dino.png";

const Welcome = () => {
  return (
    <div className=" pt-36 md:mb-0 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-0 mb-20">
      <div className="flex flex-col items-center lg:max-w-[770px] mx-auto">
        <p className="text-center animate-fade-up text-[32px] md:text-[52px] lg:text-[72px] font-bold border-welcome">
          Welcome to REX BLITZ
        </p>
        <p className="text-center text-[18px] animate-fade-up animate-delay-100 md:text-[24px] lg:text-[32px] text-primary mt-5 md:mt-7 mb-[28px] md:mb-[42px]">
          The best Starknet pixel game operated on Telegram
        </p>
        <button className="py-[8px] group md:py-[24px] animate-fade-up animate-delay-200 lg:py-[32px] px-[32px] md:px-[42px] lg:px-[52px] bg-yellow rounded-xl border-4 border-brown shadow-brown/50 shadow-[inset_0_4px_16px_6px_10px]">
          <p className="text-xl group-hover:scale-[1.02] transition-all md:text-2xl lg:text-3xl font-bold text-brown">
            ENTER REX BLITZ
          </p>
        </button>
      </div>
      <Image
        className="mt-[36px] md:mt-[54px] lg:ml-[124px] w-[160px] md:w-[240px] lg:w-[280px] lg:h-[313px]"
        alt="background"
        src={PurpleDino}
      />
    </div>
  );
};

export default Welcome;
