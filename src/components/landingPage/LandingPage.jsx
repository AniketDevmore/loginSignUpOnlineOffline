import React from "react";
import welcome from "../../../public/images/welcome.jpg";

const LandingPage = () => {
  return (
    <div>
      <div>
        <h1>Home Page</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={welcome} alt="welcome" />
      </div>
    </div>
  );
};

export default LandingPage;
