import Hero from "@components/home/Hero";
import WhyUs from "@components/home/WhyUs";
import Partners from "@components/home/Partners";
import Testimonial from "@components/home/Testimonial";
import CallToAction from "@components/home/CallToAction";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <WhyUs />
      <CallToAction />
      <Partners />
      <Testimonial />
    </main>
  );
}
