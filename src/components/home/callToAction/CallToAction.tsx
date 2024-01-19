import { cta } from "../Data";

const CallToAction = () => {
  return (
    <section className="bg-cta bg-no-repeat bg-cover bg-center h-[400px] text-white relative">
      <div className="overlay absolute bg-black bg-opacity-70 inset-0"></div>

      <div className="container text-center flex flex-col items-center justify-center h-full relative z-10">
        <h1 className="title mb-4">{cta.title}</h1>

        <h3 className="subtitle text-gray-300">{cta.subtitle}</h3>

        {/* <button className="hover:bg-green-600 bg-orange px-[35px] py-[9px] text-xl rounded-md backdrop-blur-md transition lg:px-[60px] lg:py-[16px]"> */}
        <a
          href="https://portal.tisini.co.ke/auth/register/team-owner"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-green-600 bg-orange px-[35px] py-[9px] text-xl rounded-md backdrop-blur-md transition lg:px-[60px] lg:py-[16px]"
        >
          {cta.buttonText}
        </a>
        {/* </button> */}
      </div>
    </section>
  );
};

export default CallToAction;
