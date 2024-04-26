import React from "react";
import home1 from "../../assets/images/home1.svg";
import booking from "../../assets/images/booking.svg";
import menu_dots from "../../assets/images/menu_dots.svg";
import avatar from "../../assets/images/profile.png";
import explorebw from "../../assets/images/explore-bw-icon.svg";
import exploreHover from "../../assets/images/explore-bw-icon.svg";
import exploreSelected from "../../assets/images/explore-selected-icon.svg";
import mentorsbw from "../../assets/images/mentors-bw-icon.svg";
import mentorsHover from "../../assets/images/mentors-bw-icon.svg";
import mentorsSelected from "../../assets/images/mentors-selected-icon.svg";
import Bookings from "../../containers/Bookings";
import "./index.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import ProfileCard from "../ProfileCard";
import { useNavigate } from "react-router-dom";
import support from "../../assets/images/support.svg";
import signout from "../../assets/images/sign-out-icon.svg";
import settings from "../../assets/images/settings.svg";

interface HomeIconProps {
  fillColor: string;
}
interface sideNavBarProps {
  role: String;
  changePage: (page: string) => void;
}

export default function SideNavBar({ role, changePage }: sideNavBarProps) {
  const navigate = useNavigate();

  const handleClick = (page: string) => {
    changePage(page);
  };
  return (
    <div className="ml-3 my-8 flex flex-col space-y-12 p-2 items-center justify-items-center  ">
      {role == "mentor" ? (
        <>
          <div className="flex flex-col items-center justify-center">
            <div className="hover:bg-hoverpurple hover-shadow-lg transition duration-300 p-2 rounded-md ">
              <img
                className="h-[24px] w-[24px] cursor-pointer"
                onClick={() => {
                  changePage("dashboard");
                }}
                src={home1}
                alt="homelogo"
              />
            </div>
            <p className="text-shadow hover:text-gbpurple text-[14px] font-bold ">
              Home
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="hover:bg-hoverpurple hover-shadow-lg transition duration-300 p-2 rounded-md">
              <img
                className="h-[24px] w-[24px] cursor-pointer"
                onClick={() => {
                  changePage("bookings");
                }}
                src={booking}
                alt="booking logo"
              />
            </div>
            <p className="text-shadow hover:text-gbpurple text-[14px] font-bold">
              Booking
            </p>
          </div>

          {/* should add onclik button for more tab  */}

          <div className="flex flex-col items-center justify-center">
            <div className="hover:bg-hoverpurple hover-shadow-lg transition duration-300 p-2 rounded-md">
              <div
                className="w-[24px] h-[24px] rounded-full inline-flex 
    items-center justify-center border-[1px] border-black cursor-pointer"
              >
                <img
                  className="w-[12px] h-[12px]"
                  src={menu_dots}
                  alt="moreMenu logo"
                />{" "}
                {/* onClick={()=>{changePage('bookings')}}*/}
              </div>
            </div>
            <p className="text-shadow hover:text-gbpurple text-[14px] font-bold">
              More
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="w-[53px] hover:bg-hoverpurple hover-shadow-lg transition duration-300 p-2 rounded-md">
              <ProfileCard />
            </div>
            <p className="text-shadow hover:text-gbpurple text-[14px] font-bold ">
              Me
            </p>
          </div>
        </>
      ) : (
        <>
          {/* need to change the onClick functions button name accordingly  */}
          <div
            className="flex flex-col items-center justify-center"
            onClick={() => {
              changePage("dashboard");
            }}
          >
            <div className="hover:bg-hoverpurple hover-shadow-lg transition duration-300 p-2 rounded-md ">
              <img
                className="h-[24px] w-[24px] cursor-pointer"
                src={home1}
                alt="homelogo"
              />{" "}
              {/* onClick={()=>{changePage('bookings')}}*/}
            </div>
            <p className="text-shadow hover:text-gbpurple text-[14px] font-bold ">
              Home
            </p>
          </div>

          <div
            className="flex flex-col items-center justify-center"
            onClick={() => {
              changePage("browseMentors");
            }}
          >
            <div className="hover:bg-hoverpurple hover-shadow-lg transition duration-300 p-2 rounded-md">
              <img
                className="h-[50px] w-[50px] cursor-pointer explore"
                src={explorebw}
                alt="booking logo "
              />{" "}
              {/* onClick={()=>{changePage('bookings')}}*/}
            </div>
            <p className="text-shadow hover:text-gbpurple text-[14px] font-bold">
              Explore
            </p>
          </div>

          <div
            className="flex flex-col items-center justify-center"
            onClick={() => {
              changePage("bookings");
            }}
          >
            <div className="hover:bg-hoverpurple hover-shadow-lg transition duration-300 p-2 rounded-md">
              <img
                className="h-[24px] w-[24px] cursor-pointer"
                src={booking}
                alt="booking logo "
              />
            </div>
            <p className="text-shadow hover:text-gbpurple text-[14px] font-bold">
              Booking
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="hover:bg-hoverpurple hover-shadow-lg transition duration-300 p-2 rounded-md">
              <div
                className="w-[24px] h-[24px] rounded-full inline-flex 
    items-center justify-center border-[1px] border-black cursor-pointer"
              >
                <img
                  className="w-[12px] h-[12px]"
                  src={menu_dots}
                  alt="moreMenu logo"
                />{" "}
                {/* onClick={()=>{changePage('bookings')}}*/}
              </div>
            </div>
            <p className="text-shadow hover:text-gbpurple text-[14px] font-bold">
              More
            </p>
          </div>

          <div
            className="flex flex-col items-center justify-center"
            onClick={() => {
              changePage("profile");
            }}
          >
            <div className="avatar w-[53px] hover:bg-hoverpurple hover-shadow-lg transition duration-300 p-2 rounded-md">
              <img
                className="cursor-pointer"
                src={avatar}
                alt="profile image"
              />
            </div>
            <p className="text-shadow hover:text-gbpurple text-[14px] font-bold">
              Me
            </p>
          </div>
        </>
      )}
    </div>
  );
}
