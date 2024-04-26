import { ReactComponent as BackArrow } from "../../assets/images/BackArrow.svg";
import like from "../../assets/images/heart.svg";
import comments from "../../assets/images/comments.svg";
import priceIcon from "../../assets/images/Rupee.svg";
import profilePic from "../../assets/images/mentor-pic.png";
import speakerIcon from "../../assets/images/volume.svg";
import locationMarker from "../../assets/images/location-marker.svg";
import globe from "../../assets/images/globe.svg";
import briefcase from "../../assets/images/briefcase.svg";
import rightArrow from "../../assets/images/rightArrow.svg";
import "./index.css";
import MentorBackgroundDetailsCard from "../../components/MentorBackgroundDetailsCard/MentorBackgroundDetailsCard";
import MentorExperienceCard from "../../components/MentorExperienceCard/MentorExperienceCard";
import AvailableSession from "../../components/AvailableSession/AvailableSession";
import MentorCardsContainer from "../MentorCardsContainer/MentorCardsContainer";
import data from "./dummyData";

export default function MentorProfile() {
  return (
    <div className="mentor-profile-container">
      <div className="flex items-center gap-x-2 hover:cursor-pointer">
        <BackArrow />
        <span className="font-bold text-lg inline">Back</span>
      </div>
      <div className="bg-cover-container"></div>
      <div className="mentor-details-container">
        <div className="profile-pic-container">
          <span className="profile-pic">
            <img src={profilePic} alt="profilepic" />
          </span>
          <span className="speaker-icon">
            <img src={speakerIcon} alt="speaker" />
          </span>
        </div>

        <div className="btns-container">
          <button className="like-btn">
            <img src={like} alt="likes" />
          </button>
          <button className="comments-btn">
            <img src={comments} alt="comments" />
          </button>
          <button className="appreciate-btn">
            <img src={priceIcon} alt="appreciate" />
            Appreciate
          </button>
        </div>
        <p className="username-text"> {"Sejoung"}</p>
        <p className="designation-text"> {"Product Designer at Vijaro"}</p>
        <div className="loc-exp-details">
          <div className="loc-details">
            <span>
              {" "}
              <img src={locationMarker} alt="location-marker" />
            </span>
            <p>{"Mumbai, Maharashtra, India (+5:30 IST)"}</p>
          </div>

          <div className="lang-details">
            <span>
              {" "}
              <img src={globe} alt="location-marker" />
            </span>
            <p>{"English, Hindi, Gujrati"}</p>
          </div>

          <div className="exp-details">
            <span>
              {" "}
              <img src={briefcase} alt="location-marker" />
            </span>
            <p>{"2+years Experience"}</p>
          </div>
        </div>
        <div className="next-availability-container">
          <p className="next-available-text">{"Next Available"}</p>
          <span className="available-date-month">{"06 Jan"}</span>
          <span className="available-day">{"Thursday"}</span>
          <span className="available-time">{"12 PM"}</span>
          <button className="book-btn">Book</button>
        </div>
      </div>
      <div className="overview-experience-and-availabilities">
        <div className="overview-background-and-exp-container">
          <div className="overview-details-container">
            <h3 className="heading">Overview</h3>
            <div className="content">
              {
                "Product Designer @ Vajro Inc | Previously Visual Designer at Freshworks & Contus Tech.| Full Stack Designer | App Designer | IOT | SaaS | Interaction Design"
              }
            </div>
          </div>
          <div className="overview-details-container">
            <h3 className="heading">Background</h3>
            <div className="content">
              <MentorBackgroundDetailsCard
                education="IDC, Mumbai"
                experience={["UI/UX Design", "ReactJS"]}
                fluency={[
                  "English",
                  "Tamil",
                  "Malayalam",
                  "Hindi",
                  "Dutch",
                  "French",
                  "Marathi",
                ]}
              />
            </div>
          </div>
          <div className="overview-details-container">
            <h3 className="heading">Experience</h3>
            <div className="content">
              <MentorExperienceCard
                designation="Product Designer"
                organization="Thoughtworks"
                description={
                  "Skilled in branding & identity, design language, Product web pages, brand experience, editorial design, corporate communications, event design, environmental graphics and social media."
                }
                startDate="DEC 2019"
                endDate="DEC 2023"
              />
            </div>
          </div>
        </div>
        <div className="availabilities-and-similar-profiles-container">
          <div className="session-availabilities-container">
            <AvailableSession data={data} />
            <div className="overview-details-container">
              <div className="heading-sect">
                <h3 className="heading">Similar Profiles</h3>
                <div className="browse-similar-mentors-btn">
                  <p>Browse Mentors</p>
                  <span>
                    <img src={rightArrow} alt="arrow-right" />
                  </span>
                </div>
              </div>
              <div className="content">
                <MentorCardsContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
