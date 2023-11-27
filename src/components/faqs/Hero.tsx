const Hero = () => {
  return (
    <section className="bg-hero bg-no-repeat bg-cover bg-center h-[400px] text-white relative">
      <div className="bg-black bg-opacity-70 absolute inset-0"></div>
      <div className="flex items-center justify-center h-full">
        <h1 className="text-3xl lg:text-5xl font-bold absolute max-w-[800px] px-4">
          Frequently Asked Questions
        </h1>
      </div>
    </section>
  );
};

export default Hero;
