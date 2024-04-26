import "./index.css";
import Companies from "./Companies";
import video_frame from "../../assets/images/video_frame.png";
import Marquee from "react-fast-marquee";
import group from "../../assets/images/group_disc.png";
import learning_boy from "../../assets/images/Learning_boy.png";
import piled_books from "../../assets/images/books_piled.png";
import learning_girl from "../../assets/images/Learning_girl.png";
import globe from "../../assets/images/globe_image.png";
import engg from "../../assets/images/engg.png";
import design from "../../assets/images/design.png";
import marketing from "../../assets/images/marketing.png";
import data_science from "../../assets/images/data_science.png";
import LandingPageMentors from "../../containers/LandingPageMentors";
import TestmonialContainer from "../../containers/TestimonialContainer";
import newsletter_left from "../../assets/images/news_letter_left_image .png";
import newsletter_right from "../../assets/images/news_letter_right_image.png";
import mail from "../../assets/images/mail_image.png";
import Footer from "../../components/Footer";
import MenteeHero from "../HeroSections/MenteeHero";
import MentorHero from "../HeroSections/MentorHero";

interface Props {
  hero: string;
}

export default function MenteeLandingPage({ hero }: Props) {
  return (
    <div>
      {hero === "menteeLanding" ? <MenteeHero /> : <MentorHero />}

      {/* companies logo section  */}
      {/* left to right marquee */}

      <Marquee direction="left" speed={200} className="mt-[100px]">
        <div className="companies-container">
          {Companies.map((value, index) => (
            <div className="gap-[70px] items-center justify-start ">
              <img
                className="h-[42px] w-[193px] flex-shrink-0"
                src={Companies[index].logo}
                alt="companies_logo"
              />
            </div>
          ))}
        </div>
      </Marquee>
      {/* right to left marquee */}
      <Marquee direction="right" speed={200} className="marquee-container">
        <div className="companies-container">
          {Companies.map((value, index) => (
            <div className="gap-[70px] items-center justify-start ">
              <img
                className="h-[42px] w-[193px] flex-shrink-0"
                src={Companies[index].logo1}
                alt="companies_logo"
              />
            </div>
          ))}
        </div>
      </Marquee>

      <div className="flex flex-col items-center justify-center mt-[80px]">
        <div className="flex w-[160px] h-[50px] p-2  items-center justify-center gap-[10px] rounded-full bg-[#F2F1FF]">
          <p className="text-gbpurple text-center text-[16px] not-italic font-semibold leading-6">
            HOW IT HELPS
          </p>
        </div>
        <br />
        <div className="w-[477px] h-[128px]">
          <p className="text-center text-[48px] not-italic font-semibold leading-[64px] text-black">
            No need to struggle{" "}
          </p>
          <p className="text-center text-[48px] not-italic font-semibold leading-[64px] text-black ">
            alone anymore
          </p>
        </div>
      </div>

      {/* video section */}
      <iframe
        width="994"
        height="623"
        src={video_frame}
        style={{
          display: "flex",
          margin: "0 auto",
          borderRadius: "32px",
          objectFit: "contain",
          backgroundSize: "cover",
          marginTop: "50px",
        }}
      />

      {/* key features of growbinar section */}
      <div className="grid grid-rows-2 grid-flow-col mt-[50px]">
        <div className=" flex items-center justify-center space-x-10 ">
          {/*1:1 session section */}
          <div className="h-[377px] w-[705px] flex-shrink-0 rounded-[18px] border-2 border-gray-300">
            <div className="session-text-container">
              <p className="session-title-text">1:1 sessions</p>
            </div>

            <div className="grid grid-cols-2 grid-flow-col">
              <div className="content-center">
                <div className="one-on-one-container">
                  <div className="one-on-one-text">
                    <p>
                      Ensure steady progress with frequent 1:1 sessions—no
                      doubts, just growth.
                    </p>
                  </div>
                </div>
                <div className="grey-text-container">
                  <div className="grey-text">
                    <p>
                      During each one-hour session, your mentor will tackle
                      problems, teach key concepts, collaborate on projects,
                      strategize, and guide you towards achieving your goals.
                    </p>
                  </div>
                </div>
              </div>
              <img
                src={learning_boy}
                alt="pileof-books"
                className="w-[250px] h-[285px] mt-[18px] place-self-end rounded-r-[18px]"
              />
            </div>
          </div>

          {/* unlimited chat section */}
          <div className="w-[498px] h-[376px] flex-shrink-0 rounded-[18px] border-2 border-gray-300">
            <div className="flex justify-between">
              <div className="chat-text-container">
                <p className="session-title-text">UNLIMITED CHAT</p>
              </div>
              <img
                src={group}
                className="w-[309px] h-[181px] rounded-r-[18px]"
                alt="group"
              />
            </div>
            <div className="chat-content-container">
              <div className="chat-content">
                <p>
                  Questions? Chat directly with your mentor for instant advice.
                </p>
              </div>
            </div>
            <div className="chat-fact-container">
              <div className="chat-fact-content">
                <p>
                  Get quick answers and expert advice. Chat directly with your
                  mentor.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd section of growbinar features */}
        <div className="flex place-content-center space-x-5">
          {/* consistent follow ups section */}
          <div className="w-[498px] h-[376px] flex-shrink-0 rounded-[18px] border-2 border-gray-300 mt-4">
            <div className="flex justify-between">
              <div className="followup-text-container">
                <p className="session-title-text">CONSISTENT FOLLOW-UPS</p>
              </div>
              <img
                src={piled_books}
                alt="piled_books"
                className="rounded-r-[18px]"
              />
            </div>
            <div className="motivated-container">
              <div className="motivated-chat">
                <p>Stay motivated and consistent</p>
                <p>with regular follow-ups</p>
              </div>
            </div>
            <div className="motivated-fact-container">
              <div className="motivated-fact-chat">
                <p>
                  Mentor will keep a check on you, motivate and unblock you
                  regularly.
                </p>
              </div>
            </div>
          </div>

          {/* assignments and material section */}
          <div className="h-[282px] w-[705px] flex-shrink-0 rounded-[18px] border-2 border-gray-300 mt-4">
            <div className="material-title-container">
              <p className="material-title-text">ASSIGNMENTS & MATERIALS</p>
            </div>
            <div className="grid grid-cols-2 grid-flow-col">
              <div className="content-center ml-[35px]">
                <div className="material-fact-container">
                  <div className="material-fact-chat">
                    <p>Optimize your time by focusing </p>
                    <p>on essential tasks and resources.</p>
                  </div>
                </div>
                <div className="material-text-container">
                  <div className="material-text">
                    <p>
                      Get quick answers and expert advice. Chat directly with
                      your mentor.
                    </p>
                  </div>
                </div>
              </div>
              <img
                src={learning_girl}
                alt="learning-girl"
                className="lr-girl"
              />
            </div>
            {/* explore mentors button */}
            <div className="explore-mentors-button">
              <div className="flex self-center justify-between ">
                <div className="explore-text">
                  Select your mentor and start learning
                </div>
                <button className="explore-button">Explore mentors </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* find your mentors section */}
      <div className="flex flex-col items-center justify-center mt-[100px]">
        <div className="inline-flex w-[208px] h-[51px] p-2 items-center justify-center rounded-[211px] bg-[#F2F1FF]">
          <p className="mentor-text">FIND YOUR MENTOR</p>
        </div>
        <br />
        <div className="h-auto w-[477px] whitespace-nowrap">
          <p className="realms-text">Across All Realms</p>
          <p className="realms-text">Expertise Unleashed</p>
        </div>
      </div>

      {/* filter button section  */}
      <div className="flex items-center justify-center gap-[24px] mt-[25px]">
        <button className="flex w-[144px] h-[72px] items-center justify-center gap-2 bg-black cursor-pointer rounded-[12px]">
          <img src={globe} className="w-[40px] h-[40px]" alt="globe" />
          <p className="globe-all-text">All</p>
        </button>
        <button className="flex w-[244px] h-[72px] items-center justify-center gap-2 bg-[#F2F2F7] cursor-pointer rounded-[12px]">
          <img src={engg} className="w-[40px] h-[40px]" alt="engineering" />
          <p className="common-filter-text">Engineering</p>
        </button>
        <button className="flex w-[225px] h-[72px] items-center justify-center gap-2 bg-[#F2F2F7] cursor-pointer rounded-[12px]">
          <img src={marketing} className="w-[40px] h-[40px]" alt="marketing" />
          <p className="common-filter-text">Marketing</p>
        </button>
        <button className="flex w-[191px] h-[72px] items-center justify-center gap-2 bg-[#F2F2F7] cursor-pointer rounded-[12px]">
          <img src={design} className="w-[40px] h-[40px]" alt="design" />
          <p className="common-filter-text">Design</p>
        </button>
        <button className="flex w-[259px] h-[72px] items-center justify-center gap-2 bg-[#F2F2F7] cursor-pointer rounded-[12px]">
          <img
            src={data_science}
            className="w-[40px] h-[40px]"
            alt="data_science"
          />
          <p className="common-filter-text">Data Science</p>
        </button>
      </div>
      <br />

      {/* mentors card section */}
      <LandingPageMentors changeButton={hero} />

      {/* user client section */}
      <div className="flex flex-col w-full h-[701px] bg-[#F7F8FF] items-center p-[96px] justify-start space-y-8 mt-[75px]">
        <div className="flex w-[154px] h-[51px] items-center justify-center gap-[10px] bg-[#DDDAFF] text-[17px] font-CircularStdMedium leading-6 font-normal text-gbpurple rounded-[211px]">
          WHAT WE DO
        </div>
        <div className=" w-[995px] h-[111px] text-[48px] font-CircularStdBold leading-[63px] text-center flex-shrink-0 whitespace-pre-line p-3">
          A Results-Driven Platform Empowering Success
        </div>

        <div className="grid grid-flow-col gap-[80px] w-full h-[128px] pt-[60px]">
          <div className="flex flex-col items-center justify-center">
            <p className="font-CircularStdMedium text-[48px] leading-[64px] text-center">
              95%
            </p>
            <p className="text-[30px] leading-[64px] font-normal ">
              Happy Members
            </p>
          </div>

          <div className="divider"></div>

          <div className="flex flex-col items-center justify-center">
            <p className="font-CircularStdMedium text-[48px] leading-[64px] text-center">
              100k+
            </p>
            <p className="text-[30px] leading-[64px] font-normal ">
              Expert Mentors
            </p>
          </div>

          <div className="divider"></div>

          <div className="flex flex-col items-center justify-center">
            <p className="font-CircularStdMedium text-[48px] leading-[64px] text-center">
              110+
            </p>
            <p className="text-[30px] leading-[64px] font-normal ">Countries</p>
          </div>

          <div className="divider"></div>

          <div className="flex flex-col items-center justify-center">
            <p className="font-CircularStdMedium text-[48px] leading-[64px] text-center">
              10M+
            </p>
            <p className="text-[30px] leading-[64px] font-normal ">
              Connections
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial section  */}

      <div className="testimonial-text ">Community Favored and Treasured.</div>

      {/* testimonial marquee section */}
      <div className="mt-[35px]">
        <Marquee direction="left" speed={50}>
          <TestmonialContainer />
        </Marquee>
      </div>

      {/* newsletter section */}
      <div className="w-full h-[550px] flex-shrink-0 bg-[#F7F8FF] mt-[100px] mb-4 overflow-hidden">
        <div className="grid grid-flow-col">
          <div className="flex w-[412px] h-[438px] items-center justify-center ">
            <img
              src={newsletter_left}
              alt="group1"
              className="ml-[200px] mt-[30px]"
            />
          </div>
          <div className="flex flex-col items-center justify-center space-y-10 mt-12">
            <div className="w-[714px] h-[126px] whitespace-pre-line font-CircularStdMedium font-normal leading-[63px] text-[54px] text-center mt-6">
              Begin your journey with an expert mentor.
            </div>
            <div className="whitespace-pre-line font-CircularStdMedium font-normal leading-[33px] text-[22px] text-center text-[#9F9F9F] mt-4">
              Craft an exceptional career with our expert mentors from junior to
              leadership, we grow with you.
            </div>
            <div className="w-[480px] h-[84px] bg-[#fff] rounded-[258px] items-center justify-center mt-6 shadow-newsletter">
              <div className="flex justify-between">
                <div className="flex gap-4 items-center">
                  <div className="flex h-[84px] ml-[30px] items-center justify-center">
                    <img
                      src={mail}
                      className="w-[40px] h-[40px]"
                      alt="mail icon"
                    />
                  </div>
                  <input
                    placeholder="Enter your email"
                    className="text-[16px] text-black font-CircularStdMedium w-[200px] h-[40px]"
                  />
                </div>
                <div className="p-2 self-center">
                  <button className="w-[145px] h-[68px] flex-shrink-0 rounded-[100px] bg-gbpurple text-[18px] font-CircularStdMedium leading-7 font-normal text-white">
                    Join now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[382px] h-[504px] items-center justify-center">
            <img src={newsletter_right} alt="group1" className="mr-[230px]" />
          </div>
        </div>
      </div>

      {/* footer section */}
      <Footer />
    </div>
  );
}
