import { seasons } from "@components/gallery/constants";
import { useNavigate } from "react-router-dom";

const GalleryPage = () => {
  const navigate = useNavigate();
  return (
    <main className="w-full">
      <section className="bg-hero bg-no-repeat bg-cover bg-center min-h-screen text-white relative pt-[110px] lg:pt-[200px] flex justify-center">
        <div className="bg-black bg-opacity-70 absolute inset-0"></div>

        <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 absolute">
          {seasons.map((season) => (
            <div
              key={season.year}
              onClick={() => navigate(`/gallery/${season.year}`)}
              className="w-full max-w-[290px] rounded-md bg-white hover:bg-red-500 hover:text-white transition cursor-pointer"
            >
              <div className="">
                <img src={season.images[0]} alt="" className="rounded-t-md" />
              </div>
              <div className="text-black p-2 space-y-2">
                <p className="font-semibold lg:text-xl">
                  {season.year} gallery
                </p>
                <h1 className="text-sm">{season.theme}</h1>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default GalleryPage;
