import "./Stats.css";
import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";

import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/right.png";
import img4 from "../../assets/what-we-run.png";
import img5 from "../../assets/left.png";

const steps = [
  {
    id: "01",
    title: "DISCOVERY & STRATEGY",
    tag: "HOME LEG",
    desc:
      "Understanding the property, audience and commercial goals before creating the perfect sports strategy.",
    image: img1,
  },
  {
    id: "02",
    title: "PROGRAM DESIGN",
    tag: "PRE SEASON",
    desc:
      "Building campaigns, sponsorships and experiences that align with business objectives.",
    image: img2,
  },
  {
    id: "03",
    title: "PRODUCTION & EXECUTION",
    tag: "MATCH DAY",
    desc:
      "Delivering events with flawless execution across venues, logistics and operations.",
    image: img3,
  },
  {
    id: "04",
    title: "MEDIA & AMPLIFICATION",
    tag: "EXTRA TIME",
    desc:
      "Creating powerful visual stories through digital media, broadcasting and production.",
    image: img4,
  },
  {
    id: "05",
    title: "REPORTING & RENEWAL",
    tag: "FULL TIME",
    desc:
      "Measuring success, audience impact and planning the next sporting season.",
    image: img5,
  },
];

export default function Stats() {
  const [active, setActive] = useState(0);

  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.dataset.index));
          }
        });
      },
      {
        threshold: 0.65,
      }
    );

    refs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats">

      <div className="stats-glow glow-left"></div>
      <div className="stats-glow glow-right"></div>

      <div className="stats-container">

        <div className="stats-heading">

          <span>
            HOW AN ENGAGEMENT RUNS
          </span>

          <h2>
            THE FIXTURE LIST
          </h2>

          <p>
            Every client engagement runs like a season —
            every fixture builds toward one winning result.
          </p>

        </div>

        <div className="stats-layout">

          {/* LEFT */}

          <div className="stats-content">

            {steps.map((item, index) => (

              <div
                key={index}
                ref={(el) => (refs.current[index] = el)}
                data-index={index}
                className={`stats-item ${
                  active === index ? "active" : ""
                }`}
              >

                <div className="stats-number">

                  <span>{item.id}</span>

                </div>

                <div className="stats-text">

                  <small>{item.tag}</small>

                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>

                  <button>

                    Learn More

                    <ChevronRight size={18} />

                  </button>

                </div>

              </div>

            ))}

          </div>

          {/* CENTER */}

          <div className="timeline">

            <div className="timeline-line"></div>

            {steps.map((_, index) => (

              <div
                key={index}
                className={`timeline-dot ${
                  active === index ? "dot-active" : ""
                }`}
              >
                <span></span>
              </div>

            ))}

          </div>

          {/* RIGHT */}

          <div className="stats-image-wrapper">

            {steps.map((item, index) => (

              <img
                key={index}
                src={item.image}
                alt=""
                className={`stats-image ${
                  active === index ? "show-image" : ""
                }`}
              />

            ))}

            <div className="image-overlay"></div>

            <div className="floating-card">

              <span>LIVE SPORTS</span>

              <h4>Creating unforgettable sporting experiences.</h4>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}



// import img1 from "../../assets/hero.png";
// import img2 from "../../assets/left.png";
// import img3 from "../../assets/right.png";
// import img4 from "../../assets/what-we-run.png";
// import img5 from "../../assets/left.png";