import "./Programs.css";
import { ArrowRight } from "lucide-react";

import player1 from "../../assets/left.png";
import player2 from "../../assets/right.png";
import player3 from "../../assets/img2.jpeg";
import player4 from "../../assets/img1.jpeg";
import player5 from "../../assets/right.png";

const athletes = [
  {
    title: "RAVINDRA JADEJA",
    text: "Cricket",
  },
  {
    title: "HARMANPREET KAUR",
    text: "Cricket",
  },
  {
    title: "HANUMA VIHARI",
    text: "Cricket",
  },
  {
    title: "MANU BHAKER",
    text: "Shooting",
  },
];

export default function Program() {
  return (
    <section className="program-section">
      {/* Background */}
      <div className="program-grid"></div>

      <div className="program-glow glow-one"></div>
      <div className="program-glow glow-two"></div>
      <div className="program-glow glow-three"></div>

      <div className="program-container">
        {/* LEFT CONTENT */}
        <div className="program-left">
          <span className="program-tag">TALENT ROSTER</span>

          <h2 className="program-title">
            ATHLETES WE
            <br />
            WORK WITH
          </h2>

          <p className="program-desc">
            Medallin manages brand building and endorsements for athletes across
            cricket, shooting, mountaineering, track and field, skiing, and
            motorsport.
          </p>

          <div className="program-list">
            {athletes.map((item, index) => (
              <div className="program-card" key={index}>
                <div className="program-dot"></div>

                <div className="program-info">
                  <h4>{item.title}</h4>

                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="program-btn">
            View All Athletes
            <ArrowRight size={18} />
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="program-right">
          {/* Main Image */}
          <div className="main-player">
            <img src={player1} alt="Main Player" />
          </div>

          {/* Floating Images */}
          <div className="floating-img card-one">
            <img src={player2} alt="" />
          </div>

          <div className="floating-img card-two">
            <img src={player3} alt="" />
          </div>

          <div className="floating-img card-three">
            <img src={player4} alt="" />
          </div>

          <div className="floating-img card-four">
            <img src={player5} alt="" />
          </div>

          {/* Animated Rings */}
          <div className="circle-ring"></div>
          <div className="circle-ring second-ring"></div>

          {/* Floating Glow Balls */}
          <span className="ball one"></span>
          <span className="ball two"></span>
          <span className="ball three"></span>

          {/* Floating Stats */}
          <div className="stat-box stat-one">
            <h4>Cricket</h4>
            <span>Athlete Management</span>
          </div>

          <div className="stat-box stat-two">
            <h4>Shooting</h4>
            <span>Brand Endorsements</span>
          </div>

          <div className="stat-box stat-three">
            <h4>Elite</h4>
            <span>Talent Roster</span>
          </div>
        </div>
      </div>
    </section>
  );
}