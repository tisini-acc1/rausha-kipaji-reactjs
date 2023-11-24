import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";

import { partners } from "./Data";
// import { useEffect, useState } from "react";

const Partners = () => {
  const { brands, title } = partners;
  // const { isSmallScreen, setIsSmallScreen } = useState(window.innerWidth < 768);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsSmallScreen(window.innerWidth < 768);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <section className="section pb-4">
      <div className="container mx-auto">
        <div>
          <h2 className="title text-center mb-8 capitalize">{title}</h2>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand.id}>
              <div className="w-full max-w-[290px] mx-auto h-[380px]">
                <div className="border rounded-[18px] w-full max-w-[285px] h-full max-h-[292px] flex items-center justify-center">
                  <img src={brand.logo} alt="partner-logo" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
