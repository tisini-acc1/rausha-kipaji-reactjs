import { hero } from "../Data";
import FlipClock from "./FlipClock";

const Hero = () => {
  const { title, subtitle, buttonText } = hero;

  return (
    <section className="h-screen w-full bg-hero bg-center bg-cover bg-no-repeat text-white relative pt-[225px] pb-[254px]">
      <div className="bg-red-900 bg-opacity-70 absolute inset-0"></div>

      <div className="text-center relative">
        <h1 className="text-5xl uppercase mx-auto font-semibold mb-5 lg:text-[64px] lg:leading-tight lg:max-w-[888px]">
          {title}
        </h1>

        <h2 className="mb-[30px] lg:max-w-[627px] mx-auto lg:mb-[40px] lg:text-2xl">
          {subtitle}
        </h2>

        <button className="bg-orange hover:bg-green-600 px-[35px] py-[9px] mb-12 text-xl rounded-md backdrop-blur-md transition lg:px-[60px] lg:py-[12px] lg:mb-10">
          {buttonText}
        </button>

        <div className="mb-8">
          <a
            href="https://portal.tisini.co.ke/auth/register/team-owner"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden hover:bg-green-600 bg-orange text-xl rounded-md backdrop-blur-md transition p-2"
          >
            Register Here
          </a>
        </div>

        <div className="bottom-0 flex items-center justify-center">
          <FlipClock />
        </div>
      </div>
    </section>
  );
};

export default Hero;

// <section className="h-screen w-full bg-hero bg-center bg-cover bg-no-repeat text-white relative flex flex-col justify-center items-center">
//   <div className="overlay bg-black bg-opacity-70 absolute w-full h-full"></div>

//   <div className="absolute flex flex-col items-center text-center">
//     <h1 className="text-4xl mb-4 lg:text-7xl">{title}</h1>

//     <h3 className="mb-12 lg:max-w-[600px] mx-auto font-medium">
//       {subtitle}
//     </h3>

//     <FlipClock />

//     <button className="bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.5)] px-[35px] py-[9px] mb-[160px] text-xl rounded-md backdrop-blur-md transition lg:px-[60px] lg:py-[16px] lg:mb-[194px]">
//       {buttonText}
//     </button>
//   </div>
// </section>
