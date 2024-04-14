import { SiteNavbar } from "@components/fixtures/SiteNavbar";
import Footer from "@components/shared/Footer";
import { Outlet } from "react-router-dom";

export const FixturesLayout = () => {
  return (
    <body className="bg-primary">
      <SiteNavbar />
      <Outlet />
      <Footer />
    </body>
  );
};
