// import "./Stats.css";
// import { useEffect, useRef, useState } from "react";
// import { ChevronRight } from "lucide-react";

// import img1 from "../../assets/img1.jpeg";
// import img2 from "../../assets/img2.jpeg";
// import img3 from "../../assets/right.png";
// import img4 from "../../assets/what-we-run.png";
// import img5 from "../../assets/left.png";

// const steps = [
//   {
//     id: "01",
//     title: "DISCOVERY & STRATEGY",
//     tag: "HOME LEG",
//     desc:
//       "Understanding the property, audience and commercial goals before creating the perfect sports strategy.",
//     image: img1,
//   },
//   {
//     id: "02",
//     title: "PROGRAM DESIGN",
//     tag: "PRE SEASON",
//     desc:
//       "Building campaigns, sponsorships and experiences that align with business objectives.",
//     image: img2,
//   },
//   {
//     id: "03",
//     title: "PRODUCTION & EXECUTION",
//     tag: "MATCH DAY",
//     desc:
//       "Delivering events with flawless execution across venues, logistics and operations.",
//     image: img3,
//   },
//   {
//     id: "04",
//     title: "MEDIA & AMPLIFICATION",
//     tag: "EXTRA TIME",
//     desc:
//       "Creating powerful visual stories through digital media, broadcasting and production.",
//     image: img4,
//   },
//   {
//     id: "05",
//     title: "REPORTING & RENEWAL",
//     tag: "FULL TIME",
//     desc:
//       "Measuring success, audience impact and planning the next sporting season.",
//     image: img5,
//   },
// ];

// export default function Stats() {
//   const [active, setActive] = useState(0);

//   const refs = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActive(Number(entry.target.dataset.index));
//           }
//         });
//       },
//       {
//         threshold: 0.65,
//       }
//     );

//     refs.current.forEach((item) => {
//       if (item) observer.observe(item);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="stats">

//       <div className="stats-glow glow-left"></div>
//       <div className="stats-glow glow-right"></div>

//       <div className="stats-container">

//         <div className="stats-heading">

//           <span>
//             HOW AN ENGAGEMENT RUNS
//           </span>

//           <h2>
//             THE FIXTURE LIST
//           </h2>

//           <p>
//             Every client engagement runs like a season —
//             every fixture builds toward one winning result.
//           </p>

//         </div>

//         <div className="stats-layout">

//           {/* LEFT */}

//           <div className="stats-content">

//             {steps.map((item, index) => (

//               <div
//                 key={index}
//                 ref={(el) => (refs.current[index] = el)}
//                 data-index={index}
//                 className={`stats-item ${
//                   active === index ? "active" : ""
//                 }`}
//               >

//                 <div className="stats-number">

//                   <span>{item.id}</span>

//                 </div>

//                 <div className="stats-text">

//                   <small>{item.tag}</small>

//                   <h3>{item.title}</h3>

//                   <p>{item.desc}</p>

//                   <button>

//                     Learn More

//                     <ChevronRight size={18} />

//                   </button>

//                 </div>

//               </div>

//             ))}

//           </div>

//           {/* CENTER */}

//           <div className="timeline">

//             <div className="timeline-line"></div>

//             {steps.map((_, index) => (

//               <div
//                 key={index}
//                 className={`timeline-dot ${
//                   active === index ? "dot-active" : ""
//                 }`}
//               >
//                 <span></span>
//               </div>

//             ))}

//           </div>

//           {/* RIGHT */}

//           <div className="stats-image-wrapper">

//             {steps.map((item, index) => (

//               <img
//                 key={index}
//                 src={item.image}
//                 alt=""
//                 className={`stats-image ${
//                   active === index ? "show-image" : ""
//                 }`}
//               />

//             ))}

//             <div className="image-overlay"></div>

//             <div className="floating-card">

//               <span>LIVE SPORTS</span>

//               <h4>Creating unforgettable sporting experiences.</h4>

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }



// // import img1 from "../../assets/hero.png";
// // import img2 from "../../assets/left.png";
// // import img3 from "../../assets/right.png";
// // import img4 from "../../assets/what-we-run.png";
// // import img5 from "../../assets/left.png";
import { useState } from "react";
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8VnTYVE3sjZx6ZylL7co15NBe9gXlZphIyZqFB0vrSA&s=10?auto=compress&cs=tinysrgb&w=1000",
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
          {/* Main Visual Screen */}
          <div className="dashboard-media">
            <img
              src={currentStep.image}
              alt={currentStep.title}
              key={currentStep.id}
              className="media-bg image-zoom-animation"
            />
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

            <h3 className="content-title">{currentStep.title}</h3>
            <h4 className="content-subtitle">{currentStep.subtitle}</h4>

            <p className="content-desc">{currentStep.desc}</p>

            {/* Navigation Controls */}
            <div className="fixture-controls">
              <button onClick={handlePrev} className="ctrl-btn" aria-label="Previous">
                <ChevronLeft size={20} />
              </button>
              
              <div className="dots-indicator">
                {fixtureSteps.map((_, idx) => (
                  <span
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`dot ${activeIndex === idx ? "dot-active" : ""}`}
                  ></span>
                ))}
              </div>

              <button onClick={handleNext} className="ctrl-btn highlight" aria-label="Next">
                <ChevronRight size={20} />
              </button>
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