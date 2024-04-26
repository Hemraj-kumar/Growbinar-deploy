import React from "react";
import "./index.css";
import grow_image from "../../assets/images/Grow_logo_short.png";
import fb from "../../assets/images/facebok.png";
import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";

export default function Footer() {
  return (
    <div>
      <div className="grid grid-cols-5 mt-[100px] gap-4">
        <div className="flex w-[250px] items-start">
          <img
            src={grow_image}
            alt="Grow_logo_full"
            className=" w-[192px] h-[192px] ml-3"
          />
        </div>
        <div>
          <div className="flex flex-col space-y-3">
            <p className="footer-heading">Platform</p>
            <p className="footer-data">Find my mentor</p>
            <p className="footer-data">What we do</p>
            <p className="footer-data">Testimonial</p>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <p className="footer-heading">Company </p>
          <p className="footer-data">About</p>
          <p className="footer-data">Become a mentor </p>
          <p className="footer-data">Careers</p>
          <p className="footer-data">Contact</p>
        </div>
        <div className="flex flex-col space-y-3">
          <p className="footer-heading">Resources</p>
          <p className="footer-data">Blog</p>
          <p className="footer-data">Help Center</p>
          <p className="footer-data">Support</p>
        </div>
        <div className="flex flex-col space-y-6 mr-4 mb-2">
          <div className="flex w-[256px] h-[56px] items-center justify-center gap-4">
            <img src={fb} alt="facebook" />
            <p className="footer-data">Follow us on Facebook</p>
          </div>
          <div className="flex w-[256px] h-[56px] items-center justify-center gap-4  ">
            <img src={instagram} alt="instagram" />
            <p className="footer-data">Follow us on Facebook</p>
          </div>
          <div className="flex w-[256px] h-[56px] items-center justify-center gap-4">
            <img src={linkedin} alt="linkedin" />
            <p className="footer-data">Follow us on Facebook</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center mt-3 mr-3">
        <p className="text-[#646A69] text-[12px] font-thin font-CircularStdMedium leading-5 ">
          © 2024 Growbinar. All rights reserved.
        </p>
      </div>
    </div>
  );
}
