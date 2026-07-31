import React from "react";
import "./LiveTicker.css";
import { Radio, Calendar, Trophy, Zap, TrendingUp, Sparkles } from "lucide-react";

const tickerItems = [
  {
    type: "live",
    icon: <Radio size={14} className="ticker-icon live-pulse" />,
    badge: "LIVE NOW",
    title: "T20 WC Qualifier",
    desc: "IND vs PAK — Match Day Pass Available",
  },
  {
    type: "upcoming",
    icon: <Calendar size={14} className="ticker-icon" />,
    badge: "KEY DATE",
    title: "15 AUG 2026",
    desc: "VIP Hospitality Booking Opens for Finals",
  },
  {
    type: "stat",
    icon: <TrendingUp size={14} className="ticker-icon" />,
    badge: "MILESTONE",
    title: "50,000+ Tickets",
    desc: "Sold in Exclusive Pre-sale Drive",
  },
  {
    type: "roster",
    icon: <Zap size={14} className="ticker-icon" />,
    badge: "TALENT UPDATE",
    title: "Ravindra Jadeja",
    desc: "New Brand Endorsement Deal Signed",
  },
  {
    type: "event",
    icon: <Trophy size={14} className="ticker-icon" />,
    badge: "FEATURED",
    title: "Wimbledon 2026",
    desc: "Luxury Travel Packages Live Now",
  },
];

export default function LiveTicker() {
  // Infinite smooth marquee ke liye items ko double kar rahe hain
  const infiniteItems = [...tickerItems, ...tickerItems];

  return (
    <div className="ticker-wrapper">
      {/* Fixed Left Header Tag */}
      <div className="ticker-header-tag">
        <Sparkles size={14} className="sparkle-icon" />
        <span>LIVE UPDATES</span>
      </div>

      {/* Marquee Track */}
      <div className="ticker-track-container">
        <div className="ticker-track">
          {infiniteItems.map((item, index) => (
            <div key={index} className={`ticker-item ${item.type}`}>
              <div className="ticker-badge">
                {item.icon}
                <span>{item.badge}</span>
              </div>
              <span className="ticker-title">{item.title}</span>
              <span className="ticker-divider">•</span>
              <span className="ticker-desc">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}