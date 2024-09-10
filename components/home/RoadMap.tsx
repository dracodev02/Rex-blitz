import Image from "next/image";
import ListIcon from "@/public/assets/svg/list_icon.svg";
import GreenDino from "@/public/assets/images/green_dino.png";

const roadMapData = [
  {
    title: "q4. 2024",
    list: [
      "Launch on telegram + Starknet",
      "technical development",
      "Leaderboard",
      "Community engagement",
    ],
  },
  {
    title: "q1. 2025",
    list: [
      "advanced game mechanics",
      "user rewards program",
      "gamefis community integration",
    ],
  },
  {
    title: "q2. 2025",
    list: [
      "Massive multiplier expansion",
      "global connectivity path",
      "ecosystem development",
    ],
  },
];

const RoadMap = () => {
  return (
    <div
      id="Roadmap"
      className="pt-[92px] md:mt-[170px] mx-auto lg:px-[124px] md:px-14 px-6"
    >
      <p className="lg:text-[72px] animate-fade-up md:text-[52px] text-[36px] text-red mb-[80px] border-roadmap text-center">
        rex blitz roadmap
      </p>
      <div className="relative w-full pb-20">
        <div className="flex xl:w-[1050px] flex-wrap gap-7 items-start justify-center lg:mr-[84px]">
          {roadMapData.map((data, index) => (
            <div
              key={index}
              style={{ animationDelay: 300 * index + "ms" }}
              className="h-fit animate-delay-150  animate-fade-up lg:w-[495px] w-[300px] sm:w-[450px] space-y-3 lg:px-8 lg:py-6 px-6 md:py-6  py-4 border-4 rounded-[4px] border-purple/50 bg-white/75"
            >
              <p
                className="lg:text-[32px] text-[24px] text-yellow  border-roadmap-text"
                style={{ ["--stroke-color" as string]: "#033954" }}
              >
                {data.title}
              </p>
              {data.list.map((text, index) => (
                <div key={index} className="flex flex-1 lg:items-center gap-4">
                  <Image
                    src={ListIcon}
                    className="w-3 h-3 mt-1 lg:mt-0"
                    alt="list icon"
                  />
                  <p className="border-text">{text}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <Image
          className="w-[160px] md:w-[240px] lg:w-[280px]  lg:h-[313px] absolute bottom-0 -right-0 -z-[1]"
          alt="greenDino"
          src={GreenDino}
        />
      </div>
    </div>
  );
};
export default RoadMap;
