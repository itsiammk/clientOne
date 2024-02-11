import AboutUsHome from "@/components/AboutUsHome";
import Gallery from "@/components/Gallery";
import GalleryHome from "@/components/GalleryHome";
import OurServices from "@/components/OurServices";
import ServicesSwiper from "@/components/ServicesSwiper";

export default function Home() {
  return (
    <>
      <AboutUsHome />
      {/* <OurServices /> */}
      <ServicesSwiper />
      <GalleryHome />
    </>
  );
}
