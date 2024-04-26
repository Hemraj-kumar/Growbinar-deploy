import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import {
  Routes,
  BrowserRouter as Router,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Layout from "./layouts/DashboardLayout";
import { useEffect, useState } from "react";
import ProtectedRoute from "./utils/protectedRoutes/protectedRoute";
import Login from "./pages/Login";
import Cookies from "js-cookie";
import Bookings from "./containers/Bookings";
import SideNavBar from "./components/SideNavBar";
import LandingPageLayout from "./layouts/LandingPageLayout";
function App() {
  Cookies.set("role", "mentee");
  const queryClient = new QueryClient();
  const [mainContent, setMainContent] = useState("MentorDashboard");
  //logout functionality
  //   useEffect(() => {
  //     const logout = () => {
  //       window.location.reload();
  //     };

  //     const logoutAll = new BroadcastChannel('logout');
  //     logoutAll.addEventListener('message', handleLogout);

  //     return () => {
  //       logoutAll.removeEventListener('message', handleLogout);
  //       logoutAll.close();
  //     };
  //   }, []);
  return (
    //         <div className="App app-container">
    //             <Router>
    //                 <div className="fill">
    //                     <Routes>
    //                         <Route
    //                             path="/"
    //                             element={
    //                                 /* This protects the "/" route so that it shows
    //                             <Home /> only if the user is logged in.
    //                             Else it redirects the user to "/auth" */
    //                                 // <SessionAuth>
    //                                     // <Home />
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path={"/login"} element={<Login />} />
          {/* <Route element={<ProtectedRoute />}>  */}
          <Route
            path={"/mentor"}
            element={<Layout Head={Header} role={"mentor"} />}
          />
          <Route
            path={"/mentee"}
            element={<Layout Head={Header} role={"mentee"} />}
          />
          <Route
            path={"/mentors/:userId/profile"}
            element={
              <Layout Head={Header} role={"mentee"} showMentorProfile={true} />
            }
          />
          {/* </Route> */}
          <Route
            path="*"
            element={<Navigate to={"/landing/mentee"} replace />}
          ></Route>
          <Route path="/landing/mentee" element={<LandingPageLayout />}></Route>
        </Routes>
      </Router>
    </QueryClientProvider>
    // <Layout Head={Header} Side={SideNavBar} Content={contents[mai nContent]} />
    //   </SessionAuth>
    //                             }
    //                         />
    //                     </Routes>
    //                 </div>
    //             </Router>
    //         </div>
  );
}

export default App;
