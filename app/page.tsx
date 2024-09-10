"use client";
import About from "@/components/home/About";
import RoadMap from "@/components/home/RoadMap";
import Welcome from "@/components/home/Welcome";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Home() {
  function SectionWrapper({ children }: { children: React.ReactNode }) {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
    });

    return (
      <div
        ref={ref}
        className={`transition-opacity duration-1000 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    );
  }

  return (
    <div>
      <Image
        className="w-screen h-screen fixed top-0 left-0 -z-[1] object-cover"
        width={1440}
        height={2000}
        alt="background"
        src="/assets/images/background.png"
      />
      <Welcome />
      <div className="">
        <div className="max-w-[1440px] mx-auto ">
          <SectionWrapper>
            <About />
          </SectionWrapper>
          <SectionWrapper>
            <RoadMap />
          </SectionWrapper>
        </div>
      </div>
    </div>
  );
}
