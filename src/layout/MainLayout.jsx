import React from "react";
import Navbar from "../components/Navbar/Navbar";

const MainLyout = ({children}) => {
    return(
        <main className="uk-main">
        <Navbar />
        <div className="uk-section">
          <div className="uk-container">
            {children}
          </div>
        </div>
      </main>
    )
}

export default MainLyout;