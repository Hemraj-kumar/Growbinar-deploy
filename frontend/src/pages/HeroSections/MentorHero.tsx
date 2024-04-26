import React from "react";

export default function MentorHero() {
  return (
    <div>
      <div className="flex items-center justify-center mt-[80px]">
        <div className="ils-img-container">
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <div className="w-[900px] h-[164px] text-center">
              <p className="text-[#000] text-5xl font-bold leading-[82px] tracking-1 whitespace-pre-line">
                Step into the next phase, enriched by mentoring.
              </p>
            </div>
            <br />
            <div className="w-[780px] h-[64px] text-center">
              <p className="text-[#000] text-lg font-light leading-8 tracking-2 font-CircularStdMedium whitespace-pre-line">
                Elevate your leadership journey, broaden connections, leave a
                lasting impact. With mentorship as your compass, success awaits.
              </p>
            </div>
            <div className="mt-[25px]">
              <button className="w-[285px] h-[78px]  gap-[10px] flex-shrink-0 rounded-[200px] bg-gbpurple shadow-newsletter text-lg font-CircularStdMedium font-semibold text-white text-center">
                Become a Mentor
              </button>
            </div>
            <div className="w-[296px] h-[46px] mt-[25px]">
              <p className="text-base font-CircularStdMedium font-light text-center">
                Explore more than 5,000 skills, topics, and companies to learn
                about.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
