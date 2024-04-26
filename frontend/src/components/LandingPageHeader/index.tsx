import React from "react";
import "./index.css";
import grow_logo from "../../assets/images/Grow_logo_full.png";

interface SetStateProps {
  onHeroChange: React.Dispatch<React.SetStateAction<string>>;
}

export default function LandingPage({ onHeroChange }: SetStateProps) {
  return (
    <div>
      <div className="landing-header-wrapper">
        {/* header-content area */}
        <img
          src={grow_logo}
          alt="growbinar-logo"
          className="w-[195px] h-[107px]"
        />
        <div className="inline-flex flex-start w-[307px] h-[31px] gap-[64px]">
          <button
            className="text-[16px] text-center text-[#000] not-italic leading-6 font-medium 
                focus:border-gbpurple border-b-2 border-transparent translate-all"
          >
            About us
          </button>

          <button
            className="text-[16px] text-center text-[#000] not-italic leading-6 font-medium
                focus:border-gbpurple border-b-2 border-transparent translate-all autofocus"
            onClick={() => onHeroChange("menteeLanding")}
          >
            Mentee
          </button>

          <button
            className="text-[16px] text-center text-[#000] not-italic leading-6 font-medium 
                focus:border-gbpurple border-b-2 border-transparent translate-all"
            onClick={() => onHeroChange("mentorLanding")}
          >
            Mentor
          </button>
        </div>
        <div className="inline-flex gap-[10px]">
          <button className="header-button-one">Sign up</button>
          <button className="header-button-two">Find your mentor</button>
        </div>
      </div>
    </div>
  );
}
