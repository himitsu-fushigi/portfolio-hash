import React from "react";
import "./style.css";

import Marquee from "react-fast-marquee";

export default function Topbar() {
  return (
    <div className="topbar">
      <Marquee gradient={false} loop={0} pauseOnHover={true} speed={35} style={{textAlign: "center"}}>
        💼 Vice President of Operations by Profession @Hash Technologies, 🎓 Web Dev & Blockchain Researcher by Enthusiasm, 📸 Bike Rider & Landscape Photographer by Hobby.
      </Marquee>
    </div>
  );
}
