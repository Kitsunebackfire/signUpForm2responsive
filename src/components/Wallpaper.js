import React from "react";
import "./styling/Wallpaper.css";
function Wallpaper() {
  return (
    <div className="wallpaper">
      <div className="wallpaper__messageContainer">
        <div className="wallpaper__transparentBox">
          <div className="wallpaper__message">Join Now</div>
        </div>
      </div>
      <div className="wallpaper__creditContainer">
        <div className="wallpaper__credit">
          <span>Art by </span>

          <a
            className="wallpaper__creditLink"
            href="https://wallpapercave.com/u/sumy1456"
          >
            Animelover
          </a>
        </div>
      </div>
    </div>
  );
}

export default Wallpaper;
