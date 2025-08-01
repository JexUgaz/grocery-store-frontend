import Image from "next/image";
import ContentBanner from "./components/ContentBanner";

const HomeBanner = () => (
  <div className="relative w-full h-[80vh]">
    <Image
      alt=""
      src="/images/banner/vegetables.jpg"
      fill
      className="object-cover"
      priority
    />
    <span className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
    <ContentBanner />
  </div>
);

export default HomeBanner;
