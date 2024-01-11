import { whoWeAre } from "./AboutData";

const WhoWeAre = () => {
  const { caption, persons } = whoWeAre;

  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="font-semibold mb-12">
          <h5 className="uppercase text-orange mb-4">{caption}</h5>
          {/* <p className="text-lg ">{title}</p> */}
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
          {persons.map((person, index) => (
            <div
              key={index}
              className="w-full max-w-[290px] h-[350px] border rounded-[18px]"
            >
              <div className="w-full max-w-[285px] h-full max-h-[285px] flex items-center justify-center">
                <img src={person.image} alt="partner-logo" />
              </div>
              <div className="px-4 mt-3">
                <h1 className="text-xl font-semibold capitalize">
                  {person.name}
                </h1>
                <p className="text-base text-[#71717a] capitalize">
                  {person.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
