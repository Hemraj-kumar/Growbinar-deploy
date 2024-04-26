import React from "react";
import search from "../../assets/images/Search.svg";

export default function MenteeHero() {
  return (
    <div>
      <div className="flex items-center justify-center mt-[80px]">
        <div className="ils-img-container">
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <div className="w-[900px] h-[164px] text-center">
              <p className="text-[#000] text-5xl font-bold leading-[82px] tracking-1 whitespace-pre-line">
                Unlock your path to career success with expert mentors
              </p>
            </div>
            <br />
            <div className="text-center">
              <p className="text-[#000] text-lg font-light leading-8 tracking-2">
                Start your career journey confidently with a{" "}
                <span>
                  <button className="h-[38px] w-[154px] text-sm rounded-full text-gbpurple bg-[#F2F1FF] font-medium text-center">
                    FREE TRAIL SESSION
                  </button>
                </span>{" "}
                Choose your mentor and
              </p>
              <p className="text-[#000] text-lg font-light leading-8 tracking-2">
                explore the path to success.
              </p>
            </div>
            <br />
            <div className="flex items-center justify-center">
              <div className="w-[624px] h-[84px] inline-flex pt-[8px] pr-[8px] pb-[8px] pl-[31px] items-center justify-between gap-[13px] rounded-[258px] bg-[#fff] shadow-newsletter">
                <div className="flex gap-[18px] items-center justify-start">
                  <img
                    src={search}
                    alt="search-icon"
                    className="h-[36px] w-[37px]"
                  />
                  <input
                    placeholder="Search Mentors by company, skills or role"
                    className="w-[334px] h-[24px] text-[#BABABA] text-lg font-normal leading-6 tracking-3"
                  />
                </div>
                <button className="w-[145px] h-[68px] flex-shrink-0 rounded-[100px] bg-gbpurple text-lg text-white font-normal leading-8">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
