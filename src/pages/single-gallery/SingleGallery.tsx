import { seasons } from "@components/gallery/constants";
import { useParams } from "react-router-dom";

const SingleGallery = () => {
  const { year } = useParams();

  const seasonImages = seasons.filter((season) => season.year === year);

  const images = seasonImages[0].images;

  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <section className="bg-hero bg-no-repeat bg-cover bg-center min-h-screen text-white relative pt-[110px] flex justify-center">
          <div className="bg-black bg-opacity-70 absolute inset-0"></div>

          <div className="flex flex-col gap-2 absolute p-4">
            <h1 className="text-white font-bold lg:text-2xl mb-8">
              {seasonImages[0].year} Memories
            </h1>

            <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {images.map((image, idx) => (
                <div
                  key={idx}
                  className="w-full max-w-[290px] rounded-md bg-white hover:bg-red-500 hover:text-white transition cursor-pointer"
                >
                  <div className="">
                    <img src={image} alt="" className="rounded-md" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SingleGallery;
