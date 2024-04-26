import React from "react";
import topRated from "../../assets/images/top-rated-mentor.png";
import locationIcon from "../../assets/images/location-marker.svg";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { log } from "console";
interface CardProps {
  id: number;
  name: string;
  designation: string;
  organization: string;
  language: string;
  experience?: string;
  slotTime?: string;
  profilePic: string;
  sessionsConducted?: number;
  tag?: string;
}

const MentorCard: React.FC<CardProps> = ({
  id,
  name,
  language,
  designation,
  organization,
  experience,
  slotTime,
  profilePic,
  sessionsConducted,
  tag,
}) => {
  const navigate = useNavigate();
  const changePage = (mentorId: number) => {
    console.log(`/mentors/${mentorId}/profile`);
    navigate(`/mentors/${mentorId}/profile`);
  };
  return (
    <div
      className="mentor-card"
      onClick={() => {
        changePage(id);
      }}
    >
      <div className="mentor-image-container">
        <img
          className="mentor-image"
          src={profilePic}
          alt="mentor-profile-pic"
        />
        <span className="top-rated-mentor">
          {tag === "topRated" ? (
            <img src={topRated} alt="topRatedMentor" />
          ) : (
            tag && <span className="tagline"> {tag}</span>
          )}
        </span>
        {sessionsConducted === undefined && (
          <span className="mentor-language-tag">{language}</span>
        )}
      </div>
      <div className="mentor-details">
        <div className="mentor-name">
          <h3>{name}</h3>
        </div>
        <div className="mentor-designation-org">
          <h3 className="designation-org-text">
            {designation} at{" "}
            <span className="organization-name"> {organization} </span>
          </h3>
        </div>
        {sessionsConducted === undefined && (
          <span className="years-of-experience">
            {experience} of Experience
          </span>
        )}
      </div>
      {sessionsConducted === undefined ? (
        <div className="slot-details">
          <div className="availability-details">
            <h4 className="available-text">Available at</h4>
            <h4 className="slot-time">{slotTime}</h4>
          </div>
          <button className="book-mentor-button">Book</button>
        </div>
      ) : (
        <p className="sessions-conducted">
          Conducted {sessionsConducted} sessions
        </p>
      )}
    </div>
  );
};

export default MentorCard;
