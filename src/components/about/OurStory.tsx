import { ourStory } from "./AboutData";

const OurStory = () => {
  const { caption, title, intro, para1, para2, para3, para4, image } = ourStory;
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
              <p>{para2}</p>
              <p>{para3}</p>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex gap-4 flex-col lg:p-4 text-base">
              <h1>Activities planned for implementation are: -</h1>
              {para4.activity.map((act, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="bg-red-500 h-1 w-1 p-2 rounded-full"></span>
                  <h1 className="font-semibold text-lg">{act.act}</h1>
                </div>
              ))}
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
