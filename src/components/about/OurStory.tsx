import { ourStory } from "./AboutData";

const OurStory = () => {
  const { caption, title, intro, para1, para2, outro, image } = ourStory;
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-8 lg:mb-12">
          <h5 className="capitalize text-orange font-semibold mb-4">
            {caption}
          </h5>
          <h1 className="title max-w-[750px] mx-auto">{title}</h1>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="flex-1">
            <div className="flex gap-4 flex-col lg:p-4 text-base">
              <p>{intro}</p>
              <p>{para1}</p>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex gap-4 flex-col lg:p-4 text-base">
              <p>{para2}</p>
              <p>{outro}</p>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-center h-full">
              <img
                className="rounded-[10px]"
                src={image}
                alt="football image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
