import { AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import EachElement from "./EachElement";
import Glow from "./Glow";
import { Accordion, AccordionContent } from "./ui/accordion";
import { ChevronDown } from "lucide-react";

const Faqs = () => {
  return (
    <>
      <section className="relative py-16">
        <Glow className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 scale-125 opacity-85 lg:h-[500px] lg:w-[500px] lg:scale-110" />
        <div className="wrapper max-w-5xl">
          <h2 className="mb-16 text-balance text-center text-4xl font-medium">
            Frequently Asked Questions (FAQs)
          </h2>

          <div>
            <Accordion type="single" className="space-y-5" collapsible>
              <EachElement
                of={faqs}
                render={(
                  faq: {
                    title: string;
                    content: string;
                  },
                  index: number,
                ) => (
                  <AccordionItem
                    key={index}
                    value={faq.title}
                    className="rounded-2xl border-2 border-white p-6"
                  >
                    <AccordionTrigger className="group grid w-full grid-cols-[1fr_40px] items-center justify-between text-left font-outfit text-xl font-medium sm:text-2xl">
                      {faq?.title}{" "}
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-smarty-400 duration-300 group-data-[state=open]:-rotate-180">
                        <ChevronDown />
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="mt-3 leading-relaxed">
                      {faq?.content}
                    </AccordionContent>
                  </AccordionItem>
                )}
              />{" "}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;

const faqs = [
  {
    title: "How do i get started on the platform?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, dolorum quae? Reiciendis sapiente, atque ducimus similique autem ullam quam magnam dolorem voluptatem earum illum? Sit enim exercitationem dolorum assumenda? Pariatur?",
  },
  {
    title: "Is my data secure on this Platform?",
    content:
      "Yes. All transactions and data are encrypted and secured on the blockchain, ensuring complete transparency and control.",
  },
  {
    title: "What is the role of the token?",
    content:
      "Our native token enables governance, rewards and access to premium features, empowering holders within the ecosystem.",
  },
];
