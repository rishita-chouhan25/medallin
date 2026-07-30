// import "./Story.css";
// import businessImage from "../../assets/what-we-run.png";

// const storyData = [
//   {
//     small: "Events",
//     title: "EVENTS & FAN EXPERIENCES",
//     desc: "Sports events, conferences, exhibitions, and curated fan experiences — from stadium walks to player meet-and-greets.",
//   },
//   {
//     small: "Talent",
//     title: "ATHLETE & TALENT MANAGEMENT",
//     desc: "Brand building, endorsements, PR, and social media management for athletes across multiple sports.",
//   },
//   {
//     small: "Brand",
//     title: "SPONSORSHIP & ACTIVATION",
//     desc: "Connecting brand budgets to the right sporting property, plus activation campaigns and licensing partnerships.",
//   },
//   {
//     small: "Media",
//     title: "CREATIVE & PRODUCTION",
//     desc: "Brand identity, marketing content, sports production & broadcasting support, including commentary and tracking.",
//   },
// ];

// export default function Story() {
//   return (
//     <section className="story-section">

//       <div className="story-glow glow-left"></div>
//       <div className="story-glow glow-right"></div>

//       <div className="story-container">

//         <div className="story-top">

//           <div className="story-left">

//             <span className="story-tag">
//               WHAT WE RUN
//             </span>

//             <h2 className="story-title">
//               FOUR BUSINESSES,
//               <br />
//               ONE SPORTS
//               <br />
//               COMPANY
//             </h2>
//  <p>
//               Beyond tickets and travel, Medallin runs the events,
//               athlete careers, brand partnerships, and media production
//               that make up the wider sports business — kept under one roof.
//             </p>
//           </div>

//          <div className="story-right">
//   <img
//     src={businessImage}
//     alt="Business"
//     className="story-image"
//   />
// </div>

//         </div>

//         <div className="story-grid">

//           {storyData.map((item, index) => (

//             <div className="story-card" key={index}>

//               <span className="card-small">
//                 {item.small}
//               </span>

//               <h3>
//                 {item.title}
//               </h3>

//               <p>
//                 {item.desc}
//               </p>

//             </div>

//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }
import React, { useState } from "react";
import "./Story.css";
import { ArrowUpRight, ShieldCheck, Sparkles, Trophy, Users, Megaphone, Tv } from "lucide-react";

// Image imports (Aap apne images dynamically / assets se swap kar sakte hain)
import businessImageDefault from "../../assets/what-we-run.png";

const storyData = [
  {
    id: "events",
    small: "Vertical 01",
    title: "EVENTS & FAN EXPERIENCES",
    badge: "Flagship Offering",
    icon: <Trophy size={20} className="card-icon" />,
    desc: "Curating world-class sports events, exhibitions, and VIP fan experiences. From exclusive stadium walks to private player meet-and-greets.",
    tags: ["T20 World Cup 2026", "VIP Packages", "Fan Parks", "Hospitality"],
    image: "https://images.pexels.com/photos/270085/pexels-photo-270085.jpeg?auto=compress&cs=tinysrgb&w=1000"
  },
  {
    id: "talent",
    small: "Vertical 02",
    title: "ATHLETE & TALENT MANAGEMENT",
    badge: "Global Roster",
    icon: <Users size={20} className="card-icon" />,
    desc: "360° career strategy, high-value brand endorsements, PR management, and international image building for star athletes.",
    tags: ["Endorsements", "Media & PR", "Career Planning", "Social Media"],
    image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1000"
  },
  {
    id: "brand",
    small: "Vertical 03",
    title: "SPONSORSHIP & ACTIVATION",
    badge: "Brand Synergy",
    icon: <Megaphone size={20} className="card-icon" />,
    desc: "Bridging the gap between corporate brands and premium sports properties to deliver maximum ROI through dynamic activations.",
    tags: ["League Rights", "Stadium Branding", "CSR Sports", "Merchandising"],
    image: "https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=1000"
  },
  {
    id: "media",
    small: "Vertical 04",
    title: "CREATIVE & PRODUCTION",
    badge: "Broadcast & Tech",
    icon: <Tv size={20} className="card-icon" />,
    desc: "End-to-end media production, broadcast support, live graphics, commentary talent curation, and digital storytelling.",
    tags: ["Live Broadcast", "Documentaries", "Ad Campaigns", "Tracking Tech"],
    image: "https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=1000"
  }
];

export default function Story() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeData = storyData[activeIndex];

  return (
    <section className="story-section">
      {/* Background Glow Elements */}
      <div className="story-glow glow-left"></div>
      <div className="story-glow glow-right"></div>

      <div className="story-container">
        {/* TOP SECTION */}
        <div className="story-top">
          <div className="story-left">
            <span className="story-tag">
              <Sparkles size={14} /> WHAT WE RUN
            </span>

            <h2 className="story-title">
              FOUR BUSINESSES,
              <br />
              <span>ONE SPORTS</span>
              <br />
              POWERHOUSE
            </h2>

            <p>
              Beyond traditional hospitality, Medallin operates an end-to-end sports ecosystem—integrating athlete careers, event execution, commercial sponsorships, and broadcast media under one unified umbrella.
            </p>

            {/* Quick Stat Highlights */}
            <div className="story-stats">
              <div className="stat-item">
                <h4>100%</h4>
                <span>Official Partner</span>
              </div>
              <div className="stat-item">
                <h4>50M+</h4>
                <span>Fan Reach</span>
              </div>
              <div className="stat-item">
                <h4>Global</h4>
                <span>Presence</span>
              </div>
            </div>
          </div>

          {/* DYNAMIC RIGHT IMAGE DISPLAY */}
          <div className="story-right">
            <div className="image-frame">
              <img
                src={activeData.image || businessImageDefault}
                alt={activeData.title}
                className="story-image image-fade-in"
                key={activeData.id}
              />
              <div className="image-overlay-info">
                <span className="info-badge">{activeData.badge}</span>
                <h3>{activeData.title}</h3>
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE CARDS GRID */}
        <div className="story-grid">
          {storyData.map((item, index) => (
            <div
              className={`story-card ${activeIndex === index ? "active" : ""}`}
              key={item.id}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="card-header">
                <span className="card-small">{item.small}</span>
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              {/* Dynamic Capability Badges */}
              <div className="card-tags">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="card-action">
                <span>Explore Vertical</span>
                <ArrowUpRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}