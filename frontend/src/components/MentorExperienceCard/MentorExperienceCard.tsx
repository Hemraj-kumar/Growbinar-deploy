import "./index.css";
import buildingIcon from "../../assets/images/building.svg";
interface MentorExperienceCardProps {
  designation?: string;
  organization?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
}
export default function MentorExperienceCard(props: MentorExperienceCardProps) {
  return (
    <div className="MentorExperienceCard">
      <div className="heading-sect">
        <div className="org-and-role">
          <img
            src={buildingIcon}
            alt="buildingIcon"
            className="building-icon"
          />
          <p className="designation">{props?.designation}</p>
          <p className="organization">{props?.organization}</p>
        </div>
        <div className="work-period">
          {props?.startDate + " - " + props?.endDate}
        </div>
      </div>
      <div className="experience-description">{props?.description}</div>
    </div>
  );
}
