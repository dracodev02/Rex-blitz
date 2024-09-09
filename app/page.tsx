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
        src="/assets/background.png"
      />
      <Welcome />
    </div>
  );
}
