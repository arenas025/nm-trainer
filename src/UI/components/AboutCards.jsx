import { useState } from "react";

export const AboutCards = ({ title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      onClick={toggleCard}
      style={{
        height: isExpanded ? 350 : 50,
        fontFamily: "Bebas Neue, sans-serif",
      }}
      className="w-[80%] flex flex-col  transition-all duration-500 ease-in-out bg-black text-white"
    >
      <div className="h-[50px] flex items-center justify-center">
        <h3 className="text-2xl my-5 text-center">{title}</h3>
      </div>
      <div className="h-[400px] px-2 overflow-clip">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AboutCards;
