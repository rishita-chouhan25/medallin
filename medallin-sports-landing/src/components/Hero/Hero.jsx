import React, { useState, useEffect } from "react";
import "./Hero.css";
import travel from "../../assets/travel.jpeg";
import worldcup from "../../assets/worldcup.jpeg";
import global from "../../assets/global.jpg"
import brands from "../../assets/brands.png"
import { ArrowRight, Play, Ticket, Users } from "lucide-react";

// Left Card Data: Sports & Talent Management
const leftCardData = [
  {
    title: "Athlete Management",
    desc: "Career management, brand endorsements, and PR for elite athletes across sports.",
    image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "TALENT & ROSTER"
  },
  {
    title: "Brand Endorsements",
    desc: "Connecting iconic athletes like Ravindra Jadeja & Manu Bhaker with top brands.",
    image: brands,
    tag: "SPONSORSHIP"
  },
  {
    title: "Global Exposure",
    desc: "Strategic social media management and media representation worldwide.",
    image: global,
    tag: "PR & MEDIA"
  }
];

// Right Card Data: Events & Fan Experiences
const rightCardData = [
  {
    title: "T20 World Cup 2026",
    desc: "Official ICC Travel Agent offering match tickets bundled with travel & tours.",
    image: worldcup,
    tag: "FLAGSHIP CAMPAIGN"
  },
  {
    title: "VIP Fan Experiences",
    desc: "Stadium walks, player meet-and-greets, dressing room access & signed merchandise.",
    image: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?q=80&w=800&auto=format&fit=crop",
    tag: "EXCLUSIVE ACCESS"
  },
  {
    title: "Mega Sports Events",
    desc: "Seamless ticketing & tour packages for FIFA, Wimbledon, and Formula One.",
    image: travel,
    tag: "GLOBAL EVENTS"
  }
];

export default function Hero() {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  // Auto-switch card content every 4.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setLeftIndex((prev) => (prev + 1) % leftCardData.length);
      setRightIndex((prev) => (prev + 1) % rightCardData.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const currentLeft = leftCardData[leftIndex];
  const currentRight = rightCardData[rightIndex];

  return (
    <section className="hero">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
      >
        <source src="/hero-20sec.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Main Container */}
      <div className="hero-container">

        {/* LEFT CARD - Athlete & Talent Focus */}
        <div className="hero-card left-card">
          {/* Stacked Images for Smooth Cross-Fade */}
          <div className="card-img-wrapper">
            {leftCardData.map((item, index) => (
              <img
                key={index}
                src={item.image}
                alt={item.title}
                className={`card-img ${index === leftIndex ? "active" : ""}`}
              />
            ))}
          </div>
          
          <div key={leftIndex} className="card-content text-fade-in">
            <span className="card-badge left-badge">
              <Users size={12} /> {currentLeft.tag}
            </span>

            <h2>{currentLeft.title}</h2>
            <p>{currentLeft.desc}</p>

            <button>
              Explore Roster →
            </button>
          </div>
        </div>

        {/* CENTER HERO SECTION */}
        <div className="hero-center">
          <span className="tag">
            SPORTS • TRAVEL • ENTERTAINMENT
          </span>

          <h1>
            Connecting Fans,
            <br />
            <span>Athletes & Brands</span>
          </h1>

          <p>
            Official ICC Travel Agent for T20 World Cup 2026. Delivering 
            world-class event management, athlete representation, and brand activations.
          </p>

          <div className="hero-buttons">
            <button className="primary">
              Book WC 2026 Packages
              <ArrowRight size={18}/>
            </button>

            <button className="secondary">
              <Play size={18}/>
              Watch Highlights
            </button>
          </div>
        </div>

        {/* RIGHT CARD - Events & Hospitality Focus */}
        <div className="hero-card right-card">
          {/* Stacked Images for Smooth Cross-Fade */}
          <div className="card-img-wrapper">
            {rightCardData.map((item, index) => (
              <img
                key={index}
                src={item.image}
                alt={item.title}
                className={`card-img ${index === rightIndex ? "active" : ""}`}
              />
            ))}
          </div>

          <div key={rightIndex} className="card-content text-fade-in">
            <span className="card-badge right-badge">
              <Ticket size={12} /> {currentRight.tag}
            </span>

            <h2>{currentRight.title}</h2>
            <p>{currentRight.desc}</p>

            <button>
              Get Tickets →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}