import Image from "next/image";
import { whyus } from "./Data";

const WhyUs = () => {
  return (
    <section className="section">
      <div className="container mx-auto m-12">
        <div className="flex flex-col lg:flex-row lg:gap-x-[100px]">
          <div className="flex-1 order-1 lg:-order-1 flex justify-center mt-8 lg:mt-0">
            <Image
              className="mx-auto rounded-lg shadow-lg"
              src="/images/hero-bg1.jpg"
              alt="hero-image"
              width={600}
              height={500}
            />
          </div>

          <div className="flex flex-1 flex-col justify-end">
            <h2 className="text-5xl mb-4 font-bold">Why Rausha Kipaji</h2>
            <p className="text-[#71717a]">
              Embrace continuous learning as the key to perpetual development
              and growth. Explore why our football tournament is your preferred
              choice
            </p>

            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4">
              {whyus.map((data) => (
                <div key={data.id}>
                  <span className="inline-block mb-2 px-[5px] py-[5px] text-xl bg-[#cad8d8] rounded-full">
                    {data.icon}
                  </span>
                  <h4 className="mb-4 text-lg font-semibold text-[#18181b]">
                    {data.title}
                  </h4>
                  <p className="text-[#71717a]">{data.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
