import React from "react";
import User from "./Assets/profile.JPG";
import "./App.css";
import Topbar from "./Components/Topbar/Topbar";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <div className="app">
        <Topbar />

      <div className="title">
        <img src={User} alt="Laxman Rai" />

        <h1>Laxman Rai</h1>
        <p>
          🎓 3rd Semester, BSc. CSIT - Nagarjuna College of IT
          <br />
          💼 VP Operations - Hash Technologies
        </p>
      </div>

        <h1 className="social-links-title">Keep updated with my <span style={{borderBottom: "4px solid #2ecc71"}}>latest works</span>. 😎</h1>
      <div className="social-links">
        <div>
          <a
            href="https://www.facebook.com/laxmanrai.26"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-facebook-box-fill"></i>
            <p>Facebook</p>
          </a>
        </div>
        <div>
          <a
            href="https://www.facebook.com/laxmanrai.26"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-instagram-line"></i>
            <p>Instagram</p>
          </a>
        </div>
        <div>
          <a
            href="https://www.facebook.com/laxmanrai.26"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-github-fill"></i>
            <p>Github</p>
          </a>
        </div>
        <div>
          <a
            href="https://www.facebook.com/laxmanrai.26"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-behance-fill"></i>
            <p>Behance</p>
          </a>
        </div>
        <div>
          <a
            href="https://www.facebook.com/laxmanrai.26"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-linkedin-fill"></i>
            <p>LinkedIn</p>
          </a>
        </div>
        <div>
          <a
            href="https://www.facebook.com/laxmanrai.26"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-twitter-line"></i>
            <p>Twitter</p>
          </a>
        </div>
        <div>
          <a
            href="https://www.facebook.com/laxmanrai.26"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-medium-line"></i>
            <p>Medium</p>
          </a>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
