import "./index.css";
import CardsContainer from "../../containers/CardsContainer";
import MentorCardsContainer from "../../containers/MentorCardsContainer/MentorCardsContainer";
import emoji from "../../assets/images/love-emoji.png";
export default function MenteeDashboard() {
  const username = "Ansh Mehra";
  return (
    <div className="mentee-dashboard-container">
      <div className="get-started-content">
        <p>Get Started with advanced sessions</p>
        <button
          type="button"
          className="browse-mentors-button"
          onClick={() => {}}
        >
          Browse Mentors
        </button>
      </div>
      <div className="welcome-container">
        <p className="welcome-text">
          Welcome back, <span className="username">{username}</span>
        </p>
        <p className="upcoming-session-text">
          You have
          <span className="text-gbpurple font-bold">
            {" "}
            4 upcoming sessions and 2 requests
          </span>
        </p>
      </div>

      <div className="upcoming-session-cards-container">
        <p className="main-text">Upcoming sessions</p>
        <CardsContainer />
      </div>

      <div className="matching-mentors-section">
        <h3 className="top-matching-mentors-text">
          Top mentors that match with{" "}
          <span style={{ color: " #6C63FF" }}>you</span>
        </h3>
        <div className="mentorsCards-container">
          <MentorCardsContainer />
        </div>
      </div>

      <div className="meet-mentors-section">
        <h3 className="meet-mentors-text">Mentors you should meet </h3>
        <div className="mentorsCards-container">
          <MentorCardsContainer browseMentorsCard={true} />
        </div>
      </div>
      <div className="bigger-text">
        <p className="emoji-text">Made with love for india.</p>
        <img className="w-[200px] h-[200px]" src={emoji} />
      </div>
    </div>
  );
}
