import React, { useState } from "react";
import LandingPageHeader from "../../components/LandingPageHeader";
import MenteeLandingPage from "../../pages/MenteeLandingPage";
import "./index.css";

function LandingPageLayout() {
  const [landingState, landingSetState] = useState<string>("menteeLanding");
  return (
    <div>
      <div className="main-wrapper">
        <LandingPageHeader onHeroChange={landingSetState} />
      </div>
      <div>
        <MenteeLandingPage hero={landingState} />
      </div>
    </div>
  );
}

export default LandingPageLayout;
