import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Hero from "@/Components/ui/Hero";
import News from "@/Components/ui/News";
import OurPrograms from "@/Components/ui/OurPrograms";
import PartnersNewsletter from "@/Components/ui/PartnersNewsletter";
import Testimonials from "@/Components/ui/Testimonials";
import WhoWeAre from "@/Components/ui/WhoWeAre";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="mt-20 min-h-screen">
       <Hero/>
       <WhoWeAre/>
       <OurPrograms/>
       <Testimonials/>
       <News/>
       <PartnersNewsletter/>
      </main>
    </div>
  );
}
