import React, { useState } from "react";
import "../DashboardLayout/index.css";
import SideNavBar from "../../components/SideNavBar";
import MenteeDashboard from "../../pages/MenteeDashboard/Dashboard";
import MentorDashboard from "../../pages/MentorDashboard/MentorDashboard";
import BrowseMentors from "../../containers/BrowseMentors/BrowseMentors";
import Bookings from "../../containers/Bookings";
import MentorProfile from "../../containers/MentorProfile";
import MenteeProfile from "../../pages/MenteeProfile";

interface MyProps {
  Head: React.ComponentType;
  role: String;
  showMentorProfile?: boolean;
}
interface Page {
  page: String;
}
interface pagesInterface {
  [key: string]: React.ReactNode;
}

const Layout = ({ Head, role, showMentorProfile }: MyProps) => {
  const [page, setPage] = useState<string>("dashboard");
  const [bookingsTabType, setBookingsTabType] = useState<string>("oneOnOne");
  const changeBookingsTab = (ele: string) => {
    setBookingsTabType(ele);
  };

  const mentorPages: pagesInterface = {
    dashboard: <MentorDashboard />,
    bookings: (
      <Bookings
        tabType={bookingsTabType}
        changeBookingsTab={changeBookingsTab}
      />
    ),

    // for mentee section  -- change according to the name and function
    // "homePage":<MenteeDashboard/>,
    // "explore":<ExploreMentors/>,
    // "mentorProfile":<MenteeProfile/>,
    // "moretab":<MoreTabSection/>,
  };
  const menteePages: pagesInterface = {
    dashboard: <MenteeDashboard />,
    bookings: (
      <Bookings
        tabType={bookingsTabType}
        changeBookingsTab={changeBookingsTab}
      />
    ),
    browseMentors: <BrowseMentors />,
    profile: <MenteeProfile />,
  };

  const changePage = (ele: string) => {
    setPage(ele);
  };

  return (
    <div className="layout-wrapper">
      {/* Sidebar */}

      {/* Main Content Area */}
      <div className="main-wrapper">
        <header className="header-class">
          <Head />
        </header>
        <div className="flex">
          <div className="sidebar">
            <SideNavBar role={role} changePage={changePage} />
          </div>
          {/* Page Content */}
          <div className="content-class">
            {role === "mentee" ? (
              showMentorProfile ? (
                <MentorProfile />
              ) : (
                menteePages[page]
              )
            ) : (
              mentorPages[page]
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
