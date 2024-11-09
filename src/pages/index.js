import AboutUsHome from "@/components/AboutUsHome";
import CompaniesCardSwiper from "@/components/Common/CompaniesCardSwiper";
import GalleryHome from "@/components/GalleryHome";
import HomeSwiper from "@/components/HomeSwiper";
import Map from "@/components/Map";
import ServicesSwiper from "@/components/ServicesSwiper";

export default function Home() {
  return (
    <>
      <HomeSwiper />
      <AboutUsHome />
      {/* <OurServices /> */}
      <ServicesSwiper />
      <GalleryHome />
      <CompaniesCardSwiper />
      {/* <AddressMap /> */}
    </>
  );
}
