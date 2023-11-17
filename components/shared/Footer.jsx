import Link from "next/link";
import { footer } from "../home/Data";

const Footer = () => {
  const date = new Date().getFullYear();
  const { socials, links } = footer;

  return (
    <footer className="section bg-black text-white">
      <div className="container grid grid-cols-3 gap-8">
        <div>
          <h5>
            <Link
              className="inline-block mb-4 text-base font-semibold"
              href={"/"}
            >
              Rausha Kipaji
            </Link>
          </h5>

          <p className="mb-8 text-[#a3a3a3]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            maiores impedit odit illum qui ea ipsam distinctio officiis fuga
            vitae.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            {socials.map((soc) => (
              <a
                key={soc.name}
                href="#"
                className="py-[5px] px-[10px] text-xl text-[#ff581f] bg-[#232220] transition duration-300 hover:text-[#ffffff] hover:bg-[#ff581f]"
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xl font-semibold">Quick Links</h4>
          <div>
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                className="mb-4 flex text-[#a3a3a3] transition duration-300 hover:text-[#ff581f]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xl font-semibold">Contact Us</h4>
        </div>
      </div>

      <div className="px-4 py-4 text-sm text-center text-[#a3a3a3]">
        Copyright @{date} Rausha Kipaji. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
