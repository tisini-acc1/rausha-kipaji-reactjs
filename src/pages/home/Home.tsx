import Hero from "@components/home/hero/Hero";
import WhyUs from "@components/home/whyus/WhyUs";
import Partners from "@components/home/partners/Partners";
import Testimonial from "@components/home/testimonial/Testimonial";
import CallToAction from "@components/home/callToAction/CallToAction";

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
