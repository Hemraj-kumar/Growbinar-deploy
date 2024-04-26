import Cookies from "js-cookie";
import "../CardsContainer/index.css"
interface CardProps{
    profileImage:string,
    title:string,
    mentor:string,
    timing:string,
}
export default function Cards({profileImage,title,mentor,timing}:CardProps){
    /* Role must be fetched from cookies, designation & organization must come from backend response */
    const role = Cookies.get('role');
    const designation = 'Product Designer';
    const organization = 'zuddi';
    const session_type = '1-1';
    return(
        <div>
            <div>  
                <div className="flex flex-row items-center justify-between">
                <img className="card-image" src={profileImage} alt="profile image "/>
                <div className="flex flex-col ml-3 mt-[9.5px]">
                    <p className="card-text">{title}</p>
                    {role ==='mentor'?<p className="text-gbpurple font-normal text-[14px]">{mentor}</p> 
                 :<p className="mentor-designation">{designation} <span className="at-text"> at </span>  {organization}</p>}
                    </div> 
                    <span className="session-type-tag">{session_type}</span> 
                </div>
            </div>
            <div className="flex flex-row flex-shrink-0 justify-between items-center">
                <p className="timing-text">{timing}</p>
                <button className="start-button">{role === 'mentor'?'Start':'Join'}</button>
            </div>
        </div>
    );
}