import { useState, useEffect } from "react";
import "./Stats.css";
import { ChevronRight, ChevronLeft, Sparkles, Trophy, Calendar, Compass, ShieldCheck, Video } from "lucide-react";

const fixtureSteps = [
  {
    id: "01",
    phase: "PHASE 1",
    tag: "HOME LEG",
    title: "DISCOVERY & STRATEGY",
    subtitle: "Setting the Championship Goal",
    desc: "We analyze your sports property, target demographics, and commercial rights to build an unbeatable strategy.",
    stats: { metric: "100%", label: "Target Precision" },
    icon: <Compass size={24} />,
    image: "https://images.pexels.com/photos/269948/pexels-photo-269948.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    id: "02",
    phase: "PHASE 2",
    tag: "PRE-SEASON",
    title: "PROGRAM & EXPERIENCE DESIGN",
    subtitle: "Custom VIP & Activation Blueprints",
    desc: "Curating hospitality passes, venue branding, and high-impact fan engagement drives tailored to brand targets.",
    stats: { metric: "50+", label: "Activation Models" },
    icon: <Trophy size={24} />,
    image: "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    id: "03",
    phase: "PHASE 3",
    tag: "MATCH DAY",
    title: "STADIUM & EVENT EXECUTION",
    subtitle: "Flawless Live Ground Operations",
    desc: "Seamless execution across stadium gates, VIP lounges, security access, player meet-and-greets, and logistics.",
    stats: { metric: "100K+", label: "Fans Managed" },
    icon: <ShieldCheck size={24} />,
    image: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    id: "04",
    phase: "PHASE 4",
    tag: "EXTRA TIME",
    title: "MEDIA & BROADCAST AMPLIFICATION",
    subtitle: "Global Screen Reach",
    desc: "Creating viral broadcast moments, digital storytelling, player PR amplification, and live commentary tracking.",
    stats: { metric: "10M+", label: "Impressions" },
    icon: <Video size={24} />,
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    id: "05",
    phase: "PHASE 5",
    tag: "FULL TIME",
    title: "ANALYTICS & RENEWAL",
    subtitle: "Post-Match Performance Metrics",
    desc: "Comprehensive ROI reporting, sponsor valuation insights, and immediate renewal plans for the next season.",
    stats: { metric: "3.5x", label: "Avg Brand ROI" },
    icon: <Calendar size={24} />,
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
];

export default function Stats() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide loop
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % fixtureSteps.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % fixtureSteps.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + fixtureSteps.length) % fixtureSteps.length);
  };

  const currentStep = fixtureSteps[activeIndex];

  return (
    <section className="fixture-section">
      <div className="fixture-glow-1"></div>
      <div className="fixture-glow-2"></div>

      <div className="fixture-container">
        {/* Header */}
        <div className="fixture-header">
          <div className="header-badge">
            <Sparkles size={14} /> HOW AN ENGAGEMENT RUNS
          </div>
          <h2>THE FIXTURE LIST</h2>
          <p>
            We manage your partnership like a championship tournament — structured, high-energy, and built for win after win.
          </p>
        </div>

        {/* Dashboard Showcase Card */}
        <div className="fixture-dashboard">
          {/* Main Visual Screen with Smooth Cross-Fade */}
          <div className="dashboard-media">
            {fixtureSteps.map((step, index) => (
              <img
                key={step.id}
                src={step.image}
                alt={step.title}
                className={`media-bg ${index === activeIndex ? "active" : ""}`}
              />
            ))}

            <div className="media-overlay"></div>

            <div className="media-tag">
              <span className="live-dot"></span> {currentStep.tag}
            </div>

            <div className="media-metric-card">
              <h3>{currentStep.stats.metric}</h3>
              <p>{currentStep.stats.label}</p>
            </div>
          </div>

          {/* Details Panel */}
          <div className="dashboard-content">
            <div className="content-meta">
              <span className="phase-badge">{currentStep.phase}</span>
              <span className="step-number">FIXTURE {currentStep.id} / 05</span>
            </div>

            <div className="icon-wrapper">{currentStep.icon}</div>

            {/* Smooth Animated Text Container */}
            <div key={currentStep.id} className="text-fade-animation">
              <h3 className="content-title">{currentStep.title}</h3>
              <h4 className="content-subtitle">{currentStep.subtitle}</h4>
              <p className="content-desc">{currentStep.desc}</p>
            </div>

            {/* Navigation Controls */}
            <div className="fixture-controls">
              

              <div className="dots-indicator">
                {fixtureSteps.map((_, idx) => (
                  <span
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`dot ${activeIndex === idx ? "dot-active" : ""}`}
                  ></span>
                ))}
              </div>

              
            </div>
          </div>
        </div>

        {/* Bottom Quick-Switch Bar */}
        <div className="fixture-cards-grid">
          {fixtureSteps.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`quick-card ${activeIndex === idx ? "card-active" : ""}`}
            >
              <div className="q-head">
                <span>{item.id}</span>
                <small>{item.tag}</small>
              </div>
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}