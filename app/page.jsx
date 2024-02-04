import About from "@/components/About";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Work from "@/components/Work";
import Image from "next/image";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Work />
      <Cta />
      <GoogleAnalytics gaId="G-976FLB6TWF" />
    </main>
  );
}
