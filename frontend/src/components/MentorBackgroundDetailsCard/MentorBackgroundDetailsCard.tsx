import "./index.css";

interface MentorBackgroundDetailsCardProps {
  education?: string | string[];
  experience?: string | string[];
  fluency?: string | string[];
}
export default function MentorBackgroundDetailsCard(
  props: MentorBackgroundDetailsCardProps
) {
  return (
    <div className="MentorBackgroundDetailsCard">
      <div className="education">
        <span className="title">Education</span>
        <div className="education-items">
          {typeof props?.education === "string" ? (
            <span className="education-item">{props?.education}</span>
          ) : Array.isArray(props?.education) ? (
            <>
              {props?.education.map((item, index) => (
                <span key={index} className="education-item">
                  {item}
                </span>
              ))}
            </>
          ) : (
            <span>Invalid education data</span>
          )}
        </div>
      </div>
      <div className="experience">
        <span className="title">Expertise</span>
        <div className="experience-items">
          {typeof props?.experience === "string" ? (
            <span className="experience-item">{props?.experience}</span>
          ) : Array.isArray(props?.experience) ? (
            <>
              {props?.experience.map((item, index) => (
                <span key={index} className="experience-item">
                  {item}
                </span>
              ))}
            </>
          ) : (
            <span>Invalid experience data</span>
          )}
        </div>
      </div>
      <div className="fluency">
        <span className="title">Fluency</span>
        <div className="fluency-items">
          {typeof props?.fluency === "string" ? (
            <span className="fluency-item">{props?.fluency}</span>
          ) : Array.isArray(props?.fluency) ? (
            <>
              {props?.fluency.map((item, index) => (
                <span key={index} className="fluency-item">
                  {item}
                </span>
              ))}
            </>
          ) : (
            <span>Invalid fluency data</span>
          )}
        </div>
      </div>
    </div>
  );
}
