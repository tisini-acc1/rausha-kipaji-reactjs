import { cta } from "./Data";

const CallToAction = () => {
  return (
    <section className="bg-cta bg-no-repeat bg-cover bg-center h-[400px] text-white relative">
      <div className="overlay absolute bg-black bg-opacity-50 inset-0"></div>

      <div className="container text-center flex flex-col items-center justify-center h-full relative z-10">
        <h1 className="title mb-4">{cta.title}</h1>

        <h3 className="subtitle">{cta.subtitle}</h3>

        <button className="bg-green-600 hover:bg-blue-600 px-[35px] py-[9px] text-xl rounded-md backdrop-blur-md transition lg:px-[60px] lg:py-[16px]">
          {cta.buttonText}
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
