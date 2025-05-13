import { useState } from "react";
import { colors } from "../../utils/constants";

export const CardsPlan = ({ title, highlightedTitle, description, plans }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col shadow-lg ">
      <div className="w-full bg-black">
        <h3
          style={{ fontFamily: "Bebas Neue, sans-serif" }}
          className="text-2xl py-4 tracking-wider text-center font-bold text-white"
        >
          {title}
          <span style={{ color: colors.primary_pink }}>
            {" "}
            {highlightedTitle}
          </span>
        </h3>
      </div>
      <div className="h-[250px] relative w-full">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_nCqJJ_voFqYTocElw2TgVz-EAtsx8BGqw&s"
          alt="plan"
          className="w-full h-full object-cover"
        />
        <button
          onClick={toggleCard}
          className="absolute left-1/2 -translate-x-1/2 -bottom-[15px] bg-[#F47AC4]  px-[30px] py-[10px] flex items-center justify-center"
        >
          <h4
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
            className="text-white tracking-wider font-bold"
          >
            Conoce más
          </h4>
        </button>
      </div>
      {isExpanded && (
        <div className="mt-10 px-2 pb-5">
          <h4
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
            className="text-2xl font-bold"
          >
            ¿Qué incluye?
          </h4>
          <div className="flex mt-3 flex-col gap-2">
            {description.map((item) => (
              <div>
                <p
                  className="text-md font-bold"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {item.title}
                </p>
                <p
                  className="text-xs"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex mt-6 items-center justify-center gap-6">
            {plans.map((plan) => (
              <a href={plan.link} className="text-sm">
                <div
                  style={{ fontFamily: "Bebas Neue, sans-serif" }}
                  className="text-white flex items-center flex-col bg-[#F47AC4] p-2"
                >
                  <p className="text-xs">{plan.title}</p>
                  <p className="font-bold text-md">{plan.price}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardsPlan;
