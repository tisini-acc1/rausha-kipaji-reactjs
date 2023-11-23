import Hero from "@components/home/Hero";
import WhyUs from "@components/home/WhyUs";
import Testimonial from "@components/home/Testimonial";
import CallToAction from "@components/home/CallToAction";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <WhyUs />
      <CallToAction />
      <Testimonial />
    </main>
  );
}
