import About from "@/components/home/About";
import RoadMap from "@/components/home/RoadMap";
import Welcome from "@/components/home/Welcome";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        className="w-screen h-screen fixed top-0 left-0 -z-[1] object-cover"
        width={1440}
        height={1000}
        alt="background"
        src="/assets/images/background.png"
      />
      <Welcome />
      <div className="">
        <div className="max-w-[1440px] mx-auto ">
          <About />
          <RoadMap />
        </div>
      </div>
    </div>
  );
}
