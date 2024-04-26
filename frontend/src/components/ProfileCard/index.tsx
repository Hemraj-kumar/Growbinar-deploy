import React from "react";
import avatar from "../../assets/images/profile.png";
import Popup from "reactjs-popup";
import support from "../../assets/images/support.svg";
import signout from "../../assets/images/sign-out-icon.svg";
import settings from "../../assets/images/settings.svg";
import booking from "../../assets/images/booking.svg";

export default function ProfileCard() {
  return (
    <div>
      <Popup
        trigger={
          <img className="cursor-pointer" src={avatar} alt="profile image" />
        }
        position="right center"
      >
        <div className="w-[368px] h-[391px] rounded-md shadow-md bg-[#fff]">
          <div className="flex items-center justify-start gap-[25px] p-3">
            <img src={avatar} className="h-[60px] w-[60px]" />
            <div>
              <p className="text-[#263238] text-[20px] not-italic font-medium leading-5">
                Ansh Mehra
              </p>
              <p className="text-[#3F3D4D] text-[14px] not-italic font-normal whitespace-nowrap">
                Product designer{" "}
                <span className="text-[#A1A6AD] text-[14px] not-italic font-normal">
                  at
                </span>{" "}
                Zuddi
              </p>
            </div>
          </div>
          <div className="mx-auto border border-[#D9D9D9] w-[300px] divide-y-2 h-[1px] "></div>
          <br />
          <div className="mx-[20px] flex flex-col gap-2">
            <div className="flex items-center justify-left gap-[15px]">
              <div className="inline-flex w-[44px] h-[44px] rounded-lg bg-[#ECEBFA] items-center justify-center cursor-pointer">
                <img src={booking} className="w-[24px] h-[24px]" />
              </div>
              <div>
                <p className="text-[#263238] text-[18px] not-italic font-medium">
                  My Bookings
                </p>
                <p className="text-[#636B78] text-[16px] not-italic font-normal">
                  View and manage all your bookings
                </p>
              </div>
            </div>
            <div className="flex gap-[15px]">
              <div className="inline-flex w-[44px] h-[44px] rounded-lg bg-[#ECEBFA] items-center justify-center cursor-pointer">
                <img src={support} className="w-[24px] h-[24px]" />
              </div>
              <p className="text-[#636B78] text-[18px]  not-italic font-medium leading-9 ">
                Support
              </p>
            </div>
            <div className="flex gap-[15px]">
              <div className="inline-flex w-[44px] h-[44px] rounded-lg bg-[#ECEBFA] items-center justify-center cursor-pointer">
                <img src={settings} className="w-[24px] h-[24px]" />
              </div>
              <p className="text-[#636B78] text-[18px]  not-italic font-medium leading-9 ">
                Settings
              </p>
            </div>
            <div className="flex gap-[15px]">
              <div className="inline-flex w-[44px] h-[44px] rounded-lg bg-[#ECEBFA] items-center justify-center cursor-pointer">
                <img src={signout} className="w-[24px] h-[24px]" />
              </div>
              <p className="text-[#636B78] text-[18px]  not-italic font-medium leading-9 ">
                Signout
              </p>
            </div>
          </div>
        </div>
      </Popup>
    </div>
  );
}
