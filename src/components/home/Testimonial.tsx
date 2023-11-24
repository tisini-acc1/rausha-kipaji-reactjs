// import Swiper from "./Swiper";
import { FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./testimonial.css";
import { testimonial } from "./Data";

const Testimonial = () => {
  const { title, persons } = testimonial;

  return (
    <section className="bg-[#232220] text-white">
      <div className="container mx-auto px-4 pt-12">
        <p className="section__subheader">Testimonial</p>
        <h2 className="text-4xl font-semibold mb-4">{title}</h2>
        {/* <p className="mt-4 ml-16 text-[#a3a3a3]">{subtitle}</p> */}

        <div className="w-full pb-16 mt-8">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
          >
            {persons.map((person, index) => (
              <SwiperSlide key={index}>
                <div className="relative isolate max-w-[600px] mx-auto">
                  <div className="absolute top-0 left-0 text-8xl leading-10 text-[#ff581f] opacity-10">
                    <FaQuoteRight />
                  </div>
                  <p className="mb-8 text-[#a3a3a3]">{person.message}</p>

                  <div className="flex items-center justify-center gap-4 ">
                    <img
                      className="m-x-[70px] rounded-full h-20 w-20"
                      src={person.avatar}
                      alt="customer image"
                      width={100}
                      height={100}
                    />
                    <div>
                      <h4 className="text-xl font-medium">{person.name}</h4>
                      <h5 className="text-base font-normal text-[#a3a3a3]">
                        {person.title}
                      </h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
