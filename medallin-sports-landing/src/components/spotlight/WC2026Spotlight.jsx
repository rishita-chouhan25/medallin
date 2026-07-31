import React, { useState } from "react";
import "./WC2026Spotlight.css";
import { 
  Trophy, 
  MapPin, 
  Calendar, 
  Ticket, 
  Plane, 
  Hotel, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  ChevronRight,
  Flame
} from "lucide-react";

const fixtureData = [
  {
    id: 1,
    team1: "INDIA",
    flag1: "🇮🇳",
    team2: "PAKISTAN",
    flag2: "🇵🇰",
    date: "OCT 24, 2026",
    venue: "Narendra Modi Stadium, Ahmedabad",
    status: "HIGH DEMAND",
    tag: "BLOCKBUSTER"
  },
  {
    id: 2,
    team1: "INDIA",
    flag1: "🇮🇳",
    team2: "USA",
    flag2: "🇺🇸",
    date: "OCT 18, 2026",
    venue: "Wankhede Stadium, Mumbai",
    status: "SELLING FAST",
    tag: "GROUP MATCH"
  },
  {
    id: 3,
    team1: "INDIA",
    flag1: "🇮🇳",
    team2: "NAMIBIA",
    flag2: "🇳🇦",
    date: "OCT 21, 2026",
    venue: "M. Chinnaswamy, Bengaluru",
    status: "AVAILABLE",
    tag: "GROUP MATCH"
  }
];

const packageInclusions = [
  {
    icon: <Ticket className="p-icon" />,
    title: "Official Match Tickets",
    desc: "Guaranteed prime category seating (VIP / Hospitality Lounge Access)."
  },
  {
    icon: <Plane className="p-icon" />,
    title: "End-to-End Travel",
    desc: "Seamless flights, luxury coach transfers, and local transit assistance."
  },
  {
    icon: <Hotel className="p-icon" />,
    title: "5-Star Stays",
    desc: "Premium luxury accommodation near match venues with breakfast."
  },
  {
    icon: <MapPin className="p-icon" />,
    title: "Curated Sightseeing",
    desc: "Exclusive city tours, cultural experiences & fan zone access."
  }
];

export default function WC2026Spotlight() {
  const [activeFixture, setActiveFixture] = useState(fixtureData[0]);

  return (
    <section className="wc-spotlight-section">
      {/* Background Animated Glow Spheres */}
      <div className="glow-sphere sphere-blue"></div>
      <div className="glow-sphere sphere-green"></div>

      <div className="wc-container">
        
        {/* TOP HEADER SECTION */}
        <div className="wc-header">
          <div className="wc-badge">
            <Trophy size={16} className="trophy-bounce" />
            <span>ICC T20 WORLD CUP 2026 SPOTLIGHT</span>
          </div>
          <h2>
            Experience The Passion Live <br />
            <span>Exclusive Travel & Ticket Bundles</span>
          </h2>
          <p>
            As an official ICC Travel Partner, we bring you VIP tickets, 
            premium accommodations, and unforgettable tourist experiences.
          </p>
        </div>

        {/* DYNAMIC CONTENT GRID */}
        <div className="wc-grid">
          
          {/* LEFT: FIXTURES INTERACTIVE TEASER */}
          <div className="wc-card fixture-card">
            <div className="card-header">
              <div className="live-pill">
                <Flame size={14} className="flame-icon" />
                <span>HOT FIXTURES</span>
              </div>
              <span className="subtitle">Select match to preview package</span>
            </div>

            {/* Fixtures List */}
            <div className="fixtures-list">
              {fixtureData.map((item) => (
                <div
                  key={item.id}
                  className={`fixture-item ${activeFixture.id === item.id ? "selected" : ""}`}
                  onClick={() => setActiveFixture(item)}
                >
                  <div className="match-tag-pill">{item.tag}</div>
                  
                  <div className="teams-vs">
                    <div className="team">
                      <span className="flag">{item.flag1}</span>
                      <span className="team-name">{item.team1}</span>
                    </div>
                    <span className="vs">VS</span>
                    <div className="team">
                      <span className="flag">{item.flag2}</span>
                      <span className="team-name">{item.team2}</span>
                    </div>
                  </div>

                  <div className="match-meta">
                    <span><Calendar size={12} /> {item.date}</span>
                    <span><MapPin size={12} /> {item.venue.split(",")[0]}</span>
                  </div>

                  <ChevronRight className="arrow-indicator" size={18} />
                </div>
              ))}
            </div>

            {/* Selected Match Quick Details */}
            <div className="match-preview-box">
              <div className="preview-info">
                <small>SELECTED MATCH VENUE</small>
                <h4>{activeFixture.venue}</h4>
              </div>
              <div className="demand-status">
                <span className="status-dot"></span>
                {activeFixture.status}
              </div>
            </div>
          </div>

          {/* RIGHT: PACKAGE INCLUSIONS & CTA */}
          <div className="wc-card package-card">
            <div className="card-header">
              <span className="badge-gold"><Sparkles size={14} /> ALL-INCLUSIVE PASS</span>
              <h3>What's Inside Your Experience?</h3>
            </div>

            <div className="inclusions-grid">
              {packageInclusions.map((inc, i) => (
                <div key={i} className="inc-item">
                  <div className="icon-box">{inc.icon}</div>
                  <div>
                    <h4>{inc.title}</h4>
                    <p>{inc.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA SECTION */}
            <div className="cta-banner">
              <div className="cta-text">
                <ShieldCheck size={20} className="shield-icon" />
                <div>
                  <strong>Official Guarantee</strong>
                  <p>100% Genuine Tickets & Verified Hospitality</p>
                </div>
              </div>

              <button className="enquire-btn">
                <span>Enquire Now For Custom Package</span>
                <ArrowRight size={18} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}