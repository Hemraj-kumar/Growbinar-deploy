import CardsContainer from "../../containers/CardsContainer";
import "./index.css";
import Leaf from "../../assets/images/Leaf.png";
import chart from "../../assets/images/graph.png";
import Calender from "react-calendar";
import "react-calendar/dist/Calendar.css";
import emoji from "../../assets/images/love-emoji.png";

export default function MentorDashboard() {
  return (
    <div className="page-wrapper">
      <div className="welcome-container">
        <p className="welcome-text">Welcome back, Grow with Growbinar.</p>
        <p>
          You have
          <span className="text-gbpurple">
            {" "}
            4 upcoming sessions and 2 requests
          </span>
        </p>
      </div>

      <div className="welcome-container">
        <p className="main-text">Upcoming sessions</p>
      </div>
      {/* //upcoming sessions cards -- make it responsive */}
      <div>
        <CardsContainer />
      </div>
      {/* horizontal divider */}
      <div className="horizontal-divider">
        <div className="border border-slate-200 divide-y-2 w-full"></div>
      </div>

      <div className="flex flex-shrink-0 gap-2 mb-6">
        <p className="text-[#464646] text-left text-[26px] font-normal">
          Impact at a glance
        </p>
        <img className="w-[41px] h-[41px]" src={Leaf} alt="leaf" />
      </div>

      {/*graph and container*/}
      <div className="graph-date-container ">
        <div className="w-[507px] h-[574px] rounded-lg bg-[#F9F9F9]">
          <p className="progress-text">Progress Chart</p>
          <div className="text-left ml-[30px]">
            <p className="text-[14px] font-normal">MINUTES ATTENDED</p>
            <p className="font-normal text-gbpurple">this month</p>

            {/*progress chart container */}
          </div>
          <div className="chart-box">
            <img className="progress-chart" src={chart} alt="progress-chart" />
          </div>
        </div>

        {/* mentor calendar section */}
        <div className="flex-shrink-0 ">
          <div className="w-[600px] h-auto p-2 flex gap-[20px] bg-[#F9F9F9]">
            <p className="text-[#464646] text-[16px] font-medium">
              Know your day
            </p>
            <Calender className="react-calendar" />
          </div>
        </div>
      </div>

      {/*Made with love from india text */}
      <div className="bigger-text">
        <p className="emoji-text">Made with love for india.</p>
        <img className="w-[200px] h-[200px]" src={emoji} />
      </div>
    </div>
  );
}
