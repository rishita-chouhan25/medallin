import { useEffect, useState, useRef } from "react";
import "./CallToAction.css";
import { ArrowRight } from "lucide-react";


// Aapne jo image di hai use apne assets folder me save karke yahan import karein:
import runnerImg from "../../assets/runner-neion.png"; 

export default function CallToAction() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startPoint = windowHeight;
      const endPoint = -rect.height;
      const currentPos = rect.top;

      let progress = (startPoint - currentPos) / (startPoint - endPoint);
      progress = Math.min(Math.max(progress, 0), 1);

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const runnerXPercent = scrollProgress * 85;

  return (
    <section className="run-banner" ref={sectionRef}>
      <div className="run-banner-glow-bg"></div>
      <div className="run-banner-speed-lines"></div>

      <div className="run-banner-container">
        {/* RUNNER CONTAINER */}
        <div
          className="run-banner-runner-wrapper"
          style={{ transform: `translateX(${runnerXPercent}%)` }}
        >
          {/* SPEED WIND LINES BEHIND CHARACTER */}
          <div className="run-banner-wind streak-1"></div>
          <div className="run-banner-wind streak-2"></div>
          <div className="run-banner-wind streak-3"></div>
          <div className="run-banner-wind streak-4"></div>

          {/* LIGHT TRAIL AURA */}
          <div className="run-banner-light-trail"></div>

          {/* NEON RUNNER IMAGE (REPLACED SVG) */}
          <img
            src={runnerImg}
            alt="Neon Runner"
            className="run-banner-runner-img"
          />
        </div>

        {/* CONTENT */}
        <div className="run-banner-content">
          <span className="run-banner-tag">JOIN THE MOVEMENT</span>
          <h2 className="run-banner-title">
            Ready To Elevate <span>Your Game?</span>
          </h2>
          <p className="run-banner-desc">
            Join Medallin Sports and take the first step towards excellence.
          </p>
        </div>

        {/* BUTTON */}
        <div className="run-banner-action">
          <button className="run-banner-btn">
            Get In Touch <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}