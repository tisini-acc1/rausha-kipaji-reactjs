import { useEffect, useState } from "react";

import { partners } from "../Data";
import PartnersSwiper from "./PartnersSwiper";
import PartnersSwiperMobile from "./PartnersSwiperMobile";

const Partners = () => {
  const { title } = partners;
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="section pb-4">
      <div className="container mx-auto">
        <div>
          <h2 className="title text-center mb-8 capitalize">{title}</h2>
        </div>

        {isSmallScreen ? <PartnersSwiperMobile /> : <PartnersSwiper />}
      </div>
    </section>
  );
};

export default Partners;
