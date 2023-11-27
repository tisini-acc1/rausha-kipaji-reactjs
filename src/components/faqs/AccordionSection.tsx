import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const AccordionSection = ({
  section,
  isActiveSection,
  setActiveIndex,
  sectionIndex,
}) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? 0 : sectionIndex;
    setActiveIndex(nextIndex);
  };

  return (
    <div>
      <div
        className="flex items-center justify-between border-2 rounded-md p-3 my-2 cursor-pointer"
        onClick={toggleSection}
      >
        <h2 className="text-xl font-semibold">{section.question}</h2>

        {isActiveSection ? <FaMinus /> : <FaPlus />}
      </div>

      <div className="px-5 text-[#71717a]">
        {isActiveSection && <p>{section.answer}</p>}
      </div>
    </div>
  );
};

export default AccordionSection;
