import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";
import { register } from "swiper/element/bundle";
import { testimonial } from "./Data";

register();

const Testimonial = () => {
  const { title, subtitle, persons } = testimonial;

  return (
    <section className="bg-[#232220]">
      <div className="container">
        <p>Testimonial</p>
        <h2>{title}</h2>
        <p className="mt-4 ml-16 text-[#a3a3a3]">{subtitle}</p>

        <div>
          <swiper-container
            className="w-full pb-16"
            slides-per-view="1"
            speed="500"
            loop="true"
            css-mode="true"
            navigation="true"
            pagination="true"
            scrollbar="true"
          >
            {persons.map((person) => (
              <swiper-slide key={person.name}>
                <div>
                  <span>
                    <FaQuoteRight />
                  </span>
                  <p>{person.message}</p>

                  <div>
                    <Image
                      src={person.avatar}
                      alt="customer image"
                      width={100}
                      height={100}
                    />
                    <div>
                      <h4>{person.name}</h4>
                      <h5>{person.title}</h5>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
