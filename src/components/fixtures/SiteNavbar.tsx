import { useState } from "react";
import { Link } from "react-router-dom";
import { CgClose, CgMenuRight } from "react-icons/cg";

import { navigation } from "@components/home/Data";
import NavMobile from "@components/shared/NavMobile";

export const SiteNavbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img
            className="h-24 w-24"
            src="/rausha-kipaji-logo.png"
            alt="rausha kipaji logo"
          />
        </Link>

        <div
          onClick={() => setMobileNav(!mobileNav)}
          className="text-2xl text-white md:hidden lg:text-xl cursor-pointer"
        >
          {mobileNav ? <CgClose /> : <CgMenuRight />}
        </div>

        <nav className="hidden md:flex">
          <ul className="md:flex items-center gap-x-12">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  className="capitalize text-white hover:border-b hover:border-[#ff581f] hover:text-[#ff581f] transition-all"
                  to={item.href}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <a
              href="https://portal.tisini.co.ke/auth/register/team-owner"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-green-600 bg-orange  text-xl rounded-md backdrop-blur-md transition p-2"
            >
              Register Here
            </a>
          </ul>
        </nav>

        <div
          className={`${
            mobileNav ? "left-0" : "-left-full"
          } md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}
        >
          <NavMobile />
        </div>
      </div>
    </div>
  );
};
