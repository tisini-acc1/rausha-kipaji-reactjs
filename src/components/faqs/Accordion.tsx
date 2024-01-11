import { useState } from "react";

import { tournamentQuestions } from "./FaqsData";
import AccordionSection from "./AccordionSection";

const Accordion = () => {
  const { title, questions } = tournamentQuestions;

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section">
      <div className="container mx-auto">
        <h1 className="title text-center mb-8">{title}</h1>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 order-1 lg:-order-1">
            <div>
              <img src="/images/23/kipaji2023.jpeg" alt="" />
            </div>
          </div>

          <div className="flex-1 lg:p-5">
            {questions.map((question) => (
              <AccordionSection
                section={question}
                key={question.id}
                isActiveSection={question.id === activeIndex}
                setActiveIndex={setActiveIndex}
                sectionIndex={question.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
