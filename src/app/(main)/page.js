import Banner from "@/components/main/Banner";
import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";

export default function Home() {
  return (
    <div>
      <div id="navbar-banner" className="relative bg-[url('/images/bg.jpg')]"
       >
        <div className="absolute inset-0 bg-blue-100/50 "></div>
        <Navbar />
        <Banner />
      </div>
      <Footer />
    </div>
  );
}
