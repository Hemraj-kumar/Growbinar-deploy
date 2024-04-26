import testdata from "./testdata";
import "./index.css";
import arrow from "../../assets/images/mentor_arrow.png";
import quote from "../../assets/images/quote_icon.png";
export default function TestmonialContainer() {
  return (
    <div className="flex items-center justify-center space-x-5 p-2">
      {/* main content section  */}
      {testdata.map((value, index) => (
        <div className="flex flex-col w-[442px] h-[425px] rounded-3xl flex-shrink-0 border border-gbpurple items-start justify-start p-[30px]">
          <div className="flex items-center justify-center space-x-5">
            <img
              src={testdata[index].profilepic}
              alt="test_image"
              className="w-[60px] h-[60px]"
            />
            <div className="flex flex-col space-y-2">
              <div className="w-auto h-[22px] font-CircularStdMedium text-[16px] font-medium ">
                {testdata[index].user_name}
              </div>
              <div className="font-CircularStdMedium font-medium text-[14px] w-[58px] h-[19px] text-[#9F9F9F]">
                {testdata[index].role}
              </div>
            </div>
          </div>

          {/* block quote section  */}
          <div className="mt-2">
            <img src={quote} alt="quote icon" />
            <div className="w-[248px] h-[95px]">
              <p className="test-content">{testdata[index].test_content}</p>
            </div>
          </div>

          {/* </blockquote> */}

          {/* mentor arrow image */}
          <div className="mentor_arrow">
            <img src={arrow} alt="mentor_arrow" />
          </div>

          {/* mentor name section  */}
          <div className="w-[349px] h-[72px] flex-shrink-0 rounded-[211px] bg-gbpurple">
            <div className="flex items-center justify-start space-x-3">
              <img src={testdata[index].mentorPic} alt="test_mentor_profile" />
              <div className="flex flex-col ">
                <div className="w-[83px] h-[24px] font-CircularStdMedium text-[16px] font-medium text-[#fff]">
                  {testdata[index].mentorName}
                </div>
                <div className="font-CircularStdMedium font-medium text-[16px] w-auto h-[24px] text-[#fff]">
                  {testdata[index].mentorRole}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
