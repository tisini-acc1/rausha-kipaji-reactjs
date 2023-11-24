import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { partners } from "../Data";

const PartnersSwiperMobile = () => {
  const { mobileBrands } = partners;

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
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
      {mobileBrands.map((brand) => (
        <SwiperSlide key={brand.id}>
          <div className="w-full max-w-[290px] mx-auto h-[380px]">
            <div className="border rounded-[18px] w-full max-w-[285px] h-full max-h-[292px] flex items-center justify-center">
              <img src={brand.logo} alt="partner-logo" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PartnersSwiperMobile;
