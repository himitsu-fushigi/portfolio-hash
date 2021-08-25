import React, { Suspense } from "react";
import User from "./Assets/profile.webp";
import "./App.css";
import { Helmet } from "react-helmet";

// components
const Topbar = React.lazy(() => import("./Components/Topbar/Topbar"));
const Footer = React.lazy(() => import("./Components/Footer/Footer"));

export default function App() {
  return (
    <div className="app">
      <Helmet>
        <title>
          Laxman Rai | 💼 Vice President of Operations by Profession @Hash
          Technologies | 🎓 Web Dev & Blockchain Researcher by Enthusiasm | 📸
          Bike Rider & Landscape Photographer by Hobby.
        </title>
      </Helmet>

      <Suspense fallback={<div>Topbar Loading...</div>}>
        <Topbar />
      </Suspense>

      <div className="title">
        <img src={User} alt="Laxman Rai" />

        <h1>Laxman Rai</h1>
        <p>
          🎓 3rd Semester, BSc. CSIT - Nagarjuna College of IT
          <br />
          💼 VP Operations - Hash Technologies
        </p>
      </div>

      <h1 className="social-links-title">
        Keep updated with my{" "}
        <span style={{ borderBottom: "4px solid #2ecc71" }}>latest works</span>.
        😎
      </h1>
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
            href="https://www.instagram.com/lex__iar/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-instagram-line"></i>
            <p>Instagram</p>
          </a>
        </div>
        <div>
          <a
            href="https://github.com/himitsu-fushigi/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-github-fill"></i>
            <p>Github</p>
          </a>
        </div>
        <div>
          <a
            href="https://www.behance.net/laxmanrai3"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-behance-fill"></i>
            <p>Behance</p>
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/laxman-rai-b8410521b/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-linkedin-fill"></i>
            <p>LinkedIn</p>
          </a>
        </div>
        <div>
          <a
            href="https://twitter.com/LaxmanR65635217"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-twitter-line"></i>
            <p>Twitter</p>
          </a>
        </div>
        <div>
          <a
            href="https://laxmanrai.medium.com/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-medium-line"></i>
            <p>Medium</p>
          </a>
        </div>
      </div>

      <Suspense fallback={<div>Footer Loading...</div>}>
        <Footer />
      </Suspense>
      <Footer />
    </div>
  );
}
