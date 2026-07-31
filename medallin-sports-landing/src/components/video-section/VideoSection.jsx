import React, { useState } from "react";
import "./VideoSection.css";
import { Play, X } from "lucide-react";

// Aapka video path yahan add karein:
import sportsVideo from "../../assets/sports-video.mp4"; 

export default function VideoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="ms-story-section">
      {/* Background Neon Grid Accent */}
      <div className="ms-story-bg-glow"></div>

      <div className="ms-story-wrapper">
        {/* LEFT CONTENT */}
        <div className="ms-story-text-box">
          <span className="ms-story-badge">OUR STORY</span>
          <h2 className="ms-story-heading">
            Watch Our Journey <br />
            <span>In Action</span>
          </h2>
          <p className="ms-story-paragraph">
            Discover how Medallin Sports is shaping athletes, building champions
            and creating a better tomorrow through sports.
          </p>
          <button className="ms-story-action-btn" onClick={() => setIsVideoOpen(true)}>
            Watch Video <Play size={16} fill="currentColor" />
          </button>
        </div>

        {/* RIGHT VIDEO CARD */}
        <div className="ms-vid-card-holder">
          {/* Animated Neon Wave Accent */}
          <div className="ms-vid-neon-wave"></div>

          <div className="ms-vid-frame">
            {/* Background Video Preview */}
            <video
              className="ms-vid-bg-preview"
              muted
              loop
              autoPlay
              playsInline
              src={sportsVideo}
            />

            <div className="ms-vid-shade-overlay"></div>

            {/* PULSING PLAY BUTTON */}
           
          </div>
        </div>
      </div>

      {/* FULLSCREEN POPUP VIDEO */}
      {isVideoOpen && (
        <div className="ms-vid-modal-overlay" onClick={() => setIsVideoOpen(false)}>
          <div className="ms-vid-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="ms-vid-close-btn" onClick={() => setIsVideoOpen(false)}>
              <X size={28} />
            </button>
            <video
              className="ms-vid-player-full"
              controls
              autoPlay
              src={sportsVideo}
            />
          </div>
        </div>
      )}
    </section>
  );
}