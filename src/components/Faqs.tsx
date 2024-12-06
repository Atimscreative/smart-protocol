import Glow from "./Glow";

const Faqs = () => {
  return (
    <>
      <section className="relative py-16">
        <Glow className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 scale-125 opacity-85 md:top-28 md:translate-y-0 lg:scale-125" />
        <div className="wrapper">
          <h2 className="mb-16 text-balance text-center text-4xl font-medium">
            Frequently Asked Questions (FAQs)
          </h2>
        </div>
      </section>
    </>
  );
};

export default Faqs;
