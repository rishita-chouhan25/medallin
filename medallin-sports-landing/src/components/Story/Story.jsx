import "./Story.css";
import businessImage from "../../assets/what-we-run.png";

const storyData = [
  {
    small: "Events",
    title: "EVENTS & FAN EXPERIENCES",
    desc: "Sports events, conferences, exhibitions, and curated fan experiences — from stadium walks to player meet-and-greets.",
  },
  {
    small: "Talent",
    title: "ATHLETE & TALENT MANAGEMENT",
    desc: "Brand building, endorsements, PR, and social media management for athletes across multiple sports.",
  },
  {
    small: "Brand",
    title: "SPONSORSHIP & ACTIVATION",
    desc: "Connecting brand budgets to the right sporting property, plus activation campaigns and licensing partnerships.",
  },
  {
    small: "Media",
    title: "CREATIVE & PRODUCTION",
    desc: "Brand identity, marketing content, sports production & broadcasting support, including commentary and tracking.",
  },
];

export default function Story() {
  return (
    <section className="story-section">

      <div className="story-glow glow-left"></div>
      <div className="story-glow glow-right"></div>

      <div className="story-container">

        <div className="story-top">

          <div className="story-left">

            <span className="story-tag">
              WHAT WE RUN
            </span>

            <h2 className="story-title">
              FOUR BUSINESSES,
              <br />
              ONE SPORTS
              <br />
              COMPANY
            </h2>
 <p>
              Beyond tickets and travel, Medallin runs the events,
              athlete careers, brand partnerships, and media production
              that make up the wider sports business — kept under one roof.
            </p>
          </div>

         <div className="story-right">
  <img
    src={businessImage}
    alt="Business"
    className="story-image"
  />
</div>

        </div>

        <div className="story-grid">

          {storyData.map((item, index) => (

            <div className="story-card" key={index}>

              <span className="card-small">
                {item.small}
              </span>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}