import "./index.css"
import mentee from "../../assets/images/mentee.png"
import clock from "../../assets/images/clock.svg"
import rightarrow from "../../assets/images/rightArrow.svg"
import MenteeDetails from "../../pages/MenteeDetails"

interface Props{
   tabType:string
   changeBookingsTab:(bookingsTabType: string) => void;
}
interface constData{
    [key:string]:string;
}

export default function Bookings({tabType,changeBookingsTab}:Props){
    const data:constData={
        "mentee_designtion":"Student",
        "Unversity":"IDC",
        "mentoring_person":"Jackson",
        "allotted_time":"DEC 12, 8:00PM"
    }

    return(
        <div>
            <div  className="w-[288px] h-[56px] ">
                <p className="text-[#263238] text-center text-[32px] font-bold not-italic leading-9">
                    Discover Bookings
                </p>
                <div className="w-[633px] h-[56px]">
                    <p className="text-[#464646] text-center text-[18px] leading-9 font-medium not-italic">
                        The session timings are following your local timezone <span className="font-bold">Asia/Calcutta </span><span className="text-gbpurple">change</span></p>
                </div>
                
                {/*bookings tab -- 1:1 , completed, request pending */}
                <div className="bookings-tab-container">
                    <button className="h-[48px] w-[137px] p-2 text-[#130F26] text-[16px] text-center font-medium not-italic leading-9 focus:border-black border-b-2 border-transparent translate-all"  onClick={()=>{changeBookingsTab('oneOnOne')}}>1:1 Booking</button>
                    <button className="h-[48px] w-[137px] p-2 text-[#130F26] text-[16px] text-center font-medium not-italic leading-9 focus:border-black border-b-2 border-transparent translate-all"  onClick={()=>{changeBookingsTab('completed')}}>Completed</button>
                    <button className="h-[56px] w-[186px] p-2 text-[#130F26] text-[16px] text-center font-medium not-italic leading-9 focus:border-black border-b-2 border-transparent translate-all"  onClick={()=>{changeBookingsTab('requestPending')}}>Request Pending</button>
                </div>

                {/*mentee-profile-info */}
                <div className="h-[222px] w-[800px] border-[0.5px] border-[#D9D9D9] rounded-lg mt-[20px] flex-shrink-0">
                   <div className="details-with-main-container">
                        
                        <div className="flex flex-shrink-0 gap-3 p-2">   
                            <img className="h-[137px] w-[137px] flex-shrink-0 rounded" src={mentee} alt="mentee"/>
                            <div className="flex flex-col">
                                <p className="text-[#455A64] text-[15px] font-medium leading-6 not-italic ">Mentorship Session with <span className="text-txtPurple">{data.mentoring_person}</span></p>
                                <p className="text-[#636B78] text-[15px] font-medium leading-6 not-italic ">{data.mentee_designtion} <span className="text-[#A1A6AD]">at </span>{data.Unversity} </p>
                                <div className="inline-flex gap-2 items-center justify-normal mt-auto">
                                    <img className="h-[14px] w-[14px] flex-shrink-0" src={clock} alt="clock"/>
                                    <p className="text-[#464646] text-[13px] font-medium leading-5 not-italic">{data.allotted_time}</p>
                                </div>
                            
                            </div>
                        </div>
                        <div className="details-container">
                            <p className="text-[#636B78] text-[14px] font-medium leading-5 not-italic">Details</p>
                            <img className="cursor-pointer" src={rightarrow} alt="right-arrow" onClick={()=>{changeBookingsTab('details')}}/>
                        </div>
                    </div>
                    <div className="flex gap-2 p-[10px]" >
                        {
                            tabType === 'oneOnOne'?
                            (
                                <>
                                    <button className="h-[50px] w-[205px] p-[10px] text-[#F9F9FA] bg-gbpurple text-[18px] text-center font-medium not-italic leading-4 rounded-lg ">Start</button>
                                    <button className="h-[50px] w-[205px] p-[10px] text-[#F6291C] bg-[#F9F9FA] text-[18px] text-center font-medium not-italic leading-4 border border-[#D1D4D6] rounded-lg ">Cancel</button>  
                                </>
                            )
                        :
                            tabType === 'requestPending'?
                            (    
                                <>
                                    <button className="h-[50px] w-[205px] p-[10px] text-txtPurple text-[18px] text-center font-medium not-italic leading-4 rounded-lg border border-[#DBDDDF]">Accept Request</button>
                                    <button className="h-[50px] w-[205px] p-[10px] text-[#F6291C] bg-[#F9F9FA] text-[18px] text-center font-medium not-italic leading-4 border border-[#D1D4D6] rounded-lg ">Cancel</button>  
                                </>
                            )
                        :
                            ''  
                        }
                        </div>
                </div>
            </div>
        </div>  
    );
}