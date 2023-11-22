import Hero from "@components/home/Hero";
import WhyUs from "@components/home/WhyUs";
import CallToAction from "@components/home/CallToAction";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <WhyUs />
      <CallToAction />
      {/* <Testimonial /> */}
    </main>
  );
}
