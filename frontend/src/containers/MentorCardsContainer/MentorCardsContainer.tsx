import MentorCard from "../../components/MentorCard/MentorCard";
import "../MentorCardsContainer/index.css";
import Data from "./data";
import profilePic from "../../assets/images/mentor-pic.png";
import mentorPost from "../../assets/images/browse-mentors-post.png";
interface MentorCardsContainerProps {
  browseMentorsCard?: boolean;
}
export default function MentorCardsContainer({
  browseMentorsCard,
}: MentorCardsContainerProps) {
  return (
    <div className="mentor-cards-container">
      {browseMentorsCard && (
        <div className="browse-mentors-card-container">
          <img
            className="browse-mentors-post"
            src={mentorPost}
            alt="mentors-post"
          />
          <span className="discover-mentor-text">
            Discover from over 10k mentors
          </span>
          <button className="browse-mentors-btn">Discover Mentors</button>
        </div>
      )}
      {Data.map((value, index) => (
        <MentorCard
          key={Data[index]?.id}
          id={Data[index]?.id}
          name={Data[index]?.name}
          profilePic={profilePic}
          tag={Data[index]?.tag}
          language={Data[index]?.language}
          designation={Data[index]?.designation}
          organization={Data[index]?.organization}
          experience={Data[index]?.experience}
          slotTime={Data[index]?.slotTime}
          sessionsConducted={Data[index]?.sessionsConducted}
        />
      ))}
    </div>
  );
}
