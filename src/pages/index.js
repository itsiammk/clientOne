import AboutUsHome from "@/components/AboutUsHome";
import Gallery from "@/components/Gallery";
import GalleryHome from "@/components/GalleryHome";
import HomeSwiper from "@/components/HomeSwiper";
import OurServices from "@/components/OurServices";
import ServicesSwiper from "@/components/ServicesSwiper";

export default function Home() {
  return (
    <>
      <HomeSwiper />
      <AboutUsHome />
      {/* <OurServices /> */}
      <ServicesSwiper />
      <GalleryHome />
    </>
  );
}
