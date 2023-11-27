import { quote } from "./AboutData";

const Quote = () => {
  const { title } = quote;

  return (
    <section className="h-[400px] bg-quote bg-no-repeat bg-cover bg-center text-white relative">
      <div className="bg-black bg-opacity-70 absolute inset-0"></div>

      <div className="flex items-center justify-center h-full">
        <h1 className="title z-20 max-w-[800px] p-8 lg:p-0">{title}</h1>
      </div>
    </section>
  );
};

export default Quote;
