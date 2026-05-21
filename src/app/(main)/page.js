import Banner from "@/components/main/Banner";
import FeaturedCourses from "@/components/main/FeaturedIdeas";

export default function Home() {
  return (
    <>
      <div id="main" className="relative bg-[url('/images/bg.jpg')]"
       >
        <div className="absolute inset-0 bg-blue-100/50 "></div>
        <Banner />
      </div>
      <FeaturedCourses />
    </>
  );
}
