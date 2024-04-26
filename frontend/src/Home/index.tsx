import SuccessView from "./SuccessView";

import "./Home.css";
import DashBoard from "./DashBoard";
export default function Home() {
    
    // const sessionContext = useSessionContext();

    // if (sessionContext.loading === true) {
    //     return null;
    // }

    return (
        <div className="fill" id="home-container">
            <DashBoard />
        </div>
    );
}
