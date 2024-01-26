import { seasons } from "@components/gallery/constants";
import { useNavigate } from "react-router-dom";

const GalleryPage = () => {
  const navigate = useNavigate();
  return (
    <main className="w-full">
      <section className="bg-hero bg-no-repeat bg-cover bg-center text-white relative pt-[110px] pb-12 lg:pt-[200px] flex justify-center">
        {/* <div className="bg-black bg-opacity-70 absolute inset-0"></div> */}

        <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
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

      <section className="mx-auto py-4 overflow-hidden max-w-[800px]">
        <h1 className="text-xl font-bold font-serif mb-4">Videos</h1>

        <div className="aspect-w-16 aspect-h-9 md:h-[500px]">
          <iframe
            width="853"
            height="480"
            src="https://www.youtube.com/embed/2o3VQuhLyDQ?si=EIcLE8VdtHFI3Jjz"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default GalleryPage;
