import CallToAction from "@/components/home/CallToAction";
import Hero from "@/components/home/Hero";
import WhyUs from "@/components/home/WhyUs";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <WhyUs />
      <CallToAction />
    </main>
  );
}
