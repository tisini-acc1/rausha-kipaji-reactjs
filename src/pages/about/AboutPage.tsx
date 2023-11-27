import Hero from "@components/about/Hero";
import Quote from "@components/about/Quote";
import OurStory from "@components/about/OurStory";
import WhoWeAre from "@components/about/WhoWeAre";

const AboutPage = () => {
  return (
    <main className="w-full">
      <Hero />
      <OurStory />
      <Quote />
      <WhoWeAre />
    </main>
  );
};

export default AboutPage;
