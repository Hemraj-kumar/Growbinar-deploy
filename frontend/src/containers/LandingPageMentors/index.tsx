import React from "react";
import Data from "./data";
import "./index.css";
import group from "../../assets/images/group_mentors.png";
import rightArrow from "../../assets/images/right_arrow.png";

interface buttonProps {
  changeButton: string;
}

export default function LandingPageMentors({ changeButton }: buttonProps) {
  function MentorsRemaining() {
    return (
      // remaining mentors section
      <div className="mentors-card-container">
        {Data.slice(3).map((value, index) => (
          <div className="space-y-4">
            <div className="w-[385px] h-[487px] flex-shrink-0 rounded-xl border border-[#D4D4D4] space-y-[20px] ">
              <div className=" flex flex-col justify-center items-center pt-2">
                <img
                  src={value?.mentor_image}
                  alt="mentor_image"
                  className="w-[361px] h-[340px] flex-shrink-0 rounded-md"
                />
              </div>
              <div className="flex flex-col items-start ml-[15px]">
                <p className="font-CircularStdBold text-[24px] leading-2">
                  {value?.name}
                </p>
                <p className="font-CircularStd text-[20px] text-[#959595] font-thin">
                  {value?.role}
                </p>
                <p className="font-CircularStd text-[20px] font-normal">
                  {value?.company}
                </p>
              </div>
            </div>
            <div className="w-[385px] h-[87px] pt-[17px] pr-[32px] pb-[16px] pl-[31px] items-center justify-center rounded-xl bg-[#F6F6F6] space-y-2">
              <div className="flex gap-[58px]">
                <div className="w-[85px] h-[54px]">
                  <p className="font-CircularStdMedium font-extralight text-[16px]">
                    Experience{" "}
                  </p>
                  <p className="font-CircularStdBold text-[15px]">
                    {value?.experience}
                  </p>
                </div>
                <div className="w-[85px] h-[54px] ">
                  <p className="font-CircularStdMedium font-extralight text-[16px]">
                    Mentees
                  </p>
                  <p className="font-CircularStdBold text-[15px]">
                    {value?.Mentees}
                  </p>
                </div>
                <div className="w-[85px] h-[54px] ">
                  <p className="font-CircularStdMedium font-extralight text-[16px]">
                    Ratings
                  </p>
                  <p className="font-CircularStdBold  text-[15px]">
                    {value?.Rating}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* browse mentors section with shadow effect */}
        <div className="flex flex-col w-[385px] h-[588px] flex-shrink-0 rounded-xl  border border-[#D4D4D4] items-center justify-between ">
          <div className="mt-[40px]">
            <div className="">
              <img
                src={group}
                alt="group-mentors"
                className="w-[326px] h-[263px]"
              />
            </div>
            <div className=" w-[361px] h-[104px] font-CircularStdMedium whitespace-pre-line text-[48px] leading-[52px] text-center mt-[35px]">
              Browse over 100+ Mentors
            </div>
          </div>
          {changeButton === "menteeLanding" ? (
            <button className="w-[321px] h-[69px] rounded-xl flex-shrink-0 bg-gbpurple mb-[20px] font-CircularStdMedium  text-[#fff] text-[24px] leading-10">
              Find my mentor
            </button>
          ) : (
            // <div className="flex">
            <button className=" w-[321px] h-[69px] rounded-xl flex-shrink-0 bg-gbpurple mb-[20px] font-CircularStdMedium  text-[#fff] text-[24px] leading-10">
              Become a Mentor
            </button>
            // </div>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col">
      <div className="mentors-card-container">
        {Data.slice(0, 3).map((value, index) => (
          <div className="space-y-4">
            <div className="w-[385px] h-[487px] flex-shrink-0 rounded-xl border border-[#D4D4D4] space-y-[20px] ">
              <div className=" flex flex-col justify-center items-center pt-2">
                <img
                  src={Data[index]?.mentor_image}
                  alt="mentor_image"
                  className="w-[361px] h-[340px] flex-shrink-0 rounded-md"
                />
              </div>
              <div className="flex flex-col items-start ml-[15px] space-y-[5px]">
                <p className="font-CircularStdBold text-[24px] leading-2">
                  {Data[index]?.name}
                </p>
                <p className="font-CircularStd text-[20px] text-[#959595] font-thin">
                  {Data[index]?.role}
                </p>
                <p className="font-CircularStd text-[18px] font-normal">
                  {Data[index]?.company}
                </p>
              </div>
            </div>
            <div className="w-[385px] h-[87px] pt-[17px] pr-[32px] pb-[16px] pl-[31px] items-center justify-center rounded-xl bg-[#F6F6F6] space-y-2">
              <div className="flex gap-[58px]">
                <div className="w-[85px] h-[54px]">
                  <p className="font-CircularStdMedium font-extralight text-[16px]">
                    Experience{" "}
                  </p>
                  <p className="font-CircularStdBold text-[15px]">
                    {Data[index].experience}
                  </p>
                </div>
                <div className="w-[85px] h-[54px] ">
                  <p className="font-CircularStdMedium font-extralight text-[16px]">
                    Mentees
                  </p>
                  <p className="font-CircularStdBold text-[15px]">
                    {Data[index].Mentees}
                  </p>
                </div>
                <div className="w-[85px] h-[54px] ">
                  <p className="font-CircularStdMedium font-extralight text-[16px]">
                    Ratings
                  </p>
                  <p className="font-CircularStdBold  text-[15px]">
                    {Data[index].Rating}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <MentorsRemaining />
    </div>
  );
}
