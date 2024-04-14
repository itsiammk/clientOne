import AboutUsHome from "@/components/AboutUsHome";
import AddressMap from "@/components/AddressMap";
import Gallery from "@/components/Gallery";
import GalleryHome from "@/components/GalleryHome";
import HomeSwiper from "@/components/HomeSwiper";
import Map from "@/components/Map";
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
      <AddressMap />
      {/* <Map /> */}
    </>
  );
}
